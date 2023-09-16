const { createData, findById, updateData, deleteData, findByName } = require("./CrudObject");

describe("Test Crud Object", () => {
  test("when create new object should success", () => {
    let bank = [];
    let result = createData(bank, { id: 1, name: "samsul" });

    expect(result).toEqual([{ id: 1, name: "samsul" }]);
  });
  test("when create new object should success", () => {
    let bank = [{ id: 1, name: "samsul" }];
    let result = createData(bank, { id: 2, name: "bambang" });

    expect(result).toEqual([
      { id: 1, name: "samsul" },
      { id: 2, name: "bambang" },
    ]);
  });
  test("when find a object should success", () => {
    let bank = [
      { id: 1, name: "samsul" },
      { id: 2, name: "bambang" },
    ];
    let result = findById(bank, 2);

    expect(result).toEqual({ id: 2, name: "bambang" });
  });

  test("when update name should success", () => {
    let bank = [
      { id: 1, name: "samsul", age: 16 },
      { id: 2, name: "bambang", age: 16 },
    ];
    let result = updateData(bank, 1, "arifin", 17);

    expect(result).toEqual([
      { id: 1, name: "arifin", age: 17 },
      { id: 2, name: "bambang", age: 16 },
    ]);
  });

  test("when delete data should success", () => {
    let bank = [
      { id: 1, name: "samsul" },
      { id: 2, name: "bambang" },
    ];
    let result = deleteData(bank, 1);

    expect(result).toEqual([{ id: 2, name: "bambang" }]);
  });
  test("when find a object by name should success", () => {
    let bank = [
      { id: 1, name: "mufid" },
      { id: 2, name: "bambang" },
    ];
    let result = findByName(bank, 'mufid');

    expect(result).toEqual({ id: 1, name: "mufid" });
  });
});
