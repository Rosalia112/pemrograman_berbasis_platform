function addSiswa(students, newStudent) {
    students.push(newStudent);
    console.log(`Mahasiswa ${newStudent.nama} berhasil ditambahkan!`);
}

module.exports = addSiswa;