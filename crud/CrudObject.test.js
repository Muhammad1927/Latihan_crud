const {
  createData,
  findById,
  updateData,
  updateAllData,
  deleteData,
  findByName,
} = require("./CrudObject");

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
test("4.when update data should success", () => {
  let bank = [
    { id: 1, name: "samsul" },
    { id: 2, name: "bambang" },
  ];

  // mengubah ID 1 dengan nama Arifin
  // menggunakan const index = objectArray.findIndex((value)=>value.id == id)
  // cara ngubah data
  // dataArray[index] = dataPenggantinya
  // return dataArray;
  let result = updateData(bank, 1, "arifin");
  expect(result).toEqual([
    { id: 1, name: "arifin" },
    { id: 2, name: "bambang" },
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
    let result = findByName(bank, "mufid");

    expect(result).toEqual({ id: 1, name: "mufid" });
  });

  test("when update name should success", () => {
    let bank = [
      { id: 1, name: "samsul", age: 19 },
      { id: 2, name: "bambang", age: 15 },
    ];
    let result = updateAllData(bank, 1, { name: "arifin" });

    expect(result).toEqual([
      { id: 1, name: "arifin", age: 19 },
      { id: 2, name: "bambang", age: 15 },
    ]);
  });
  test("when update name and umur should success", () => {
    let bank = [
      { id: 1, name: "samsul", age: 19 },
      { id: 2, name: "bambang", age: 15 },
    ];
    let result = updateAllData(bank, 1, { name: "arifin", age: 20 });

    expect(result).toEqual([
      { id: 1, name: "arifin", age: 20 },
      { id: 2, name: "bambang", age: 15 },
    ]);
  });
  test("when update age and name with many datesshould success", () => {
    let bank = [
      { id: 1, name: "samsul", age: 19, email: "samsul@test.com" },
      { id: 2, name: "bambang", age: 15, email: "bambang@test.com" },
    ];
    let result = updateAllData(bank, 1, { name: "arifin", age: 20 });

    expect(result).toEqual([
      { id: 1, name: "arifin", age: 20, email: "samsul@test.com" },
      { id: 2, name: "bambang", age: 15, email: "bambang@test.com" },
    ]);
  });

});
