const app = require('app');

const numbers = [
  {number: 1, parity: 'odd'},
  {number: 2, parity: 'even'},
  {number: 3, parity: 'odd'},
]

describe('Parity Validation', () => {
  test.each(numbers.map(element => [element.number, element.parity]))(
    'Parity for number %i - should be %s',
    async (number, parity) => {
      let parityResult = await app.parity(number)
      await expect(parityResult).toBe(parity);
    },
  );
});