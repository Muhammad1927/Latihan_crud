const express = require("express");

const app = express();

// contoh simple sederhana
/**
 * req adalah singkatan dari request yg isi yg dikirimkan oleh client .
 * contoh seperti body, parameter, query
 * res adalah singkatan dari responss yang isinya kita kirim ke client.
 * contoh seperti data, json,  html, dan HTTP (default:200)
 */

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.post('/', (req, res) => {
    res.send('post data')
})

app.put('/', (req, res) => {
    res.send('update data')
})

app.delete('/', (req, res) => {
    res.send('delete data')
})


// biar bisa running
app.listen(3000, () => {
  console.log("Hai Dev, Servermu sudah jalan di http://localhost:3000");
});

// jalaninnya dengan menulis node app.js di terminal
// matikan server dengan ctrl+c
