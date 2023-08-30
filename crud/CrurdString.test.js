const {
  createData,

  readByIdx,
  updateData,
    deleteData,
} = require("./CrudString");

describe("test crud string", () => {
  test("when should success", () => {
    let bank = [];
    let result = createData(bank, "apple");

    expect(result).toEqual(["apple"]);
  });
  test("when should success", () => {
    let bank = ["apple", "mango", "orange"];
    let result = readByIdx(bank, 1);

    expect(result).toEqual("mango");
  });
  test("when should success", () => {
    let bank = ["apple", "mango", "orange"];
    let result = updateData(bank, 2, "pear");

    expect(result).toEqual(["apple", "mango", "pear"]);
  });
    test("when should success", () => {
      let bank = ["apple", "mango", "orange"];
      let result = deleteData(bank, 0);

      expect(result).toEqual(["mango", "pear"]);
    });
});
