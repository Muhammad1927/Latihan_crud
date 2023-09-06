const {
  savingData,
  showAllData,
} = require("../gateways/memory-storage-gateway");
const { nameValidation, ageValid } = require("../validation/validation");

const postDataUserHandler = (req, res) => {
  if (!req.body.name) {
    return res.send({ error: true, message: "tidak memiliki parameter nama" });
  }

  if (!req.body.age) {
    return res.send({ error: true, message: "tidak memiliki parameter umur" });
  }

  let { name, age } = req.body;

  // Mengambil data nama
  let realNameRes = nameValidation(name);
  let realAgeRes = ageValid(age);

  if (realNameRes.error) {
    return res.send(realNameRes, realAgeRes);
  }

  savingData(realNameRes.data, realAgeRes.data);

  res.send({ data: showAllData() });
};

module.exports = { postDataUserHandler };
