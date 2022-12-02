const calc = require('./calcTravel')
const peopleArr = ["adulto", "crianca", "crianca", "crianca"]

test('Converter metro para quilometro', () => {
    expect(calc.convertMetroToKM(32000)).toBe(32)
})

test('Quando distancia < 0, é esperado um erro', () => {
    expect(() => calc.convertMetroToKM(-32000, "etanol")).toThrow();
});

test('Esperado um objeto com o total de passageiros e com os tipos separados', () => {
    expect({ total: 4, adults: 1, children: 3 }).toStrictEqual(calc.filterPeople(peopleArr))
})

test('Quando passado no array algo diferente de adulto ou crianca, é esperado um erro', () => {
    expect(() => calc.filterPeople([null, "crianca", "crianca", "crianca"])).toThrow();
    expect(() => calc.filterPeople(["adulto", undefined, "crianca", "crianca"])).toThrow();
    expect(() => calc.filterPeople(["adulto", "a", "crianca", "crianca"])).toThrow();
    expect(() => calc.filterPeople(["adulto", 2, "crianca", "crianca"])).toThrow();
});

test('Converter Hora para Minuto', () => {
    expect(calc.converthHourToMinute(1)).toBe(60)
    expect(calc.converthHourToMinute(1.5)).toBe(90)
})
test('Quando tempo < 0, é esperado um erro', () => {
    expect(() => calc.converthHourToMinute(-1)).toThrow();
});
test('Quando tempo diferente de numero, é esperado um erro', () => {
    expect(() => calc.converthHourToMinute("a")).toThrow();
    expect(() => calc.converthHourToMinute(null)).toThrow();
    expect(() => calc.converthHourToMinute(undefined)).toThrow();
});


test('Consumo de galosina por km', () => {
    expect(calc.fuelConsume(32000, "gasolina")).toBe(2);
});

test('Consumo de etanol por km', () => {
    expect(calc.fuelConsume(32000, "etanol")).toBe(3);
});

test('se combustivel diferente de gasolina ou etanol, é esperado um erro', () => {
    expect(() => calc.fuelConsume(32000, "a")).toThrow();
});

test('Calcule o número de paradas: Apenas adultos, Se tiver 1 Criança, Se tiver mais criança que adulto', () => {
    expect(calc.numberStops(["adulto", "adulto", "adulto", "adulto"], 3)).toBe(2)
    expect(calc.numberStops(["crianca", "adulto", "adulto", "adulto"], 3)).toBe(3)
    expect(calc.numberStops(["crianca", "crianca", "crianca", "adulto"], 3)).toBe(4)
})
test('Gasto total com refeições: Apenas adultos, Apenas criança, Criana e Adulto', () => {
    expect(calc.costTotal(4, ["adulto", "adulto", "adulto", "adulto"])).toBe(640.00)
    expect(calc.costTotal(4, ["crianca", "crianca", "crianca", "crianca"])).toBe(480.00)
    expect(calc.costTotal(4, ["crianca", "crianca", "adulto", "adulto"])).toBe(560.00)
})