const express = require("express");
const app = express();
const { nameValidation, ageValid } = require("./validation/validation");
// Example
/*
    - req = singkatan dari request. Yang isinya yang dikirimkan oleh client. Contoh seperti body, parameter, query
    - res = singkatan dari response. Yang isinya kita kirim ke client. Contoh seperti data, json, html, dan codeHTTP (default:200)
*/

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.post("/", (req, res) => {
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

app.put('/', (req, res) => {
    res.send('update data')
})

app.delete('/', (req, res) => {
    res.send('delete data')
})


app.delete("/", (req, res) => {
  res.send("Delete data");
});
app.listen(3000, () => {
  console.log("Hai Dev, Servermu sudah jalan di http://localhost:3000");
});

// Untuk menjalankan ketik node app.js di terminal. Untuk cancel tekan Ctr + c.
})
