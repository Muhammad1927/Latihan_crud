const {
  editNamaData,
  editNamaUmurData,
  isIdExist,
} = require("../gateways/memory-storage-gateway");

const ubahDataUserHandler = (req, res) => {
  if (!req.body || !req.body.id) {
    res.status(400);
    return res.send({ error: true, message: "harap memasukkan id" });
  }
  let name = req.body.name;
  let id = req.body.id;
  let age = req.body.age;
  if (id <= 0 || id >= 1000) {
    res.status(400);
    return res.send({
      error: true,
      message: "id tidak boleh lebih dari seribu",
    });
  }

  if (!isIdExist(id)) {
    res.status(400);
    return res.send({ error: true, message: "id tdk ditemukan" });
  }
  editNamaUmurData(id, name, age);

  res.send({ error: false, message: "success" });
};

module.exports = { ubahDataUserHandler };
