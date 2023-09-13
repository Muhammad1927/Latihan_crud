const request = require("supertest");
const app = require("./app");

describe("Test in app", () => {
  test("when get root sould success", async () => {
    let respone = await request(app).get("/");

    expect(respone.status).toBe(200); // ===
    // '5' === 5 => false
    expect(respone.body).toEqual({ data: [] }); // ==
    // '5' === 5 => true
  }, 5000);

  test("when post root sould success", async () => {
    const data = { name: "Muhammad", age: 17 };
    let respone = await request(app).post("/").send(data);

    expect(respone.status).toBe(200);

    expect(respone.body.data[0].name).toBe("Muhammad");
    expect(respone.body.data[0].age).toBe(17);
    expect(typeof respone.body.data[0].id).toBe("number");
  });

  test("when test flow should success", async () => {
    // masukkan semua data
    const data1 = { name: "Muhammad", age: 17 };
    const data2 = { name: "hidayat", age: 18 };
    const data3 = { name: "ppqita", age: 19 };

    await request(app).post("/").send(data1);
    await request(app).post("/").send(data2);
    await request(app).post("/").send(data3);

    // ambil id (random)
    let response = await request(app).get("/");

    let id1 = response.body.data[0].id;
    let id2 = response.body.data[1].id;
    let id3 = response.body.data[2].id;

    // ubah data
    const newData = { id: id3, name: "surakarta" };
    await request(app).put("/").send(newData);

    // hapus data
    await request(app).delete("/").send({ id: id2 });

    // ambil data terbaru
    let response2 = await request(app).get("/");

    console.log(response2)
    // cocokkan
    expect(response2.body).toEqual({
      data: [
        { id: id1, name: "Muhammad", age: 17 },
        { id: id3, name: "surakarta" },
      ],
    });
  });

  afterAll(() => {
    app.close(); // menutup server
  });
});
