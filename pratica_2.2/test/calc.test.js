const calc = require("./calc")

test('1 + 2 = 3', () => {
    expect(calc.soma(1, 2)).toBe(3);
});


test('6 - 2 = 4', () => {
    expect(calc.subtracao(6, 2)).toBe(4);
});

test('3 * 2 = 6', () => {
    expect(calc.multiplicacao(3, 2)).toBe(6);
});
test('10 / 5 = 2', () => {
    expect(calc.divisao(10, 5)).toBe(2);
});