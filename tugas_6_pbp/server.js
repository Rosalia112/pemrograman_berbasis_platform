const express = require('express');
const app = express();
const port = 8000;

var motoGP = [
    {
        circuit: 'Losail',
        location: 'Qatar',
        winner: {
            firstName: 'Andrea',
            lastName: 'Dovizioso',
            country: 'Italy'
        }
    },
    {
        circuit: 'Autodromo',
        location: 'Argentine',
        winner: {
            firstName: 'Cal',
            lastName: 'Crutchlow',
            country: 'UK'
        }
    },
    {
        circuit: 'De Jerez',
        location: 'Spain',
        winner: {
            firstName: 'Valentino',
            lastName: 'Rossi',
            country: 'Italy'
        }
    },
    {
        circuit: 'Mugello',
        location: 'Italy',
        winner: {
            firstName: 'Andrea',
            lastName: 'Dovizioso',
            country: 'Italy'
        }
    }
];

// Route utama -> menampilkan semua data
app.get('/', (req, res) => {
    res.json(motoGP);
});

// Route country mengelompokkan berdasarkan negara
app.get('/country', (req, res) => {
    let result = {};

    motoGP.forEach((race) => {
        const country = race.winner.country;
        if (!result[country]) {
            result[country] = [];
        }
        result[country].push(race);
    });

    res.json(result);
});

// Route name mengelompokkan berdasarkan nama pemenang
app.get('/name', (req, res) => {
    let result = {};

    motoGP.forEach((race) => {
        const name = `${race.winner.firstName} ${race.winner.lastName}`;
        if (!result[name]) {
            result[name] = [];
        }
        result[name].push(race);
    });

    res.json(result);
});

// 4️⃣ Route selain itu -> Bad Request
app.use((req, res) => {
    res.status(400).send('Bad Request');
});

// Jalankan server
app.listen(port, () => {
    console.log(`Server berjalan di http://localhost:${port}`);
});