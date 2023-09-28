window.onload = () => {
  const form = document.getElementById("dataForm");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    // Mengambil data
    const name = document.getElementById("name").value;
    let age = document.getElementById("age").value;
    let id = document.getElementById("id").value;

    // Melakukan validasi ID
    id = parseInt(id); // Mengubah ID menjadi tipe data integer

    if (isNaN(id) || id <= 0 || id >= 1000) {
      alert("ID harus lebih dari 0 dan kurang dari 1000");
      return;
    }

    // Mengirimkan data
    const apiURL = "http://localhost:3001/api/user";

    try {
      const res = await fetch(apiURL, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id, age, name }),
      });

      const resData = await res.json();

      if (resData.error) {
        alert(resData.message);
        return;
      }

      // Memperbarui nilai umur di tampilan setelah perubahan berhasil
      const ageElement = document.getElementById("age");
      ageElement.value = age;

      alert(resData.message);

      window.open("/", "_self");
    } catch (e) {
      alert("Ada kesalahan, harap hubungi tim developer");
      console.log(e);
    }
  });
};
