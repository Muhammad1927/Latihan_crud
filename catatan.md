# Evaluasi

## ketika run test api, maka konflik pada port
Dicari: Bagaimana agar bisa jalan dan efisient?

Solusi 1:

- Close server local, kemudian baru jalankan test api
  #### catatan: 
  - tutup server <br>
    `ctrl+c`
  - jalanin server <br>
  `npm run dev` atau `npm run start`
Solusi 2 :

- Mengubah port server local dari `3000` menjadi `3001`. karena port yg digunakan oleh `smartest`adalah `3000`

``` js

// biar bisa  running

const port = 3001



app.listen(3000, () => {
  console.log("Hai Dev, Servermu sudah jalan di http://localhost:" + port);
});

// jalaninnya dgn menulis node app.js di terminal
// matikan server dgn ctrl+c


module.exports = server;


### Rekomendasi :
**Solusi 2**

# Front End 

bagaimana membuat tampilan front end

- buat folder `public` di root
- buat tampilan html sederhana di dalam public `index. html`
- tambahkan di app.js
  `app.use(express.static('public));`
  digunakan utk membaca seluruh folder `public` yg terdapat di `root`
- utk  

