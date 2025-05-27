function convert() {
  const suhu = parseFloat(document.getElementById("temperature").value);
  const pilihan = document.querySelector('input[name="convertOption"]:checked').value;
  const hasilFahrenheit = document.getElementById("Fahrenheit");
  const kalkulasi = document.getElementById("calculation");

  if (isNaN(suhu)) {
    hasilFahrenheit.value = "";
    kalkulasi.value = "Masukkan suhu yang valid!";
    return;
  }

  let hasil = 0;
  let rumus = "";

  if (pilihan === "cToF") {
    hasil = (suhu * 9 / 5) + 32;
    hasilFahrenheit.value = hasil.toFixed(2) + " °F";
    rumus = `(${suhu} × 9/5) + 32 = ${hasil.toFixed(2)} °F`;
  } else if (pilihan === "fToC") {
    hasil = (suhu - 32) * 5 / 9;
    hasilFahrenheit.value = hasil.toFixed(2) + " °C";
    rumus = `(${suhu} - 32) × 5/9 = ${hasil.toFixed(2)} °C`;
  }

  kalkulasi.value = rumus;
}

function resetForm() {
  document.getElementById("temperature").value = "";
  document.getElementById("Fahrenheit").value = "";
  document.getElementById("calculation").value = "";
  document.querySelector('input[value="cToF"]').checked = true;
      }
