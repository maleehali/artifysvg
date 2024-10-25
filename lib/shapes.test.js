// Import the shape classes from shapes.js
const { Triangle, Circle, Square } = require('./shapes');

// Test case for Triangle
test('Triangle renders correctly', () => {
  const shape = new Triangle('blue'); // Create a Triangle with blue color
  expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />'); // Expected SVG for Triangle
});

// Test case for Circle
test('Circle renders correctly', () => {
  const shape = new Circle('green'); // Create a Circle with green color
  expect(shape.render()).toEqual('<circle cx="150" cy="100" r="80" fill="green" />'); // Expected SVG for Circle
});

// Test case for Square
test('Square renders correctly', () => {
  const shape = new Square('red'); // Create a Square with red color
  expect(shape.render()).toEqual('<rect x="90" y="40" width="120" height="120" fill="red" />'); // Expected SVG for Square
});
