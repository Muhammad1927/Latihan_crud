const {
  createData,
  updateData,
  updateAllData,
  deleteData,
  findByName,
  checkId,
} = require("../crud/CrudObject");

let dataMemory = [];

const savingData = (name, age) => {
  let id = Math.ceil(Math.random() * 1000);
  dataMemory = createData(dataMemory, { id, name, age });
};

const showAllData = () => {
  return dataMemory;
};

const getDataByName = (name) => {
  return findByName(dataMemory, name);
};

const editNamaData = (id, name) => {
  dataMemory = updateData(dataMemory, id, name);

  return dataMemory;
};
const editNamaUmurData = (id, name, age) => {
  dataMemory = updateAllData(dataMemory, id, { name, age });

  return dataMemory;
};

const removeData = (id) => {
  if (typeof id === "string") {
    id = parseInt(id);
  }

  dataMemory = deleteData(dataMemory, id);

  return dataMemory;
};

const isIdExist = (id) => {
  return checkId(dataMemory, id);
};

module.exports = {
  savingData,
  showAllData,
  editNamaData,
  removeData,
  editNamaUmurData,
  getDataByName,
  isIdExist,
};
