const { nameValidation } = require("./validation");
describe("testing validation", () => {
  test("when input less 3 character should error", () => {
    let result = nameValidation("ab");

    expect(result).toEqual({ error: true, message: "nama harus lebih dari 3" });
  });
  test("when input number character should error", () => {
    let result = nameValidation("123455");

    expect(result).toEqual({
      error: true,
      message: "nama tidak boleh pakai angka",
    });
  });

  test("when input space only should error", () => {
    let result = nameValidation("           ");

    expect(result).toEqual({
      error: true,
      message: "nama harus lebih dari 3",
    });
  });
  test("when input space only should error", () => {
    let result = nameValidation("qwertyuioplkjhgfdsaz");

    expect(result).toEqual({
      error: true,
      message: "nama tidak boleh lebih dari 20",
    });
  });
  test("should success", () => {
    let result = nameValidation("Muhammad");

    expect(result).toEqual({ error: false, message: "OK", data: "Muhammad" });
  });

  test("should success", () => {
    let result = nameValidation("Samsul");

    expect(result).toEqual({ error: false, message: "OK", data: "Samsul" });
  });
});
