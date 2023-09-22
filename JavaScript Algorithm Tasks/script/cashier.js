function calc() {
  const jumlah_barang = parseInt(
    document.getElementById("jumlah_barang").value
  );
  const rest = document.getElementById("rest");
  rest.innerHTML = "";

  for (let i = 1; i <= jumlah_barang; i++) {
    rest.innerHTML += `
        <tr>
            <td>
                <select name="items${i}" id="items${i}" onchange="changeItem(this, ${i})">
                  <option value="" selected disabled selected>Pilih barang</option>
                    <option value="gula">Gula 1Kg</option>
                    <option value="kopi">Kopi</option>
                    <option value="sambal">Sambal</option>
                    <option value="kecap">Kecap</option>
                    <option value="minyak">Minyak 1L</option>
                    <option value="sabun">Sabun Batang</option>
                    <option value="sabun_b">Sabun Cair</option>
                </select>
            </td>
            <td>
                <input type="number" class="harga_barang" id="harga_barang${i}" value="0" readonly />
            </td>
            <td><input type="number" class="jumlah_barang_input" id="jumlah_barang_input${i}" /></td>
        </tr>
    `;
  }
}

function updatePrice(selectElement, index) {
  const selectedOption = selectElement.value;
  let hargaBarang = 0;

  if (selectedOption === "gula") {
    hargaBarang = 10000;
  } else if (selectedOption === "kopi") {
    hargaBarang = 5000;
  } else if (selectedOption === "sambal") {
    hargaBarang = 12500;
  } else if (selectedOption === "kecap") {
    hargaBarang = 10000;
  } else if (selectedOption === "minyak") {
    hargaBarang = 15000;
  } else if (selectedOption === "sabun") {
    hargaBarang = 12000;
  } else if (selectedOption === "sabun_b") {
    hargaBarang = 21500;
  }

  const row = selectElement.parentNode.parentNode;
  row.querySelector(".harga_barang").value = hargaBarang;
}

function changeItem(selectElement, index) {
  updatePrice(selectElement, index);
}

function calculateitems() {
  const total = document.getElementById("total");
  let kalibarang = 0;
  const jumlah_barang = parseInt(
    document.getElementById("jumlah_barang").value
  );
  for (let i = 1; i <= jumlah_barang; i++) {
    const harga_barang = parseInt(
      document.getElementById(`harga_barang${i}`).value
    );
    const jumlah_barang_input = parseInt(
      document.getElementById(`jumlah_barang_input${i}`).value
    );

    kalibarang += harga_barang * jumlah_barang_input;
  }

  total.value = kalibarang;
}

function bayarbarang() {
  const total = parseInt(document.getElementById("total").value);
  const bayar = parseInt(document.getElementById("bayar").value);
  const kembalian = document.getElementById("kembalian");

  let hasil = 0;

  hasil = bayar - total;

  if (bayar >= total) {
    kembalian.value = hasil;
  } else {
    kembalian.value = "uang anda kurang";
  }
}

function refreshPage() {
  location.reload();
}
