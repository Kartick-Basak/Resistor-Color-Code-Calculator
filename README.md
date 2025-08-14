Resistor Color Code Calculator
This is a simple and interactive web application for calculating the resistance, tolerance, and temperature coefficient of a resistor based on its color bands. The calculator supports both 4-band and 5-band resistors and provides a visual representation of the selected colors.

Features
Interactive Interface: Select colors from dropdown menus to instantly see the calculated values.

Visual Feedback: The on-screen resistor visually updates to match your selected color bands.

Supports 4 and 5-band resistors: Automatically adjusts the calculation based on whether you select a color for the 5th band.

Responsive Design: Optimized to work on both desktop and mobile devices.

Lightweight: Built with HTML, CSS, and JavaScript.

Setup
To use this application, you need to have the three project files—index.html, style.css, and script.js—in the same directory.

Save the files: Copy the provided code for index.html, style.css, and script.js into separate files.

Open in Browser: Open index.html in your web browser.

The page will load and be ready to use immediately.

How It Works
The application relies on the following logic:

HTML (index.html): Defines the structure of the page, including the resistor visualizer, the color selection dropdowns, and the output fields.

CSS (style.css): Contains custom styles to visually represent the resistor and its color bands.

JavaScript (script.js):

Stores the numerical, multiplier, tolerance, and temperature coefficient values for each color.

Listens for changes on any of the color selection dropdowns.

When a change occurs, it reads the selected colors and performs the calculation.

It determines if the resistor is a 4-band or 5-band type based on the 5th band selection.

The final calculated resistance, tolerance, and temperature coefficient are then displayed on the page.

Customization
You can easily modify this project to fit your needs:

Colors: You can add or change colors and their corresponding values in the colorData object within script.js.

Styling: Adjust the style.css file or the Tailwind classes in index.html to change the layout, colors, or fonts.
