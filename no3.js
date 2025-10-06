const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function wahana(bermain){
  return new Promise((pengukkuran) => rl.question(bermain, pengukkuran));
}

async function cekHarga() {
  const umur = Number(await wahana("Berapa umur anak: "));
  const tb = Number(await wahana("Berapa tinggi badan anak: "));
  tarif = 0;

  if (umur <1 ){
    console.log("Anak anda dilarang masuk")
  }
  else if (umur >= 2 && umur <= 3){
    tarif = 30000;
    if (tb > 70) {
      tarif += 10000
    }
    console.log(`Tarif untuk anak umur ${umur} tahun dengan tinggi badan ${tb}: Rp ${tarif.toLocaleString("id-ID")}`);
  }
  else if (umur >= 4 && umur <= 7){
    tarif = 40000;
    if (tb > 120) {
      tarif += 15000
    }
    console.log(`Tarif untuk anak umur ${umur} tahun dengan tinggi badan ${tb}: Rp ${tarif.toLocaleString("id-ID")}`);
  }
  else if (umur >= 8 && umur <= 10){
    tarif = 50000;
    if (tb > 150) {
      tarif += 20000
    }
    console.log(`Tarif untuk anak umur ${umur} tahun dengan tinggi badan ${tb}: Rp ${tarif.toLocaleString("id-ID")}`);
  }
  else if (umur > 10) {
    tarif = 80000;
    console.log(` Tarif untuk anak umur ${umur} tahun dengan tinggi badan ${tb}: Rp ${tarif.toLocaleString("id-ID")}`);
  }
  else{
    console.log("Umur yang anda nasukkan tidak valid")
  }
  rl.close();
  process.exit(0);
}

cekHarga();