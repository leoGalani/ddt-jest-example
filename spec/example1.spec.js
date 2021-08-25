const fs = require("fs");
const path = require("path");
const app = require('app');

const data_files_path = "../data/groups/"
const files = fs.readdirSync(
  path.resolve(__dirname, data_files_path)
);

describe.each(files)('Bulk parity validation for %s', (file) => {
  let numbers = require(`${data_files_path}${file}`)
  test.each(numbers.array.map(element => [element.number, element.parity]))(
    'Parity for number %i - should be %s',
    async (number, parity) => {
      let parityResult = await app.parity(number)
      await expect(parityResult).toBe(parity);
    },
  );
});