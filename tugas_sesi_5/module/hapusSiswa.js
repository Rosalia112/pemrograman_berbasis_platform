function hapusSiswa(students, nim) {
    const index = students.findIndex(mhs => mhs.nim === nim);

    if (index !== -1) {
        console.log(`Mahasiswa ${students[index].nama} dihapus.`);
        students.splice(index, 1);
    } else {
        console.log("Mahasiswa tidak ditemukan.");
    }
}

module.exports = hapusSiswa;