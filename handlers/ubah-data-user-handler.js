const { editNamaData } = require("../gateways/memory-storage-gateway");

const ubahDataUserHandler = (req, res) => {
  let name = req.body.name;
  let id = req.body.id;

  let age = req.body.age 
  editNamaData(id, name, age);

  res.send({ error: false, message: "success" });
};

module.exports = { ubahDataUserHandler };
