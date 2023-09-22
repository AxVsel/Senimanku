function calculate() {
  const first = document.getElementById("first").value;
  const second = document.getElementById("second").value;
  const third = document.getElementById("third").value;
  const result = document.getElementById("result");
  result.value = getTypeSegitiga(first, second, third);
}

function getTypeSegitiga(first, second, third) {
  if (first == second && second == third) {
    return "Segitiga Tumpul";
  } else if (first == second || second == third || first == third) {
    return "Segitiga Sama Kaki";
  } else {
    return "Segitiga Lancip";
  }
}
