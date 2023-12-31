const createData = (bank, data) => {
  bank.push(data);
  return bank;
};

const findById = (bank, id) => {
  return bank.find((value) => value.id === id);
};

const findByName = (bank, name) => {
  return bank.find((value) => value.name.includes(name));
};

const updateData = (bank, id, value) => {
  // mencari index [0,1,2,...]
  if (typeof id === "string") {
    id = parseInt(id);
  }
  const index = bank.findIndex((value) => value.id === id);
  // mengubah data berdasarkan id

  bank[index] = { ...bank[index], id, name: value };
  // mengembalikan seluruh data yg telah diubah
  return bank;
};

const updateAllData = (bank, id, dataBaru) => {
  if (typeof id === "string") {
    id = parseInt(id);
  }

  const index = bank.findIndex((value) => value.id === id);

  bank[index] = { ...bank[index], ...dataBaru };
  return bank;
};

const deleteData = (bank, id) => {
  const index = bank.findIndex((value) => {
    return value.id === id;
  });

  bank.splice(index, 1);

  return bank;
};

const checkId = (bank, id) => {
  if (typeof id === "string") {
    id = parseInt(id);
  }

  const index = bank.findIndex((data) => data.id === id);

  return index !== -1;
};

module.exports = {
  createData,
  findById,
  deleteData,
  findByName,
  updateData,
  updateAllData,
  checkId,
};
