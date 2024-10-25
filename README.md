# SVG Logo Generator

## Description
This is a Node.js command-line application that generates an SVG logo based on user input. The user is prompted to provide text (up to 3 characters), text color, a shape (circle, triangle, or square), and a shape color. The application will then generate an SVG file containing the customized logo.

## How to Use

### Prerequisites
- Make sure you have [Node.js](https://nodejs.org/) installed on your machine.

### Installation

1. **Clone the Repository**:
   First, clone this repository to your local machine using the following command:
   ```bash
   git clone https://github.com/maleehali/artifysvg.git

2. **Start the Application**:
    To run the application and generate a logo, enter the following command:
   ```node index.js

3. **Follow the Prompts**:
   The application will prompt you for the following information:

Text for the Logo: Enter up to 3 characters (e.g., "SVG").
Text Color: Enter the text color (this can be a color name or a hexadecimal value, e.g., white or #ffffff).
Shape: Choose between Circle, Triangle, or Square.
Shape Color: Enter the shape color (either a color name or hexadecimal value)

Example Prompt:

   ```Enter up to 3 characters for your logo: SVG
Enter the text color (keyword or hex): white
Choose a shape: Circle
Enter the shape color (keyword or hex): green

2. **View the Generated SVG**:
     After you complete the prompts, a file named logo.svg will be generated in the project root. You can open this file in any browser or graphics editor to view your custom logo.

     Example Output:
   ```Generated logo.svg

Running Tests
To run the tests for the application, including tests for the shape rendering functionality, you can use the following command:
   ```npm test


CLICK HERE to watch a walkthrough video!