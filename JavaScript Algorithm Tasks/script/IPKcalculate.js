function hitung(buttonElement) {
  const row = buttonElement.parentNode.parentNode;
  const nilai_angka = parseFloat(row.querySelector(".nilai_angka").value);
  const nilai_huruf = row.querySelector(".nilai_huruf");
  const bobot = row.querySelector(".bobot");

  if (nilai_angka >= 81 && nilai_angka <= 100) {
    nilai_huruf.value = "A +";
    bobot.value = 4.0;
  } else if (nilai_angka >= 78 && nilai_angka <= 80.99) {
    nilai_huruf.value = "A -";
    bobot.value = 3.7;
  } else if (nilai_angka >= 75 && nilai_angka <= 77.99) {
    nilai_huruf.value = "B +";
    bobot.value = 3.3;
  } else if (nilai_angka >= 70 && nilai_angka <= 74.99) {
    nilai_huruf.value = "B";
    bobot.value = 3.0;
  } else if (nilai_angka >= 65 && nilai_angka <= 69.99) {
    nilai_huruf.value = "B -";
    bobot.value = 2.7;
  } else if (nilai_angka >= 60 && nilai_angka <= 64.99) {
    nilai_huruf.value = "C +";
    bobot.value = 2.3;
  } else if (nilai_angka >= 55 && nilai_angka <= 59.99) {
    nilai_huruf.value = "C";
    bobot.value = 2.0;
  } else if (nilai_angka >= 40 && nilai_angka <= 54.99) {
    nilai_huruf.value = "D";
    bobot.value = 1.0;
  } else {
    nilai_huruf.value = "E";
    bobot.value = 0;
  }
}
function hitungKeseluruhan() {
  const totalBobot = document.querySelectorAll(".bobot");
  let total = 0;

  for (let i = 0; i < totalBobot.length; i++) {
    total += parseFloat(totalBobot[i].value);
  }

  const komulatif = document.getElementById("komulatif");
  komulatif.value = (total / totalBobot.length).toFixed(2);
}

function refreshpage() {
  location.reload();
}
