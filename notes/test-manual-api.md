# catatan Ringkas ()

- install extention `Thunder Client`
- buat collection dgn nama `backend-ppqita`
- pada titik tiga di collection `backend-ppqita`, pilih `New Request` berinama `root-get`, url adalah `localhost:3000`
- jalankan server dengan `npm run start`
- jangan lupa simpan dengan `ctrl + s`
- jalankan dengan klik tombol `send`

## test secara manual dengan terminal

untuk get
`curl -X GET http://localhost:3000`

untuk update 
`curl -X PUT http://localhost:3000`

untuk post
`curl -X POST -H 'Content-type: application/json' -d '{"name":"Muhammad Mufid"} http://localhost:3000`

untuk delete 
`curl -X DELETE http://localhost:3000`