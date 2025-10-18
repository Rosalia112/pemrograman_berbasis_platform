let studentScore = [
{
    name : 'Andi',
    score: 90
},
{
    name : 'Rudi',
    score: 80
},
{
    name : 'Dira',
    score: 100
},

]

let highestScore = studentScore.reduce((max, student) => {
    return student.score > max.score ? student : max;
});

console.log(`Nilai tertinggi adalah ${highestScore.score}, didapat oleh ${highestScore.name}`);