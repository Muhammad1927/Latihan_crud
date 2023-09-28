const { MongoClient } = require("mongodb");
const { insertMany, insertOne } = require("./oprations/ExampleInsert");
const {
  findMany,
  findOne,

  isIdExist,
  findWithQuerySpesific,
} = require("./oprations/ExampleFind");
const { updateById } = require("./oprations/ExampleUpdate");
const { deleteById } = require("./oprations/ExampleDelete.js");

async function run() {
  const uri = "mongodb+srv://ppqita:santri@ppqitadb.76fharf.mongodb.net/";

  const {collection, client} = await connectionDB(uri, "testing", "users")


  await cleanDB(collection)


  // @todo 1: menghapus semua data dengan nilai akhir adalah []
  let dataRes = await findMany(collection);
  // console.log('dataRes: ', dataRes);

  for (const data of dataRes) {
    await deleteById(collection, data.id);
  }
  let dataRes2 = await findMany(collection);
  // console.log('dataRes2: ', dataRes2);

  // @todo 2: melakukan crud pada data baru
  let myData = [
    {
      id: 1,
      name: "mufid",
      age: 20,
    },
    {
      id: 2,
      name: "hidayat",
      age: 25,
    },
    {
      id: 3,
      name: "samsul",
      age: 23,
    },
  ];

  const dataRes3 = await insertMany(collection, myData);
  const isIdExisted = await isIdExist(collection, 4);
  console.log('isIdExisted: ', isIdExisted);
  
  

//  if (dataRes3 && dataRes3.insertedCount > 0) {
//    console.log(`${dataRes3.insertedCount} data berhasil dimasukkan.`);
//  } else {
//    console.log("Tidak ada data yang berhasil dimasukkan.");
//  }





  /* const dataRes3 = await insertMany(collection, myData);
  const dataRes4 = await updateById(collection, 2, { name: "shofia" });
  const dataRes5 = await deleteById(collection, 3);
  const dataRes6 = await findMany(collection);
 */

  console.log("data akhir: ", dataRes6);
  /** tidak perlu ditulis
   * data akhir:  [
  {
    _id: new ObjectId("6513b168f42071bdfef2176d"),
    id: 1,
    name: 'ariska',
    age: 20
  },
  {
    _id: new ObjectId("6513b168f42071bdfef2176e"),
    id: 2,
    name: 'shofia',
    age: 25
  }
]
   */

  await client.close();
}

const cleanDB = async (collection) => {
  try {
    let dataRes = await findMany(collection)

    for (const data of dataRes) {
      await deleteById(collection, data.id)
    }
  } catch (error) {
    console.log('error clean DB: ', error);
  }
}

const connectionDB = async(uri, dbName, collectionName) => {
  try {
    const client = new MongoClient(uri);

    await client.connect();


    const database = client.db(dbName);
    const collection = database.collection(collectionName);

    return {collection, client}

  } catch (error) {
    console.log('info error di connectionDB: ', error);
  }
}

run().catch(console.dir);
