const regions = [
  { short: 'N', name: 'Norte' },
  { short: 'NE', name: 'Nordeste' },
  { short: 'CW', name: 'Centroeste' },
  { short: 'SE', name: 'Sudeste' },
  { short: 'S', name: 'Sul' },
];

const states = [
  { short: 'AM', name: 'Amazonas' },
  { short: 'PA', name: 'Pará' },
  { short: 'TO', name: 'Tocantins' },
  { short: 'MG', name: 'Minas Gerais' },
  { short: 'BA', name: 'Bahia' },
  { short: 'PR', name: 'Paraná' },
  { short: 'SP', name: 'São Paulo' },
  { short: 'RN', name: 'Rio Grande do Norte' },
  { short: 'CE', name: 'Ceará' },
];

const cities = [
  { state: 'AM', name: 'Manaus', region: 'N' },
  { state: 'PA', name: 'Belém', region: 'N' },
  { state: 'TO', name: 'Porto Nacional', region: 'N' },
  { state: 'MG', name: 'Lavras', region: 'SE' },
  { state: 'BA', name: 'Feira de Santana', region: 'NE' },
  { state: 'PR', name: 'Cascavel', region: 'S' },
  { state: 'SP', name: 'Presidente Prudente', region: 'SE' },
  { state: 'RN', name: 'Touros', region: 'NE' },
  { state: 'CE', name: 'Jericoacoara', region: 'NE' },
];


/*

- RESULTADO ESPERADO:

  mapCities = {
    N: [
      { city: 'Manaus', state: 'Amazonas' },
      { city: 'Belém', state: 'Pará' },
      { city: 'Porto Nacional', state: 'Tocantins' }
    ],
    NE: [
      { city: 'Feira de Santana', state: 'Bahia' },
      { city: 'Touros', state: 'Rio Grande do Norte' },
      { city: 'Jericoacoara', state: 'Ceará' }
    ],
    SE: [
      { city: 'Lavras', state: 'Minas Gerais' },
      { city: 'Presidente Prudente', state: 'São Paulo' }
    ],
    S: [ { city: 'Cascavel', state: 'Paraná' } ]
  }

*/

const mapCities = {};

regions.forEach((region) => {
  const filterCities = cities.filter((city) =>
    city.region === region.short);

  if (filterCities.length !== 0) {
    mapCities[region.short] = filterCities.map((city) => ({
      city: city.name,
      state: states.find((state) => state.short === city.state).name
    }));
  }
});

console.log(mapCities);
