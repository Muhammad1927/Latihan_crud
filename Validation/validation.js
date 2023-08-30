const nameValidation = (name) => {
  name = name.trim();

  if (name.length <= 3) {
    return { error: true, message: "nama harus lebih dari 3" };
  }
  if (name.length >= 20) {
    return { error: true, message: "nama tidak boleh lebih dari 20" };
  }
  if (!isNaN(parseInt(name))) {
    return { error: true, message: "nama tidak boleh pakai angka" };
  }

  return { error: false, message: "OK", data: name };
};

module.exports = { nameValidation };
