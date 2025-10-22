function hitungRataRata(students) {
    if (students.length === 0) return 0;
    const total = students.reduce((sum, mhs) => sum + mhs.nilai, 0);
    return total / students.length;
}

module.exports = hitungRataRata;