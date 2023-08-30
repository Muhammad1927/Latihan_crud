const { sum } = require("./mymath");
const { kurang } = require("./mymath2");
const { kali } = require("./mymath3");
const { bagi } = require("./mymath4");

describe.skip("testing mymath", () => {
  test("test sum should succes", () => {
    let result = sum(10, 30);

    expect(result).toEqual(40);
  });
  test("test reduce should succes", () => {
    let result = kurang(30, 10);

    expect(result).toEqual(20);
  });
  test("test cross should succes", () => {
    let result = kali(30, 10);

    expect(result).toEqual(300);
  });
  test("test devide should succes", () => {
    let result = bagi(30, 10);

    expect(result).toEqual(3);
  });
});
