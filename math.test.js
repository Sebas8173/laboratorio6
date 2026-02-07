const factorialize = require('./math').factorialize ;

test('Factorial de 5 debe ser 120', () => {
    expect(factorialize(5)).toBe(120);
});

const fibonacciIterativo = require('./math').fibonacciIterativo ;

test('Fibonacci iterativo de 5 debe imprimir 0, 1, 1, 2, 3', () => {
    console.log = jest.fn(); // Mock de console.log
    fibonacciIterativo(5);
    expect(console.log).toHaveBeenNthCalledWith(1, 0);
    expect(console.log).toHaveBeenNthCalledWith(2, 1);
    expect(console.log).toHaveBeenNthCalledWith(3, 1);
    expect(console.log).toHaveBeenNthCalledWith(4, 2);
    expect(console.log).toHaveBeenNthCalledWith(5, 3);
}
);