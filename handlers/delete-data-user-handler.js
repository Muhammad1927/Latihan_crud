const { removeData, isIdExist } = require("../gateways/memory-storage-gateway");

const deleteDataUserHandler = (req, res) => {
if(!req.body || !req.body.id) {
  res.status(400);
  return res.send({error: true, message: 'harap memasukkan id'})
}

  const id = req.body.id;
if (id <= 0 || id >= 1000) {
  res.status(400)
  return res.send({ error: true, message: "id tidak boleh lebih dari seribu" });
}

if(!isIdExist(id)) {
  res.status(400)
  return res.send({error: true, message: 'id tdk ditemukan'})
}
  removeData(id);


  res.send({ error: false, messaeg: "berhasil" });
};

module.exports = { deleteDataUserHandler };
