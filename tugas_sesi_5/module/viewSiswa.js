function viewSiswa(students) {
    console.log("\n Daftar Mahasiswa:");
    if (students.length === 0) {
        console.log("Belum ada data mahasiswa.");
        return;
    }

    students.forEach((mhs, index) => {
        console.log(`${index + 1}. ${mhs.nim} - ${mhs.nama} (Nilai: ${mhs.nilai})`);
    });
}

module.exports = viewSiswa;