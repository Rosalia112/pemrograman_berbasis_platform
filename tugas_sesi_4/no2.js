var motoGP = [
  {
    circuit: 'Losail',
    location: 'Qatar',
    winner: {
      firstName: 'Andrea',
      lastName: 'Dovizioso',
      country: 'Italy'
    },
  },
  {
    circuit: 'Autodromo',
    location: 'Argentine',
    winner: {
      firstName: 'Cal',
      lastName: 'Crutchlow',
      country: 'UK'
    },
  },
  {
    circuit: 'De Jerez',
    location: 'Spain',
    winner: {
      firstName: 'Valentino',
      lastName: 'Rossi',
      country: 'Italy'
    },
  },
  {
    circuit: 'Mugello',
    location: 'Italy',
    winner: {
      firstName: 'Andrea',
      lastName: 'Dovizioso',
      country: 'Italy'
    },
  }
];

var winnersByCountry = {};

for (var i = 0; i < motoGP.length; i++) {
  var country = motoGP[i].winner.country;
  var fullName = motoGP[i].winner.firstName + " " + motoGP[i].winner.lastName;

  if (!winnersByCountry[country]) {
    winnersByCountry[country] = [];
  }
 
  winnersByCountry[country].push(fullName);
}

for (var country in winnersByCountry) {
  console.log(`From ${country}:`);
  console.log(`Win = ${winnersByCountry[country].length}`);
  console.log("Winner names: " + winnersByCountry[country].join(", "));
  console.log("----------------------------------");
}