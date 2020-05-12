

const calculate = (X, Y, callback) => {
    return callback(X, Y);
}

const add = (X, Y) => {
    const sum = X + Y;
    console.log(`Doing calculations with: ${X}  and ${Y}`);
    console.log(`Addition of values: ${X}, ${Y}. Result of calculation is: ${sum}`);
    console.log('======');
}

const subtract = (X, Y) => {
    const subtraction = X - Y;
    console.log(`Doing calculations with: ${X}  and ${Y}`);
    console.log(`Subtraction of values: ${X}, ${Y}. Result of calculation is: ${subtraction}`);
    console.log('======');
}


const multiply = (X, Y) => {
    const multiplication = X * Y;
    console.log(`Doing calculations with: ${X}  and ${Y}`);
    console.log(`Multiplication of values: ${X}, ${Y}. Result of calculation is: ${multiplication}`);
    console.log('======');
}

const dividing = (X, Y) => {
    const divisions = X / Y;
    console.log(`Doing calculations with: ${X}  and ${Y}`);
    console.log(`Division of values: ${X}, ${Y}. Result of calculation is: ${divisions}`);

}

calculate(10, 2, add);
calculate(10, 2, subtract);
calculate(10, 2, multiply);
calculate(10, 2, dividing);










