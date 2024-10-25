// Import necessary modules
const inquirer = require('inquirer'); // Inquirer is used for prompting user input in the command line
const fs = require('fs'); // File system module to write the generated SVG file
const { Triangle, Circle, Square } = require('./lib/shapes'); // Import the shape classes (Triangle, Circle, Square)

// Function to generate the logo based on user input
async function generateLogo() {
  // Prompt the user for logo details
  const answers = await inquirer.prompt([
    {
      type: 'input', 
      name: 'text', 
      message: 'Enter up to 3 characters for your logo:' // User inputs the text for the logo (max 3 characters)
    },
    {
      type: 'input', 
      name: 'textColor', 
      message: 'Enter the text color (keyword or hex):' // User specifies the color for the text
    },
    {
      type: 'list', 
      name: 'shape', 
      message: 'Choose a shape:', 
      choices: ['Circle', 'Triangle', 'Square'] // User selects one of the three available shapes
    },
    {
      type: 'input', 
      name: 'shapeColor', 
      message: 'Enter the shape color (keyword or hex):' // User specifies the color for the selected shape
    }
  ]);

  // Variable to hold the shape object based on user choice
  let shape;
  
  // Switch case to instantiate the correct shape class based on user input
  switch (answers.shape) {
    case 'Circle':
      shape = new Circle(answers.shapeColor); // If 'Circle' is chosen, create a Circle object with the specified color
      break;
    case 'Triangle':
      shape = new Triangle(answers.shapeColor); // If 'Triangle' is chosen, create a Triangle object with the specified color
      break;
    case 'Square':
      shape = new Square(answers.shapeColor); // If 'Square' is chosen, create a Square object with the specified color
      break;
  }

  // Constructing the SVG content using the shape and text provided by the user
  const svgContent = `
    <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
      ${shape.render()} <!-- Render the selected shape's SVG code here -->
      <text x="150" y="125" font-size="60" text-anchor="middle" fill="${answers.textColor}">
        ${answers.text} <!-- Insert the user's text into the SVG at the specified position and color -->
      </text>
    </svg>
  `;

  // Writing the generated SVG content to a file named 'logo.svg'
  fs.writeFileSync('logo.svg', svgContent); // This creates/overwrites the logo.svg file in the project directory
  console.log('Generated logo.svg'); // Output message confirming the SVG file has been created
}

// Invoke the function to run the logo generation process
generateLogo();
