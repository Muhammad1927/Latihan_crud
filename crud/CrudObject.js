const createData = (bank, data) => {
  bank.push(data);
  return bank;
};

const findById = (bank, id) => {
  return bank.find((item) => item.id === id);
};

const updateData = (bank, id, value) => {
  const index = bank.findIndex((value) => value.id == id);
  bank[index] = { id, name: value };
  return bank;
};

const deleteData = (bank, id) => {
  const index = bank.findIndex((value) => value.id == id);
  bank.splice(index, 1);
  return bank;
};
module.exports = { createData, findById, updateData, deleteData };
