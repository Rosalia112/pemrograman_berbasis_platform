// app.js
const addSiswa = require('./module/addSiswa');
const viewSiswa = require('./module/viewSiswa');
const hapusSiswa = require('./module/hapusSiswa');
const hitungRataRata = require('./module/hitungRataRata');

let students = [];

// Tambah data
addSiswa(students, { nim: "2440001", nama: "Rosa", nilai: 85 });
addSiswa(students, { nim: "2440002", nama: "Nadia", nilai: 90 });
addSiswa(students, { nim: "2440003", nama: "Rafi", nilai: 78 });

// Tampilkan semua mahasiswa
viewSiswa(students);

// Hapus mahasiswa dengan NIM tertentu
hapusSiswa(students, "2440002");

// Tampilkan lagi setelah dihapus
viewSiswa(students);

// Hitung rata-rata nilai
const avg = hitungRataRata(students);
console.log(`\n Rata-rata nilai mahasiswa: ${avg.toFixed(2)}`);