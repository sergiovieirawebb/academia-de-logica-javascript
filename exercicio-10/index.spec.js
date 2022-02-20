const { sum, subtract, summationOf } = require('./math');


describe('the function sum', () => {
  it('Retorna 5 quando as entradas são 2 e 3', () => {
    expect(sum(2, 3)).toBe(5);
  });
});

describe('A função substract', () => {
  it('Retorna -1 quando as entradas são 2 e 3', () => {
    expect(subtract(2, 3)).toBe(-1);
  });
});

describe('the function summationOf', () => {
  it('exists', () => {
    expect(typeof summationOf).toBe('function');
  });
});
