document.addEventListener('DOMContentLoaded', () => {

    const colorData = {
        'black': { digit: 0, multiplier: 1, tempCoeff: null, hex: '#000000' },
        'brown': { digit: 1, multiplier: 10, tolerance: '±1%', tempCoeff: '100 ppm/K', hex: '#8B4513' },
        'red': { digit: 2, multiplier: 100, tolerance: '±2%', tempCoeff: '50 ppm/K', hex: '#FF0000' },
        'orange': { digit: 3, multiplier: 1000, tempCoeff: '15 ppm/K', hex: '#FFA500' },
        'yellow': { digit: 4, multiplier: 10000, tempCoeff: '25 ppm/K', hex: '#FFFF00' },
        'green': { digit: 5, multiplier: 100000, tolerance: '±0.5%', tempCoeff: '20 ppm/K', hex: '#008000' },
        'blue': { digit: 6, multiplier: 1000000, tolerance: '±0.25%', tempCoeff: '10 ppm/K', hex: '#0000FF' },
        'violet': { digit: 7, multiplier: 10000000, tolerance: '±0.1%', tempCoeff: '5 ppm/K', hex: '#8A2BE2' },
        'grey': { digit: 8, multiplier: 100000000, tolerance: '±0.05%', hex: '#808080' },
        'white': { digit: 9, multiplier: 1000000000, hex: '#FFFFFF' },
        'gold': { digit: null, multiplier: 0.1, tolerance: '±5%', hex: '#FFD700' },
        'silver': { digit: null, multiplier: 0.01, tolerance: '±10%', hex: '#C0C0C0' },
    };

  
    const bandSelects = {
        band1: document.getElementById('band1'),
        band2: document.getElementById('band2'),
        band3: document.getElementById('band3'),
        band4: document.getElementById('band4'),
        band5: document.getElementById('band5'),
    };

    const bandVisuals = {
        band1: document.getElementById('band-1-visual'),
        band2: document.getElementById('band-2-visual'),
        band3: document.getElementById('band-3-visual'),
        band4: document.getElementById('band-4-visual'),
        band5: document.getElementById('band-5-visual'),
    };

    const resistanceValueElem = document.getElementById('resistance-value');
    const toleranceValueElem = document.getElementById('tolerance-value');
    const tempCoeffValueElem = document.getElementById('temp-coeff-value');

    const formatResistance = (value) => {
        if (value >= 1000000000) {
            return `${(value / 1000000000).toFixed(2)} GΩ`;
        }
        if (value >= 1000000) {
            return `${(value / 1000000).toFixed(2)} MΩ`;
        }
        if (value >= 1000) {
            return `${(value / 1000).toFixed(2)} kΩ`;
        }
        return `${value} Ω`;
    };

    // Main calculation function
    const calculateResistance = () => {
        const color1 = bandSelects.band1.value;
        const color2 = bandSelects.band2.value;
        const color3 = bandSelects.band3.value;
        const color4 = bandSelects.band4.value;
        const color5 = bandSelects.band5.value;

        // Update visual bands with hex colors
        bandVisuals.band1.style.backgroundColor = colorData[color1].hex;
        bandVisuals.band2.style.backgroundColor = colorData[color2].hex;
        bandVisuals.band3.style.backgroundColor = colorData[color3].hex;
        bandVisuals.band4.style.backgroundColor = colorData[color4].hex;
        bandVisuals.band5.style.backgroundColor = color5 === '' ? 'transparent' : colorData[color5].hex;

        
        let value;
        if (color5) {   // 5-band resistor (Band 1, 2, 3 are digits)
            const digit1 = colorData[color1].digit;
            const digit2 = colorData[color2].digit;
            const digit3 = colorData[color3].digit;
            const multiplier = colorData[color4].multiplier;
            const tolerance = colorData[color5].tolerance;
            const tempCoeff = colorData[color5].tempCoeff;
            
            if (digit1 === null || digit2 === null || digit3 === null || multiplier === null) {
                resistanceValueElem.textContent = "Invalid Color Combination";
                toleranceValueElem.textContent = "";
                tempCoeffValueElem.textContent = "";
                return;
            }
            
            value = (digit1 * 100 + digit2 * 10 + digit3) * multiplier;

            resistanceValueElem.textContent = formatResistance(value);
            toleranceValueElem.textContent = `Tolerance: ${colorData[color4].tolerance}`;
            tempCoeffValueElem.textContent = `Temp. Coeff.: ${tempCoeff}`;

        } else {    // 4-band resistor (Band 1, 2 are digits)

            const digit1 = colorData[color1].digit;
            const digit2 = colorData[color2].digit;
            const multiplier = colorData[color3].multiplier;
            const tolerance = colorData[color4].tolerance;

            if (digit1 === null || digit2 === null || multiplier === null) {
                resistanceValueElem.textContent = "Invalid Color Combination";
                toleranceValueElem.textContent = "";
                tempCoeffValueElem.textContent = "";
                return;
            }

            value = (digit1 * 10 + digit2) * multiplier;
            
            resistanceValueElem.textContent = formatResistance(value);
            toleranceValueElem.textContent = `Tolerance: ${tolerance}`;
            tempCoeffValueElem.textContent = "";
        }
    };
    
    
    Object.values(bandSelects).forEach(select => {
        select.addEventListener('change', calculateResistance);
    });

    // Initialization
    bandSelects.band1.value = 'brown';
    bandSelects.band2.value = 'black';
    bandSelects.band3.value = 'black';
    bandSelects.band4.value = 'gold';
    bandSelects.band5.value = ''; // Default to 4-band
    calculateResistance();
});
