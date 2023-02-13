/* eslint-disable max-lines */
/* eslint-disable sonarjs/no-duplicate-string */
/* eslint-disable max-len */

const firstPageMock = [
  {
    abilities: [
      {
        ability: {
          name: 'overgrow',
          url: 'https://pokeapi.co/api/v2/ability/65/',
        },
        is_hidden: false,
        slot: 1,
      },
      {
        ability: {
          name: 'chlorophyll',
          url: 'https://pokeapi.co/api/v2/ability/34/',
        },
        is_hidden: true,
        slot: 3,
      },
    ],
    height: 7,
    weight: 69,
    id: 1,
    name: 'bulbasaur',
    types: [
      {
        slot: 1,
        type: {
          name: 'grass',
          url: 'https://pokeapi.co/api/v2/type/12/',
        },
      },
      {
        slot: 2,
        type: {
          name: 'poison',
          url: 'https://pokeapi.co/api/v2/type/4/',
        },
      },
    ],
    stats: [
      {
        base_stat: 45,
        effort: 0,
        stat: {
          name: 'hp',
          url: 'https://pokeapi.co/api/v2/stat/1/',
        },
      },
      {
        base_stat: 49,
        effort: 0,
        stat: {
          name: 'attack',
          url: 'https://pokeapi.co/api/v2/stat/2/',
        },
      },
      {
        base_stat: 49,
        effort: 0,
        stat: {
          name: 'defense',
          url: 'https://pokeapi.co/api/v2/stat/3/',
        },
      },
      {
        base_stat: 65,
        effort: 1,
        stat: {
          name: 'special-attack',
          url: 'https://pokeapi.co/api/v2/stat/4/',
        },
      },
      {
        base_stat: 65,
        effort: 0,
        stat: {
          name: 'special-defense',
          url: 'https://pokeapi.co/api/v2/stat/5/',
        },
      },
      {
        base_stat: 45,
        effort: 0,
        stat: {
          name: 'speed',
          url: 'https://pokeapi.co/api/v2/stat/6/',
        },
      },
    ],
    sprites: {
      back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png',
      back_female: null,
      back_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/1.png',
      back_shiny_female: null,
      front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
      front_female: null,
      front_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/1.png',
      front_shiny_female: null,
      other: {
        'official-artwork': {
          front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png',
          front_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/1.png',
        },
      },
    },
  },
  {
    abilities: [
      {
        ability: {
          name: 'overgrow',
          url: 'https://pokeapi.co/api/v2/ability/65/',
        },
        is_hidden: false,
        slot: 1,
      },
      {
        ability: {
          name: 'chlorophyll',
          url: 'https://pokeapi.co/api/v2/ability/34/',
        },
        is_hidden: true,
        slot: 3,
      },
    ],
    height: 10,
    weight: 130,
    id: 2,
    name: 'ivysaur',
    types: [
      {
        slot: 1,
        type: {
          name: 'grass',
          url: 'https://pokeapi.co/api/v2/type/12/',
        },
      },
      {
        slot: 2,
        type: {
          name: 'poison',
          url: 'https://pokeapi.co/api/v2/type/4/',
        },
      },
    ],
    stats: [
      {
        base_stat: 60,
        effort: 0,
        stat: {
          name: 'hp',
          url: 'https://pokeapi.co/api/v2/stat/1/',
        },
      },
      {
        base_stat: 62,
        effort: 0,
        stat: {
          name: 'attack',
          url: 'https://pokeapi.co/api/v2/stat/2/',
        },
      },
      {
        base_stat: 63,
        effort: 0,
        stat: {
          name: 'defense',
          url: 'https://pokeapi.co/api/v2/stat/3/',
        },
      },
      {
        base_stat: 80,
        effort: 1,
        stat: {
          name: 'special-attack',
          url: 'https://pokeapi.co/api/v2/stat/4/',
        },
      },
      {
        base_stat: 80,
        effort: 1,
        stat: {
          name: 'special-defense',
          url: 'https://pokeapi.co/api/v2/stat/5/',
        },
      },
      {
        base_stat: 60,
        effort: 0,
        stat: {
          name: 'speed',
          url: 'https://pokeapi.co/api/v2/stat/6/',
        },
      },
    ],
    sprites: {
      back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/2.png',
      back_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/2.png',
      front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png',
      front_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/2.png',
      other: {
        'official-artwork': {
          front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/2.png',
          front_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/2.png',
        },
      },
    },
  },
  {
    abilities: [
      {
        ability: {
          name: 'overgrow',
          url: 'https://pokeapi.co/api/v2/ability/65/',
        },
        is_hidden: false,
        slot: 1,
      },
      {
        ability: {
          name: 'chlorophyll',
          url: 'https://pokeapi.co/api/v2/ability/34/',
        },
        is_hidden: true,
        slot: 3,
      },
    ],
    height: 20,
    weight: 1000,
    id: 3,
    name: 'venusaur',
    types: [
      {
        slot: 1,
        type: {
          name: 'grass',
          url: 'https://pokeapi.co/api/v2/type/12/',
        },
      },
      {
        slot: 2,
        type: {
          name: 'poison',
          url: 'https://pokeapi.co/api/v2/type/4/',
        },
      },
    ],
    stats: [
      {
        base_stat: 80,
        effort: 0,
        stat: {
          name: 'hp',
          url: 'https://pokeapi.co/api/v2/stat/1/',
        },
      },
      {
        base_stat: 82,
        effort: 0,
        stat: {
          name: 'attack',
          url: 'https://pokeapi.co/api/v2/stat/2/',
        },
      },
      {
        base_stat: 83,
        effort: 0,
        stat: {
          name: 'defense',
          url: 'https://pokeapi.co/api/v2/stat/3/',
        },
      },
      {
        base_stat: 100,
        effort: 2,
        stat: {
          name: 'special-attack',
          url: 'https://pokeapi.co/api/v2/stat/4/',
        },
      },
      {
        base_stat: 100,
        effort: 1,
        stat: {
          name: 'special-defense',
          url: 'https://pokeapi.co/api/v2/stat/5/',
        },
      },
      {
        base_stat: 80,
        effort: 0,
        stat: {
          name: 'speed',
          url: 'https://pokeapi.co/api/v2/stat/6/',
        },
      },
    ],
    sprites: {
      back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/3.png',
      back_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/3.png',
      front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png',
      front_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/3.png',
      other: {
        'official-artwork': {
          front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/3.png',
          front_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/3.png',
        },
      },
    },
  },
  {
    abilities: [
      {
        ability: {
          name: 'blaze',
          url: 'https://pokeapi.co/api/v2/ability/66/',
        },
        is_hidden: false,
        slot: 1,
      },
      {
        ability: {
          name: 'solar-power',
          url: 'https://pokeapi.co/api/v2/ability/94/',
        },
        is_hidden: true,
        slot: 3,
      },
    ],
    height: 10,
    weight: 190,
    id: 4,
    name: 'charmander',
    types: [
      {
        slot: 1,
        type: {
          name: 'fire',
          url: 'https://pokeapi.co/api/v2/type/10/',
        },
      },
    ],
    stats: [
      {
        base_stat: 39,
        effort: 0,
        stat: {
          name: 'hp',
          url: 'https://pokeapi.co/api/v2/stat/1/',
        },
      },
      {
        base_stat: 52,
        effort: 0,
        stat: {
          name: 'attack',
          url: 'https://pokeapi.co/api/v2/stat/2/',
        },
      },
      {
        base_stat: 43,
        effort: 0,
        stat: {
          name: 'defense',
          url: 'https://pokeapi.co/api/v2/stat/3/',
        },
      },
      {
        base_stat: 60,
        effort: 0,
        stat: {
          name: 'special-attack',
          url: 'https://pokeapi.co/api/v2/stat/4/',
        },
      },
      {
        base_stat: 50,
        effort: 0,
        stat: {
          name: 'special-defense',
          url: 'https://pokeapi.co/api/v2/stat/5/',
        },
      },
      {
        base_stat: 65,
        effort: 1,
        stat: {
          name: 'speed',
          url: 'https://pokeapi.co/api/v2/stat/6/',
        },
      },
    ],
    sprites: {
      back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/4.png',
      back_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/4.png',
      front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png',
      front_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/4.png',
      other: {
        'official-artwork': {
          front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png',
          front_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/4.png',
        },
      },
    },
  },
  {
    abilities: [
      {
        ability: {
          name: 'blaze',
          url: 'https://pokeapi.co/api/v2/ability/66/',
        },
        is_hidden: false,
        slot: 1,
      },
      {
        ability: {
          name: 'solar-power',
          url: 'https://pokeapi.co/api/v2/ability/94/',
        },
        is_hidden: true,
        slot: 3,
      },
    ],
    height: 17,
    weight: 905,
    id: 5,
    name: 'charmeleon',
    types: [
      {
        slot: 1,
        type: {
          name: 'fire',
          url: 'https://pokeapi.co/api/v2/type/10/',
        },
      },
    ],
    stats: [
      {
        base_stat: 58,
        effort: 0,
        stat: {
          name: 'hp',
          url: 'https://pokeapi.co/api/v2/stat/1/',
        },
      },
      {
        base_stat: 64,
        effort: 0,
        stat: {
          name: 'attack',
          url: 'https://pokeapi.co/api/v2/stat/2/',
        },
      },
      {
        base_stat: 58,
        effort: 0,
        stat: {
          name: 'defense',
          url: 'https://pokeapi.co/api/v2/stat/3/',
        },
      },
      {
        base_stat: 80,
        effort: 1,
        stat: {
          name: 'special-attack',
          url: 'https://pokeapi.co/api/v2/stat/4/',
        },
      },
      {
        base_stat: 65,
        effort: 0,
        stat: {
          name: 'special-defense',
          url: 'https://pokeapi.co/api/v2/stat/5/',
        },
      },
      {
        base_stat: 80,
        effort: 1,
        stat: {
          name: 'speed',
          url: 'https://pokeapi.co/api/v2/stat/6/',
        },
      },
    ],
    sprites: {
      back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/5.png',
      back_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/5.png',
      front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png',
      front_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/5.png',
      other: {
        'official-artwork': {
          front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/5.png',
          front_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/5.png',
        },
      },
    },
  },
  {
    abilities: [
      {
        ability: {
          name: 'blaze',
          url: 'https://pokeapi.co/api/v2/ability/66/',
        },
        is_hidden: false,
        slot: 1,
      },
      {
        ability: {
          name: 'solar-power',
          url: 'https://pokeapi.co/api/v2/ability/94/',
        },
        is_hidden: true,
        slot: 3,
      },
    ],
    height: 16,
    weight: 190,
    id: 6,
    name: 'charizard',
    types: [
      {
        slot: 1,
        type: {
          name: 'fire',
          url: 'https://pokeapi.co/api/v2/type/10/',
        },
      },
      {
        slot: 2,
        type: {
          name: 'flying',
          url: 'https://pokeapi.co/api/v2/type/3/',
        },
      },
    ],
    stats: [
      {
        base_stat: 78,
        effort: 0,
        stat: {
          name: 'hp',
          url: 'https://pokeapi.co/api/v2/stat/1/',
        },
      },
      {
        base_stat: 84,
        effort: 0,
        stat: {
          name: 'attack',
          url: 'https://pokeapi.co/api/v2/stat/2/',
        },
      },
      {
        base_stat: 78,
        effort: 0,
        stat: {
          name: 'defense',
          url: 'https://pokeapi.co/api/v2/stat/3/',
        },
      },
      {
        base_stat: 109,
        effort: 3,
        stat: {
          name: 'special-attack',
          url: 'https://pokeapi.co/api/v2/stat/4/',
        },
      },
      {
        base_stat: 85,
        effort: 0,
        stat: {
          name: 'special-defense',
          url: 'https://pokeapi.co/api/v2/stat/5/',
        },
      },
      {
        base_stat: 100,
        effort: 0,
        stat: {
          name: 'speed',
          url: 'https://pokeapi.co/api/v2/stat/6/',
        },
      },
    ],
    sprites: {
      back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/6.png',
      back_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/6.png',
      front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png',
      front_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/6.png',
      other: {
        'official-artwork': {
          front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png',
          front_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/6.png',
        },
      },
    },
  },
  {
    abilities: [
      {
        ability: {
          name: 'torrent',
          url: 'https://pokeapi.co/api/v2/ability/67/',
        },
        is_hidden: false,
        slot: 1,
      },
      {
        ability: 'rain-dish',
        is_hidden: true,
        slot: 3,
      },
    ],
    height: 5,
    weight: 90,
    id: 7,
    name: 'squirtle',
    types: [
      {
        slot: 1,
        type: {
          name: 'water',
          url: 'https://pokeapi.co/api/v2/type/11/',
        },
      },
    ],
    stats: [
      {
        base_stat: 44,
        effort: 0,
        stat: {
          name: 'hp',
          url: 'https://pokeapi.co/api/v2/stat/1/',
        },
      },
      {
        base_stat: 48,
        effort: 0,
        stat: {
          name: 'attack',
          url: 'https://pokeapi.co/api/v2/stat/2/',
        },
      },
      {
        base_stat: 65,
        effort: 0,
        stat: {
          name: 'defense',
          url: 'https://pokeapi.co/api/v2/stat/3/',
        },
      },
      {
        base_stat: 50,
        effort: 0,
        stat: {
          name: 'special-attack',
          url: 'https://pokeapi.co/api/v2/stat/4/',
        },
      },
      {
        base_stat: 64,
        effort: 0,
        stat: {
          name: 'special-defense',
          url: 'https://pokeapi.co/api/v2/stat/5/',
        },
      },
      {
        base_stat: 43,
        effort: 0,
        stat: {
          name: 'speed',
          url: 'https://pokeapi.co/api/v2/stat/6/',
        },
      },
    ],
    sprites: {
      back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/7.png',
      back_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/7.png',
      front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png',
      front_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/7.png',
      other: {
        'official-artwork': {
          front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png',
          front_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/7.png',
        },
      },
    },
  },
  {
    abilities: [
      {
        ability: {
          name: 'torrent',
          url: 'https://pokeapi.co/api/v2/ability/67/',
        },
        is_hidden: false,
        slot: 1,
      },
      {
        ability: 'rain-dish',
        is_hidden: true,
        slot: 3,
      },
    ],
    height: 10,
    weight: 225,
    id: 8,
    name: 'wartortle',
    types: [
      {
        slot: 1,
        type: {
          name: 'water',
          url: 'https://pokeapi.co/api/v2/type/11/',
        },
      },
    ],
    stats: [
      {
        base_stat: 59,
        effort: 0,
        stat: {
          name: 'hp',
          url: 'https://pokeapi.co/api/v2/stat/1/',
        },
      },
      {
        base_stat: 63,
        effort: 0,
        stat: {
          name: 'attack',
          url: 'https://pokeapi.co/api/v2/stat/2/',
        },
      },
      {
        base_stat: 80,
        effort: 0,
        stat: {
          name: 'defense',
          url: 'https://pokeapi.co/api/v2/stat/3/',
        },
      },
      {
        base_stat: 65,
        effort: 0,
        stat: {
          name: 'special-attack',
          url: 'https://pokeapi.co/api/v2/stat/4/',
        },
      },
      {
        base_stat: 80,
        effort: 0,
        stat: {
          name: 'special-defense',
          url: 'https://pokeapi.co/api/v2/stat/5/',
        },
      },
      {
        base_stat: 58,
        effort: 0,
        stat: {
          name: 'speed',
          url: 'https://pokeapi.co/api/v2/stat/6/',
        },
      },
    ],
    sprites: {
      back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/8.png',
      back_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/8.png',
      front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png',
      front_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/8.png',
      other: {
        'official-artwork': {
          front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/8.png',
          front_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/8.png',
        },
      },
    },
  },
  {
    abilities: [
      {
        ability: {
          name: 'torrent',
          url: 'https://pokeapi.co/api/v2/ability/67/',
        },
        is_hidden: false,
        slot: 1,
      },
      {
        ability: 'rain-dish',
        is_hidden: true,
        slot: 3,
      },
    ],
    height: 16,
    weight: 855,
    id: 9,
    name: 'blastoise',
    types: [
      {
        slot: 1,
        type: {
          name: 'water',
          url: 'https://pokeapi.co/api/v2/type/11/',
        },
      },
    ],
    stats: [
      {
        base_stat: 79,
        effort: 0,
        stat: {
          name: 'hp',
          url: 'https://pokeapi.co/api/v2/stat/1/',
        },
      },
      {
        base_stat: 83,
        effort: 0,
        stat: {
          name: 'attack',
          url: 'https://pokeapi.co/api/v2/stat/2/',
        },
      },
      {
        base_stat: 100,
        effort: 0,
        stat: {
          name: 'defense',
          url: 'https://pokeapi.co/api/v2/stat/3/',
        },
      },
      {
        base_stat: 85,
        effort: 0,
        stat: {
          name: 'special-attack',
          url: 'https://pokeapi.co/api/v2/stat/4/',
        },
      },
      {
        base_stat: 105,
        effort: 0,
        stat: {
          name: 'special-defense',
          url: 'https://pokeapi.co/api/v2/stat/5/',
        },
      },
      {
        base_stat: 78,
        effort: 0,
        stat: {
          name: 'speed',
          url: 'https://pokeapi.co/api/v2/stat/6/',
        },
      },
    ],
    sprites: {
      back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/9.png',
      back_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/9.png',
      front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png',
      front_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/9.png',
      other: {
        'official-artwork': {
          front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/9.png',
          front_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/9.png',
        },
      },
    },
  },
  {
    name: 'caterpie',
    id: 10,
    height: 3,
    weight: 29,
    types: [
      {
        slot: 1,
        type: {
          name: 'bug',
          url: 'https://pokeapi.co/api/v2/type/7/',
        },
      },
    ],
    abilities: [
      {
        ability: {
          name: 'shield-dust',
          url: 'https://pokeapi.co/api/v2/ability/19/',
        },
        is_hidden: false,
        slot: 1,
      },
      {
        ability: {
          name: 'run-away',
          url: 'https://pokeapi.co/api/v2/ability/50/',
        },
        is_hidden: true,
        slot: 3,
      },
    ],
    stats: [
      {
        base_stat: 45,
        effort: 0,
        stat: {
          name: 'hp',
          url: 'https://pokeapi.co/api/v2/stat/1/',
        },
      },
      {
        base_stat: 30,
        effort: 0,
        stat: {
          name: 'attack',
          url: 'https://pokeapi.co/api/v2/stat/2/',
        },
      },
      {
        base_stat: 35,
        effort: 0,
        stat: {
          name: 'defense',
          url: 'https://pokeapi.co/api/v2/stat/3/',
        },
      },
      {
        base_stat: 20,
        effort: 0,
        stat: {
          name: 'special-attack',
          url: 'https://pokeapi.co/api/v2/stat/4/',
        },
      },
      {
        base_stat: 20,
        effort: 0,
        stat: {
          name: 'special-defense',
          url: 'https://pokeapi.co/api/v2/stat/5/',
        },
      },
      {
        base_stat: 45,
        effort: 0,
        stat: {
          name: 'speed',
          url: 'https://pokeapi.co/api/v2/stat/6/',
        },
      },
    ],
    sprites: {
      back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/10.png',
      back_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/10.png',
      front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10.png',
      front_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/10.png',
      other: {
        'official-artwork': {
          front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10.png',
          front_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/10.png',
        },
      },
    },
  },
  {
    name: 'metapod',
    id: 11,
    height: 7,
    weight: 99,
    types: [
      {
        slot: 1,
        type: {
          name: 'bug',
          url: 'https://pokeapi.co/api/v2/type/7/',
        },
      },
    ],
    abilities: [
      {
        ability: {
          name: 'shed-skin',
          url: 'https://pokeapi.co/api/v2/ability/61/',
        },
        is_hidden: false,
        slot: 1,
      },
    ],
    stats: [
      {
        base_stat: 50,
        effort: 0,
        stat: {
          name: 'hp',
          url: 'https://pokeapi.co/api/v2/stat/1/',
        },
      },
      {
        base_stat: 20,
        effort: 0,
        stat: {
          name: 'attack',
          url: 'https://pokeapi.co/api/v2/stat/2/',
        },
      },
      {
        base_stat: 55,
        effort: 0,
        stat: {
          name: 'defense',
          url: 'https://pokeapi.co/api/v2/stat/3/',
        },
      },
      {
        base_stat: 25,
        effort: 0,
        stat: {
          name: 'special-attack',
          url: 'https://pokeapi.co/api/v2/stat/4/',
        },
      },
      {
        base_stat: 25,
        effort: 0,
        stat: {
          name: 'special-defense',
          url: 'https://pokeapi.co/api/v2/stat/5/',
        },
      },
      {
        base_stat: 30,
        effort: 0,
        stat: {
          name: 'speed',
          url: 'https://pokeapi.co/api/v2/stat/6/',
        },
      },
    ],
    sprites: {
      back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/11.png',
      back_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/11.png',
      front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/11.png',
      front_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/11.png',
      other: {
        'official-artwork': {
          front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/11.png',
          front_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/11.png',
        },
      },
    },
  },
  {
    name: 'butterfree',
    id: 12,
    height: 11,
    weight: 320,
    types: [
      {
        slot: 1,
        type: {
          name: 'bug',
          url: 'https://pokeapi.co/api/v2/type/7/',
        },
      },
      {
        slot: 2,
        type: {
          name: 'flying',
          url: 'https://pokeapi.co/api/v2/type/3/',
        },
      },
    ],
    abilities: [
      {
        ability: {
          name: 'compound-eyes',
          url: 'https://pokeapi.co/api/v2/ability/14/',
        },
        is_hidden: false,
        slot: 1,
      },
      {
        ability: {
          name: 'tinted-lens',
          url: 'https://pokeapi.co/api/v2/ability/110/',
        },
        is_hidden: true,
        slot: 3,
      },
    ],
    stats: [
      {
        base_stat: 60,
        effort: 0,
        stat: {
          name: 'hp',
          url: 'https://pokeapi.co/api/v2/stat/1/',
        },
      },
      {
        base_stat: 45,
        effort: 0,
        stat: {
          name: 'attack',
          url: 'https://pokeapi.co/api/v2/stat/2/',
        },
      },
      {
        base_stat: 50,
        effort: 0,
        stat: {
          name: 'defense',
          url: 'https://pokeapi.co/api/v2/stat/3/',
        },
      },
      {
        base_stat: 90,
        effort: 2,
        stat: {
          name: 'special-attack',
          url: 'https://pokeapi.co/api/v2/stat/4/',
        },
      },
      {
        base_stat: 80,
        effort: 1,
        stat: {
          name: 'special-defense',
          url: 'https://pokeapi.co/api/v2/stat/5/',
        },
      },
      {
        base_stat: 70,
        effort: 0,
        stat: {
          name: 'speed',
          url: 'https://pokeapi.co/api/v2/stat/6/',
        },
      },
    ],
    sprites: {
      back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/12.png',
      back_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/12.png',
      front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png',
      front_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/12.png',
      other: {
        'official-artwork': {
          front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/12.png',
          front_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/12.png',
        },
      },
    },
  },
];

const secondPageMock = [
  {
    abilities: [
      {
        ability: {
          name: 'shield-dust',
          url: 'https://pokeapi.co/api/v2/ability/19/',
        },
        is_hidden: false,
        slot: 1,
      },
      {
        ability: {
          name: 'run-away',
          url: 'https://pokeapi.co/api/v2/ability/50/',
        },
        is_hidden: true,
        slot: 3,
      },
    ],
    height: 3,
    id: 13,
    name: 'weedle',
    order: 17,
    sprites: {
      back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/13.png',
      back_female: null,
      back_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/13.png',
      back_shiny_female: null,
      front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/13.png',
      front_female: null,
      front_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/13.png',
      front_shiny_female: null,
      other: {
        'official-artwork': {
          front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/13.png',
          front_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/13.png',
        },
      },
    },
    stats: [
      {
        base_stat: 40,
        effort: 0,
        stat: {
          name: 'hp',
          url: 'https://pokeapi.co/api/v2/stat/1/',
        },
      },
      {
        base_stat: 35,
        effort: 0,
        stat: {
          name: 'attack',
          url: 'https://pokeapi.co/api/v2/stat/2/',
        },
      },
      {
        base_stat: 30,
        effort: 0,
        stat: {
          name: 'defense',
          url: 'https://pokeapi.co/api/v2/stat/3/',
        },
      },
      {
        base_stat: 20,
        effort: 0,
        stat: {
          name: 'special-attack',
          url: 'https://pokeapi.co/api/v2/stat/4/',
        },
      },
      {
        base_stat: 20,
        effort: 0,
        stat: {
          name: 'special-defense',
          url: 'https://pokeapi.co/api/v2/stat/5/',
        },
      },
      {
        base_stat: 50,
        effort: 1,
        stat: {
          name: 'speed',
          url: 'https://pokeapi.co/api/v2/stat/6/',
        },
      },
    ],
    types: [
      {
        slot: 1,
        type: {
          name: 'bug',
          url: 'https://pokeapi.co/api/v2/type/7/',
        },
      },
      {
        slot: 2,
        type: {
          name: 'poison',
          url: 'https://pokeapi.co/api/v2/type/4/',
        },
      },
    ],
    weight: 32,
  },
  {
    abilities: [
      {
        ability: {
          name: 'shed-skin',
          url: 'https://pokeapi.co/api/v2/ability/61/',
        },
        is_hidden: false,
        slot: 1,
      },
    ],
    height: 6,
    id: 14,
    name: 'kakuna',
    order: 18,
    sprites: {
      back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/14.png',
      back_female: null,
      back_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/14.png',
      back_shiny_female: null,
      front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/14.png',
      front_female: null,
      front_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/14.png',
      front_shiny_female: null,
      other: {
        'official-artwork': {
          front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/14.png',
          front_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/14.png',
        },
      },
    },
    stats: [
      {
        base_stat: 45,
        effort: 0,
        stat: {
          name: 'hp',
          url: 'https://pokeapi.co/api/v2/stat/1/',
        },
      },
      {
        base_stat: 25,
        effort: 0,
        stat: {
          name: 'attack',
          url: 'https://pokeapi.co/api/v2/stat/2/',
        },
      },
      {
        base_stat: 50,
        effort: 2,
        stat: {
          name: 'defense',
          url: 'https://pokeapi.co/api/v2/stat/3/',
        },
      },
      {
        base_stat: 25,
        effort: 0,
        stat: {
          name: 'special-attack',
          url: 'https://pokeapi.co/api/v2/stat/4/',
        },
      },
      {
        base_stat: 25,
        effort: 0,
        stat: {
          name: 'special-defense',
          url: 'https://pokeapi.co/api/v2/stat/5/',
        },
      },
      {
        base_stat: 35,
        effort: 0,
        stat: {
          name: 'speed',
          url: 'https://pokeapi.co/api/v2/stat/6/',
        },
      },
    ],
    types: [
      {
        slot: 1,
        type: {
          name: 'bug',
          url: 'https://pokeapi.co/api/v2/type/7/',
        },
      },
      {
        slot: 2,
        type: {
          name: 'poison',
          url: 'https://pokeapi.co/api/v2/type/4/',
        },
      },
    ],
    weight: 100,
  },
  {
    abilities: [
      {
        ability: {
          name: 'swarm',
          url: 'https://pokeapi.co/api/v2/ability/68/',
        },
        is_hidden: false,
        slot: 1,
      },
      {
        ability: {
          name: 'sniper',
          url: 'https://pokeapi.co/api/v2/ability/97/',
        },
        is_hidden: true,
        slot: 3,
      },
    ],
    height: 10,
    id: 15,
    name: 'beedrill',
    order: 19,
    sprites: {
      back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/15.png',
      back_female: null,
      back_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/15.png',
      back_shiny_female: null,
      front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/15.png',
      front_female: null,
      front_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/15.png',
      front_shiny_female: null,
      other: {
        'official-artwork': {
          front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/15.png',
          front_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/15.png',
        },
      },
    },
    stats: [
      {
        base_stat: 65,
        effort: 0,
        stat: {
          name: 'hp',
          url: 'https://pokeapi.co/api/v2/stat/1/',
        },
      },
      {
        base_stat: 90,
        effort: 2,
        stat: {
          name: 'attack',
          url: 'https://pokeapi.co/api/v2/stat/2/',
        },
      },
      {
        base_stat: 40,
        effort: 0,
        stat: {
          name: 'defense',
          url: 'https://pokeapi.co/api/v2/stat/3/',
        },
      },
      {
        base_stat: 45,
        effort: 0,
        stat: {
          name: 'special-attack',
          url: 'https://pokeapi.co/api/v2/stat/4/',
        },
      },
      {
        base_stat: 80,
        effort: 1,
        stat: {
          name: 'special-defense',
          url: 'https://pokeapi.co/api/v2/stat/5/',
        },
      },
      {
        base_stat: 75,
        effort: 0,
        stat: {
          name: 'speed',
          url: 'https://pokeapi.co/api/v2/stat/6/',
        },
      },
    ],
    types: [
      {
        slot: 1,
        type: {
          name: 'bug',
          url: 'https://pokeapi.co/api/v2/type/7/',
        },
      },
      {
        slot: 2,
        type: {
          name: 'poison',
          url: 'https://pokeapi.co/api/v2/type/4/',
        },
      },
    ],
    weight: 295,
  },
  {
    abilities: [
      {
        ability: {
          name: 'keen-eye',
          url: 'https://pokeapi.co/api/v2/ability/51/',
        },
        is_hidden: false,
        slot: 1,
      },
      {
        ability: {
          name: 'tangled-feet',
          url: 'https://pokeapi.co/api/v2/ability/77/',
        },
        is_hidden: false,
        slot: 2,
      },
      {
        ability: {
          name: 'big-pecks',
          url: 'https://pokeapi.co/api/v2/ability/145/',
        },
        is_hidden: true,
        slot: 3,
      },
    ],
    height: 3,
    id: 16,
    name: 'pidgey',
    order: 21,
    sprites: {
      back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/16.png',
      back_female: null,
      back_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/16.png',
      back_shiny_female: null,
      front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/16.png',
      front_female: null,
      front_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/16.png',
      front_shiny_female: null,
      other: {
        'official-artwork': {
          front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/16.png',
          front_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/16.png',
        },
      },
    },
    stats: [
      {
        base_stat: 40,
        effort: 0,
        stat: {
          name: 'hp',
          url: 'https://pokeapi.co/api/v2/stat/1/',
        },
      },
      {
        base_stat: 45,
        effort: 0,
        stat: {
          name: 'attack',
          url: 'https://pokeapi.co/api/v2/stat/2/',
        },
      },
      {
        base_stat: 40,
        effort: 0,
        stat: {
          name: 'defense',
          url: 'https://pokeapi.co/api/v2/stat/3/',
        },
      },
      {
        base_stat: 35,
        effort: 0,
        stat: {
          name: 'special-attack',
          url: 'https://pokeapi.co/api/v2/stat/4/',
        },
      },
      {
        base_stat: 35,
        effort: 0,
        stat: {
          name: 'special-defense',
          url: 'https://pokeapi.co/api/v2/stat/5/',
        },
      },
      {
        base_stat: 56,
        effort: 1,
        stat: {
          name: 'speed',
          url: 'https://pokeapi.co/api/v2/stat/6/',
        },
      },
    ],
    types: [
      {
        slot: 1,
        type: {
          name: 'normal',
          url: 'https://pokeapi.co/api/v2/type/1/',
        },
      },
      {
        slot: 2,
        type: {
          name: 'flying',
          url: 'https://pokeapi.co/api/v2/type/3/',
        },
      },
    ],
    weight: 18,
  },
  {
    abilities: [
      {
        ability: {
          name: 'keen-eye',
          url: 'https://pokeapi.co/api/v2/ability/51/',
        },
        is_hidden: false,
        slot: 1,
      },
      {
        ability: {
          name: 'tangled-feet',
          url: 'https://pokeapi.co/api/v2/ability/77/',
        },
        is_hidden: false,
        slot: 2,
      },
      {
        ability: {
          name: 'big-pecks',
          url: 'https://pokeapi.co/api/v2/ability/145/',
        },
        is_hidden: true,
        slot: 3,
      },
    ],
    height: 11,
    id: 17,
    name: 'pidgeotto',
    order: 22,
    sprites: {
      back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/17.png',
      back_female: null,
      back_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/17.png',
      back_shiny_female: null,
      front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/17.png',
      front_female: null,
      front_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/17.png',
      front_shiny_female: null,
      other: {
        'official-artwork': {
          front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/17.png',
          front_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/17.png',
        },
      },
    },
    stats: [
      {
        base_stat: 63,
        effort: 0,
        stat: {
          name: 'hp',
          url: 'https://pokeapi.co/api/v2/stat/1/',
        },
      },
      {
        base_stat: 60,
        effort: 0,
        stat: {
          name: 'attack',
          url: 'https://pokeapi.co/api/v2/stat/2/',
        },
      },
      {
        base_stat: 55,
        effort: 0,
        stat: {
          name: 'defense',
          url: 'https://pokeapi.co/api/v2/stat/3/',
        },
      },
      {
        base_stat: 50,
        effort: 0,
        stat: {
          name: 'special-attack',
          url: 'https://pokeapi.co/api/v2/stat/4/',
        },
      },
      {
        base_stat: 50,
        effort: 0,
        stat: {
          name: 'special-defense',
          url: 'https://pokeapi.co/api/v2/stat/5/',
        },
      },
      {
        base_stat: 71,
        effort: 2,
        stat: {
          name: 'speed',
          url: 'https://pokeapi.co/api/v2/stat/6/',
        },
      },
    ],
    types: [
      {
        slot: 1,
        type: {
          name: 'normal',
          url: 'https://pokeapi.co/api/v2/type/1/',
        },
      },
      {
        slot: 2,
        type: {
          name: 'flying',
          url: 'https://pokeapi.co/api/v2/type/3/',
        },
      },
    ],
    weight: 300,
  },
  {
    abilities: [
      {
        ability: {
          name: 'keen-eye',
          url: 'https://pokeapi.co/api/v2/ability/51/',
        },
        is_hidden: false,
        slot: 1,
      },
      {
        ability: {
          name: 'tangled-feet',
          url: 'https://pokeapi.co/api/v2/ability/77/',
        },
        is_hidden: false,
        slot: 2,
      },
      {
        ability: {
          name: 'big-pecks',
          url: 'https://pokeapi.co/api/v2/ability/145/',
        },
        is_hidden: true,
        slot: 3,
      },
    ],
    height: 15,
    id: 18,
    name: 'pidgeot',
    order: 23,
    sprites: {
      back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/18.png',
      back_female: null,
      back_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/18.png',
      back_shiny_female: null,
      front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/18.png',
      front_female: null,
      front_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/18.png',
      front_shiny_female: null,
      other: {
        'official-artwork': {
          front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/18.png',
          front_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/18.png',
        },
      },
    },
    stats: [
      {
        base_stat: 83,
        effort: 0,
        stat: {
          name: 'hp',
          url: 'https://pokeapi.co/api/v2/stat/1/',
        },
      },
      {
        base_stat: 80,
        effort: 0,
        stat: {
          name: 'attack',
          url: 'https://pokeapi.co/api/v2/stat/2/',
        },
      },
      {
        base_stat: 75,
        effort: 0,
        stat: {
          name: 'defense',
          url: 'https://pokeapi.co/api/v2/stat/3/',
        },
      },
      {
        base_stat: 70,
        effort: 0,
        stat: {
          name: 'special-attack',
          url: 'https://pokeapi.co/api/v2/stat/4/',
        },
      },
      {
        base_stat: 70,
        effort: 0,
        stat: {
          name: 'special-defense',
          url: 'https://pokeapi.co/api/v2/stat/5/',
        },
      },
      {
        base_stat: 101,
        effort: 3,
        stat: {
          name: 'speed',
          url: 'https://pokeapi.co/api/v2/stat/6/',
        },
      },
    ],
    types: [
      {
        slot: 1,
        type: {
          name: 'normal',
          url: 'https://pokeapi.co/api/v2/type/1/',
        },
      },
      {
        slot: 2,
        type: {
          name: 'flying',
          url: 'https://pokeapi.co/api/v2/type/3/',
        },
      },
    ],
    weight: 395,
  },
  {
    abilities: [
      {
        ability: {
          name: 'run-away',
          url: 'https://pokeapi.co/api/v2/ability/50/',
        },
        is_hidden: false,
        slot: 1,
      },
      {
        ability: {
          name: 'guts',
          url: 'https://pokeapi.co/api/v2/ability/62/',
        },
        is_hidden: false,
        slot: 2,
      },
      {
        ability: {
          name: 'hustle',
          url: 'https://pokeapi.co/api/v2/ability/55/',
        },
        is_hidden: true,
        slot: 3,
      },
    ],
    height: 3,
    id: 19,
    name: 'rattata',
    order: 25,
    sprites: {
      back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/19.png',
      back_female: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/female/19.png',
      back_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/19.png',
      back_shiny_female: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/female/19.png',
      front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/19.png',
      front_female: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/female/19.png',
      front_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/19.png',
      front_shiny_female: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/female/19.png',
      other: {
        'official-artwork': {
          front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/19.png',
          front_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/19.png',
        },
      },
    },
    stats: [
      {
        base_stat: 30,
        effort: 0,
        stat: {
          name: 'hp',
          url: 'https://pokeapi.co/api/v2/stat/1/',
        },
      },
      {
        base_stat: 56,
        effort: 0,
        stat: {
          name: 'attack',
          url: 'https://pokeapi.co/api/v2/stat/2/',
        },
      },
      {
        base_stat: 35,
        effort: 0,
        stat: {
          name: 'defense',
          url: 'https://pokeapi.co/api/v2/stat/3/',
        },
      },
      {
        base_stat: 25,
        effort: 0,
        stat: {
          name: 'special-attack',
          url: 'https://pokeapi.co/api/v2/stat/4/',
        },
      },
      {
        base_stat: 35,
        effort: 0,
        stat: {
          name: 'special-defense',
          url: 'https://pokeapi.co/api/v2/stat/5/',
        },
      },
      {
        base_stat: 72,
        effort: 1,
        stat: {
          name: 'speed',
          url: 'https://pokeapi.co/api/v2/stat/6/',
        },
      },
    ],
    types: [
      {
        slot: 1,
        type: {
          name: 'normal',
          url: 'https://pokeapi.co/api/v2/type/1/',
        },
      },
    ],
    weight: 35,
  },
  {
    abilities: [
      {
        ability: {
          name: 'run-away',
          url: 'https://pokeapi.co/api/v2/ability/50/',
        },
        is_hidden: false,
        slot: 1,
      },
      {
        ability: {
          name: 'guts',
          url: 'https://pokeapi.co/api/v2/ability/62/',
        },
        is_hidden: false,
        slot: 2,
      },
      {
        ability: {
          name: 'hustle',
          url: 'https://pokeapi.co/api/v2/ability/55/',
        },
        is_hidden: true,
        slot: 3,
      },
    ],
    height: 7,
    id: 20,
    name: 'raticate',
    order: 27,
    sprites: {
      back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/20.png',
      back_female: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/female/20.png',
      back_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/20.png',
      back_shiny_female: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/female/20.png',
      front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/20.png',
      front_female: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/female/20.png',
      front_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/20.png',
      front_shiny_female: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/female/20.png',
      other: {
        'official-artwork': {
          front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/20.png',
          front_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/20.png',
        },
      },
    },
    stats: [
      {
        base_stat: 55,
        effort: 0,
        stat: {
          name: 'hp',
          url: 'https://pokeapi.co/api/v2/stat/1/',
        },
      },
      {
        base_stat: 81,
        effort: 0,
        stat: {
          name: 'attack',
          url: 'https://pokeapi.co/api/v2/stat/2/',
        },
      },
      {
        base_stat: 60,
        effort: 0,
        stat: {
          name: 'defense',
          url: 'https://pokeapi.co/api/v2/stat/3/',
        },
      },
      {
        base_stat: 50,
        effort: 0,
        stat: {
          name: 'special-attack',
          url: 'https://pokeapi.co/api/v2/stat/4/',
        },
      },
      {
        base_stat: 70,
        effort: 0,
        stat: {
          name: 'special-defense',
          url: 'https://pokeapi.co/api/v2/stat/5/',
        },
      },
      {
        base_stat: 97,
        effort: 2,
        stat: {
          name: 'speed',
          url: 'https://pokeapi.co/api/v2/stat/6/',
        },
      },
    ],
    types: [
      {
        slot: 1,
        type: {
          name: 'normal',
          url: 'https://pokeapi.co/api/v2/type/1/',
        },
      },
    ],
    weight: 185,
  },
  {
    abilities: [
      {
        ability: {
          name: 'keen-eye',
          url: 'https://pokeapi.co/api/v2/ability/51/',
        },
        is_hidden: false,
        slot: 1,
      },
      {
        ability: {
          name: 'sniper',
          url: 'https://pokeapi.co/api/v2/ability/97/',
        },
        is_hidden: true,
        slot: 3,
      },
    ],
    height: 3,
    id: 21,
    name: 'spearow',
    order: 30,
    sprites: {
      back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/21.png',
      back_female: null,
      back_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/21.png',
      back_shiny_female: null,
      front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/21.png',
      front_female: null,
      front_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/21.png',
      front_shiny_female: null,
      other: {
        'official-artwork': {
          front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/21.png',
          front_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/21.png',
        },
      },
    },
    stats: [
      {
        base_stat: 40,
        effort: 0,
        stat: {
          name: 'hp',
          url: 'https://pokeapi.co/api/v2/stat/1/',
        },
      },
      {
        base_stat: 60,
        effort: 0,
        stat: {
          name: 'attack',
          url: 'https://pokeapi.co/api/v2/stat/2/',
        },
      },
      {
        base_stat: 30,
        effort: 0,
        stat: {
          name: 'defense',
          url: 'https://pokeapi.co/api/v2/stat/3/',
        },
      },
      {
        base_stat: 31,
        effort: 0,
        stat: {
          name: 'special-attack',
          url: 'https://pokeapi.co/api/v2/stat/4/',
        },
      },
      {
        base_stat: 31,
        effort: 0,
        stat: {
          name: 'special-defense',
          url: 'https://pokeapi.co/api/v2/stat/5/',
        },
      },
      {
        base_stat: 70,
        effort: 1,
        stat: {
          name: 'speed',
          url: 'https://pokeapi.co/api/v2/stat/6/',
        },
      },
    ],
    types: [
      {
        slot: 1,
        type: {
          name: 'normal',
          url: 'https://pokeapi.co/api/v2/type/1/',
        },
      },
      {
        slot: 2,
        type: {
          name: 'flying',
          url: 'https://pokeapi.co/api/v2/type/3/',
        },
      },
    ],
    weight: 20,
  },
  {
    abilities: [
      {
        ability: {
          name: 'keen-eye',
          url: 'https://pokeapi.co/api/v2/ability/51/',
        },
        is_hidden: false,
        slot: 1,
      },
      {
        ability: {
          name: 'sniper',
          url: 'https://pokeapi.co/api/v2/ability/97/',
        },
        is_hidden: true,
        slot: 3,
      },
    ],
    height: 12,
    id: 22,
    name: 'fearow',
    order: 31,
    sprites: {
      back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/22.png',
      back_female: null,
      back_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/22.png',
      back_shiny_female: null,
      front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/22.png',
      front_female: null,
      front_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/22.png',
      front_shiny_female: null,
      other: {
        'official-artwork': {
          front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/22.png',
          front_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/22.png',
        },
      },
    },
    stats: [
      {
        base_stat: 65,
        effort: 0,
        stat: {
          name: 'hp',
          url: 'https://pokeapi.co/api/v2/stat/1/',
        },
      },
      {
        base_stat: 90,
        effort: 0,
        stat: {
          name: 'attack',
          url: 'https://pokeapi.co/api/v2/stat/2/',
        },
      },
      {
        base_stat: 65,
        effort: 0,
        stat: {
          name: 'defense',
          url: 'https://pokeapi.co/api/v2/stat/3/',
        },
      },
      {
        base_stat: 61,
        effort: 0,
        stat: {
          name: 'special-attack',
          url: 'https://pokeapi.co/api/v2/stat/4/',
        },
      },
      {
        base_stat: 61,
        effort: 0,
        stat: {
          name: 'special-defense',
          url: 'https://pokeapi.co/api/v2/stat/5/',
        },
      },
      {
        base_stat: 100,
        effort: 2,
        stat: {
          name: 'speed',
          url: 'https://pokeapi.co/api/v2/stat/6/',
        },
      },
    ],
    types: [
      {
        slot: 1,
        type: {
          name: 'normal',
          url: 'https://pokeapi.co/api/v2/type/1/',
        },
      },
      {
        slot: 2,
        type: {
          name: 'flying',
          url: 'https://pokeapi.co/api/v2/type/3/',
        },
      },
    ],
    weight: 380,
  },
  {
    abilities: [
      {
        ability: {
          name: 'intimidate',
          url: 'https://pokeapi.co/api/v2/ability/22/',
        },
        is_hidden: false,
        slot: 1,
      },
      {
        ability: {
          name: 'shed-skin',
          url: 'https://pokeapi.co/api/v2/ability/61/',
        },
        is_hidden: false,
        slot: 2,
      },
      {
        ability: {
          name: 'unnerve',
          url: 'https://pokeapi.co/api/v2/ability/127/',
        },
        is_hidden: true,
        slot: 3,
      },
    ],
    height: 20,
    id: 23,
    name: 'ekans',
    order: 32,
    sprites: {
      back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/23.png',
      back_female: null,
      back_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/23.png',
      back_shiny_female: null,
      front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/23.png',
      front_female: null,
      front_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/23.png',
      front_shiny_female: null,
      other: {
        'official-artwork': {
          front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/23.png',
          front_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/23.png',
        },
      },
    },
    stats: [
      {
        base_stat: 35,
        effort: 0,
        stat: {
          name: 'hp',
          url: 'https://pokeapi.co/api/v2/stat/1/',
        },
      },
      {
        base_stat: 60,
        effort: 1,
        stat: {
          name: 'attack',
          url: 'https://pokeapi.co/api/v2/stat/2/',
        },
      },
      {
        base_stat: 44,
        effort: 0,
        stat: {
          name: 'defense',
          url: 'https://pokeapi.co/api/v2/stat/3/',
        },
      },
      {
        base_stat: 40,
        effort: 0,
        stat: {
          name: 'special-attack',
          url: 'https://pokeapi.co/api/v2/stat/4/',
        },
      },
      {
        base_stat: 54,
        effort: 0,
        stat: {
          name: 'special-defense',
          url: 'https://pokeapi.co/api/v2/stat/5/',
        },
      },
      {
        base_stat: 55,
        effort: 0,
        stat: {
          name: 'speed',
          url: 'https://pokeapi.co/api/v2/stat/6/',
        },
      },
    ],
    types: [
      {
        slot: 1,
        type: {
          name: 'poison',
          url: 'https://pokeapi.co/api/v2/type/4/',
        },
      },
    ],
    weight: 69,
  },
  {
    abilities: [
      {
        ability: {
          name: 'intimidate',
          url: 'https://pokeapi.co/api/v2/ability/22/',
        },
        is_hidden: false,
        slot: 1,
      },
      {
        ability: {
          name: 'shed-skin',
          url: 'https://pokeapi.co/api/v2/ability/61/',
        },
        is_hidden: false,
        slot: 2,
      },
      {
        ability: {
          name: 'unnerve',
          url: 'https://pokeapi.co/api/v2/ability/127/',
        },
        is_hidden: true,
        slot: 3,
      },
    ],
    height: 35,
    id: 24,
    name: 'arbok',
    order: 33,
    sprites: {
      back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/24.png',
      back_female: null,
      back_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/24.png',
      back_shiny_female: null,
      front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/24.png',
      front_female: null,
      front_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/24.png',
      front_shiny_female: null,
      other: {
        'official-artwork': {
          front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/24.png',
          front_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/24.png',
        },
      },
    },
    stats: [
      {
        base_stat: 60,
        effort: 0,
        stat: {
          name: 'hp',
          url: 'https://pokeapi.co/api/v2/stat/1/',
        },
      },
      {
        base_stat: 95,
        effort: 2,
        stat: {
          name: 'attack',
          url: 'https://pokeapi.co/api/v2/stat/2/',
        },
      },
      {
        base_stat: 69,
        effort: 0,
        stat: {
          name: 'defense',
          url: 'https://pokeapi.co/api/v2/stat/3/',
        },
      },
      {
        base_stat: 65,
        effort: 0,
        stat: {
          name: 'special-attack',
          url: 'https://pokeapi.co/api/v2/stat/4/',
        },
      },
      {
        base_stat: 79,
        effort: 0,
        stat: {
          name: 'special-defense',
          url: 'https://pokeapi.co/api/v2/stat/5/',
        },
      },
      {
        base_stat: 80,
        effort: 0,
        stat: {
          name: 'speed',
          url: 'https://pokeapi.co/api/v2/stat/6/',
        },
      },
    ],
    types: [
      {
        slot: 1,
        type: {
          name: 'poison',
          url: 'https://pokeapi.co/api/v2/type/4/',
        },
      },
    ],
    weight: 650,
  },
];

const normalMock = [
  {
    abilities: [
      {
        ability: {
          name: 'keen-eye',
          url: 'https://pokeapi.co/api/v2/ability/51/',
        },
        is_hidden: false,
        slot: 1,
      },
      {
        ability: {
          name: 'tangled-feet',
          url: 'https://pokeapi.co/api/v2/ability/77/',
        },
        is_hidden: false,
        slot: 2,
      },
      {
        ability: {
          name: 'big-pecks',
          url: 'https://pokeapi.co/api/v2/ability/145/',
        },
        is_hidden: true,
        slot: 3,
      },
    ],
    height: 3,
    id: 16,
    name: 'pidgey',
    order: 21,
    sprites: {
      back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/16.png',
      back_female: null,
      back_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/16.png',
      back_shiny_female: null,
      front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/16.png',
      front_female: null,
      front_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/16.png',
      front_shiny_female: null,
      other: {
        'official-artwork': {
          front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/16.png',
          front_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/16.png',
        },
      },
    },
    stats: [
      {
        base_stat: 40,
        effort: 0,
        stat: {
          name: 'hp',
          url: 'https://pokeapi.co/api/v2/stat/1/',
        },
      },
      {
        base_stat: 45,
        effort: 0,
        stat: {
          name: 'attack',
          url: 'https://pokeapi.co/api/v2/stat/2/',
        },
      },
      {
        base_stat: 40,
        effort: 0,
        stat: {
          name: 'defense',
          url: 'https://pokeapi.co/api/v2/stat/3/',
        },
      },
      {
        base_stat: 35,
        effort: 0,
        stat: {
          name: 'special-attack',
          url: 'https://pokeapi.co/api/v2/stat/4/',
        },
      },
      {
        base_stat: 35,
        effort: 0,
        stat: {
          name: 'special-defense',
          url: 'https://pokeapi.co/api/v2/stat/5/',
        },
      },
      {
        base_stat: 56,
        effort: 1,
        stat: {
          name: 'speed',
          url: 'https://pokeapi.co/api/v2/stat/6/',
        },
      },
    ],
    types: [
      {
        slot: 1,
        type: {
          name: 'normal',
          url: 'https://pokeapi.co/api/v2/type/1/',
        },
      },
      {
        slot: 2,
        type: {
          name: 'flying',
          url: 'https://pokeapi.co/api/v2/type/3/',
        },
      },
    ],
    weight: 18,
  },
  {
    abilities: [
      {
        ability: {
          name: 'keen-eye',
          url: 'https://pokeapi.co/api/v2/ability/51/',
        },
        is_hidden: false,
        slot: 1,
      },
      {
        ability: {
          name: 'tangled-feet',
          url: 'https://pokeapi.co/api/v2/ability/77/',
        },
        is_hidden: false,
        slot: 2,
      },
      {
        ability: {
          name: 'big-pecks',
          url: 'https://pokeapi.co/api/v2/ability/145/',
        },
        is_hidden: true,
        slot: 3,
      },
    ],
    height: 11,
    id: 17,
    name: 'pidgeotto',
    order: 22,
    sprites: {
      back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/17.png',
      back_female: null,
      back_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/17.png',
      back_shiny_female: null,
      front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/17.png',
      front_female: null,
      front_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/17.png',
      front_shiny_female: null,
      other: {
        'official-artwork': {
          front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/17.png',
          front_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/17.png',
        },
      },
    },
    stats: [
      {
        base_stat: 63,
        effort: 0,
        stat: {
          name: 'hp',
          url: 'https://pokeapi.co/api/v2/stat/1/',
        },
      },
      {
        base_stat: 60,
        effort: 0,
        stat: {
          name: 'attack',
          url: 'https://pokeapi.co/api/v2/stat/2/',
        },
      },
      {
        base_stat: 55,
        effort: 0,
        stat: {
          name: 'defense',
          url: 'https://pokeapi.co/api/v2/stat/3/',
        },
      },
      {
        base_stat: 50,
        effort: 0,
        stat: {
          name: 'special-attack',
          url: 'https://pokeapi.co/api/v2/stat/4/',
        },
      },
      {
        base_stat: 50,
        effort: 0,
        stat: {
          name: 'special-defense',
          url: 'https://pokeapi.co/api/v2/stat/5/',
        },
      },
      {
        base_stat: 71,
        effort: 2,
        stat: {
          name: 'speed',
          url: 'https://pokeapi.co/api/v2/stat/6/',
        },
      },
    ],
    types: [
      {
        slot: 1,
        type: {
          name: 'normal',
          url: 'https://pokeapi.co/api/v2/type/1/',
        },
      },
      {
        slot: 2,
        type: {
          name: 'flying',
          url: 'https://pokeapi.co/api/v2/type/3/',
        },
      },
    ],
    weight: 300,
  },
  {
    abilities: [
      {
        ability: {
          name: 'keen-eye',
          url: 'https://pokeapi.co/api/v2/ability/51/',
        },
        is_hidden: false,
        slot: 1,
      },
      {
        ability: {
          name: 'tangled-feet',
          url: 'https://pokeapi.co/api/v2/ability/77/',
        },
        is_hidden: false,
        slot: 2,
      },
      {
        ability: {
          name: 'big-pecks',
          url: 'https://pokeapi.co/api/v2/ability/145/',
        },
        is_hidden: true,
        slot: 3,
      },
    ],
    height: 15,
    id: 18,
    name: 'pidgeot',
    order: 23,
    sprites: {
      back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/18.png',
      back_female: null,
      back_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/18.png',
      back_shiny_female: null,
      front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/18.png',
      front_female: null,
      front_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/18.png',
      front_shiny_female: null,
      other: {
        'official-artwork': {
          front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/18.png',
          front_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/18.png',
        },
      },
    },
    stats: [
      {
        base_stat: 83,
        effort: 0,
        stat: {
          name: 'hp',
          url: 'https://pokeapi.co/api/v2/stat/1/',
        },
      },
      {
        base_stat: 80,
        effort: 0,
        stat: {
          name: 'attack',
          url: 'https://pokeapi.co/api/v2/stat/2/',
        },
      },
      {
        base_stat: 75,
        effort: 0,
        stat: {
          name: 'defense',
          url: 'https://pokeapi.co/api/v2/stat/3/',
        },
      },
      {
        base_stat: 70,
        effort: 0,
        stat: {
          name: 'special-attack',
          url: 'https://pokeapi.co/api/v2/stat/4/',
        },
      },
      {
        base_stat: 70,
        effort: 0,
        stat: {
          name: 'special-defense',
          url: 'https://pokeapi.co/api/v2/stat/5/',
        },
      },
      {
        base_stat: 101,
        effort: 3,
        stat: {
          name: 'speed',
          url: 'https://pokeapi.co/api/v2/stat/6/',
        },
      },
    ],
    types: [
      {
        slot: 1,
        type: {
          name: 'normal',
          url: 'https://pokeapi.co/api/v2/type/1/',
        },
      },
      {
        slot: 2,
        type: {
          name: 'flying',
          url: 'https://pokeapi.co/api/v2/type/3/',
        },
      },
    ],
    weight: 395,
  },
  {
    abilities: [
      {
        ability: {
          name: 'run-away',
          url: 'https://pokeapi.co/api/v2/ability/50/',
        },
        is_hidden: false,
        slot: 1,
      },
      {
        ability: {
          name: 'guts',
          url: 'https://pokeapi.co/api/v2/ability/62/',
        },
        is_hidden: false,
        slot: 2,
      },
      {
        ability: {
          name: 'hustle',
          url: 'https://pokeapi.co/api/v2/ability/55/',
        },
        is_hidden: true,
        slot: 3,
      },
    ],
    height: 3,
    id: 19,
    name: 'rattata',
    order: 25,
    sprites: {
      back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/19.png',
      back_female: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/female/19.png',
      back_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/19.png',
      back_shiny_female: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/female/19.png',
      front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/19.png',
      front_female: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/female/19.png',
      front_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/19.png',
      front_shiny_female: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/female/19.png',
      other: {
        'official-artwork': {
          front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/19.png',
          front_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/19.png',
        },
      },
    },
    stats: [
      {
        base_stat: 30,
        effort: 0,
        stat: {
          name: 'hp',
          url: 'https://pokeapi.co/api/v2/stat/1/',
        },
      },
      {
        base_stat: 56,
        effort: 0,
        stat: {
          name: 'attack',
          url: 'https://pokeapi.co/api/v2/stat/2/',
        },
      },
      {
        base_stat: 35,
        effort: 0,
        stat: {
          name: 'defense',
          url: 'https://pokeapi.co/api/v2/stat/3/',
        },
      },
      {
        base_stat: 25,
        effort: 0,
        stat: {
          name: 'special-attack',
          url: 'https://pokeapi.co/api/v2/stat/4/',
        },
      },
      {
        base_stat: 35,
        effort: 0,
        stat: {
          name: 'special-defense',
          url: 'https://pokeapi.co/api/v2/stat/5/',
        },
      },
      {
        base_stat: 72,
        effort: 1,
        stat: {
          name: 'speed',
          url: 'https://pokeapi.co/api/v2/stat/6/',
        },
      },
    ],
    types: [
      {
        slot: 1,
        type: {
          name: 'normal',
          url: 'https://pokeapi.co/api/v2/type/1/',
        },
      },
    ],
    weight: 35,
  },
  {
    abilities: [
      {
        ability: {
          name: 'run-away',
          url: 'https://pokeapi.co/api/v2/ability/50/',
        },
        is_hidden: false,
        slot: 1,
      },
      {
        ability: {
          name: 'guts',
          url: 'https://pokeapi.co/api/v2/ability/62/',
        },
        is_hidden: false,
        slot: 2,
      },
      {
        ability: {
          name: 'hustle',
          url: 'https://pokeapi.co/api/v2/ability/55/',
        },
        is_hidden: true,
        slot: 3,
      },
    ],
    height: 7,
    id: 20,
    name: 'raticate',
    order: 27,
    sprites: {
      back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/20.png',
      back_female: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/female/20.png',
      back_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/20.png',
      back_shiny_female: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/female/20.png',
      front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/20.png',
      front_female: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/female/20.png',
      front_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/20.png',
      front_shiny_female: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/female/20.png',
      other: {
        'official-artwork': {
          front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/20.png',
          front_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/20.png',
        },
      },
    },
    stats: [
      {
        base_stat: 55,
        effort: 0,
        stat: {
          name: 'hp',
          url: 'https://pokeapi.co/api/v2/stat/1/',
        },
      },
      {
        base_stat: 81,
        effort: 0,
        stat: {
          name: 'attack',
          url: 'https://pokeapi.co/api/v2/stat/2/',
        },
      },
      {
        base_stat: 60,
        effort: 0,
        stat: {
          name: 'defense',
          url: 'https://pokeapi.co/api/v2/stat/3/',
        },
      },
      {
        base_stat: 50,
        effort: 0,
        stat: {
          name: 'special-attack',
          url: 'https://pokeapi.co/api/v2/stat/4/',
        },
      },
      {
        base_stat: 70,
        effort: 0,
        stat: {
          name: 'special-defense',
          url: 'https://pokeapi.co/api/v2/stat/5/',
        },
      },
      {
        base_stat: 97,
        effort: 2,
        stat: {
          name: 'speed',
          url: 'https://pokeapi.co/api/v2/stat/6/',
        },
      },
    ],
    types: [
      {
        slot: 1,
        type: {
          name: 'normal',
          url: 'https://pokeapi.co/api/v2/type/1/',
        },
      },
    ],
    weight: 185,
  },
  {
    abilities: [
      {
        ability: {
          name: 'keen-eye',
          url: 'https://pokeapi.co/api/v2/ability/51/',
        },
        is_hidden: false,
        slot: 1,
      },
      {
        ability: {
          name: 'sniper',
          url: 'https://pokeapi.co/api/v2/ability/97/',
        },
        is_hidden: true,
        slot: 3,
      },
    ],
    height: 3,
    id: 21,
    name: 'spearow',
    order: 30,
    sprites: {
      back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/21.png',
      back_female: null,
      back_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/21.png',
      back_shiny_female: null,
      front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/21.png',
      front_female: null,
      front_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/21.png',
      front_shiny_female: null,
      other: {
        'official-artwork': {
          front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/21.png',
          front_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/21.png',
        },
      },
    },
    stats: [
      {
        base_stat: 40,
        effort: 0,
        stat: {
          name: 'hp',
          url: 'https://pokeapi.co/api/v2/stat/1/',
        },
      },
      {
        base_stat: 60,
        effort: 0,
        stat: {
          name: 'attack',
          url: 'https://pokeapi.co/api/v2/stat/2/',
        },
      },
      {
        base_stat: 30,
        effort: 0,
        stat: {
          name: 'defense',
          url: 'https://pokeapi.co/api/v2/stat/3/',
        },
      },
      {
        base_stat: 31,
        effort: 0,
        stat: {
          name: 'special-attack',
          url: 'https://pokeapi.co/api/v2/stat/4/',
        },
      },
      {
        base_stat: 31,
        effort: 0,
        stat: {
          name: 'special-defense',
          url: 'https://pokeapi.co/api/v2/stat/5/',
        },
      },
      {
        base_stat: 70,
        effort: 1,
        stat: {
          name: 'speed',
          url: 'https://pokeapi.co/api/v2/stat/6/',
        },
      },
    ],
    types: [
      {
        slot: 1,
        type: {
          name: 'normal',
          url: 'https://pokeapi.co/api/v2/type/1/',
        },
      },
      {
        slot: 2,
        type: {
          name: 'flying',
          url: 'https://pokeapi.co/api/v2/type/3/',
        },
      },
    ],
    weight: 20,
  },
  {
    abilities: [
      {
        ability: {
          name: 'keen-eye',
          url: 'https://pokeapi.co/api/v2/ability/51/',
        },
        is_hidden: false,
        slot: 1,
      },
      {
        ability: {
          name: 'sniper',
          url: 'https://pokeapi.co/api/v2/ability/97/',
        },
        is_hidden: true,
        slot: 3,
      },
    ],
    height: 12,
    id: 22,
    name: 'fearow',
    order: 31,
    sprites: {
      back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/22.png',
      back_female: null,
      back_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/22.png',
      back_shiny_female: null,
      front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/22.png',
      front_female: null,
      front_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/22.png',
      front_shiny_female: null,
      other: {
        'official-artwork': {
          front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/22.png',
          front_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/22.png',
        },
      },
    },
    stats: [
      {
        base_stat: 65,
        effort: 0,
        stat: {
          name: 'hp',
          url: 'https://pokeapi.co/api/v2/stat/1/',
        },
      },
      {
        base_stat: 90,
        effort: 0,
        stat: {
          name: 'attack',
          url: 'https://pokeapi.co/api/v2/stat/2/',
        },
      },
      {
        base_stat: 65,
        effort: 0,
        stat: {
          name: 'defense',
          url: 'https://pokeapi.co/api/v2/stat/3/',
        },
      },
      {
        base_stat: 61,
        effort: 0,
        stat: {
          name: 'special-attack',
          url: 'https://pokeapi.co/api/v2/stat/4/',
        },
      },
      {
        base_stat: 61,
        effort: 0,
        stat: {
          name: 'special-defense',
          url: 'https://pokeapi.co/api/v2/stat/5/',
        },
      },
      {
        base_stat: 100,
        effort: 2,
        stat: {
          name: 'speed',
          url: 'https://pokeapi.co/api/v2/stat/6/',
        },
      },
    ],
    types: [
      {
        slot: 1,
        type: {
          name: 'normal',
          url: 'https://pokeapi.co/api/v2/type/1/',
        },
      },
      {
        slot: 2,
        type: {
          name: 'flying',
          url: 'https://pokeapi.co/api/v2/type/3/',
        },
      },
    ],
    weight: 380,
  },
  {
    abilities: [
      {
        ability: {
          name: 'cute-charm',
          url: 'https://pokeapi.co/api/v2/ability/56/',
        },
        is_hidden: false,
        slot: 1,
      },
      {
        ability: {
          name: 'competitive',
          url: 'https://pokeapi.co/api/v2/ability/172/',
        },
        is_hidden: false,
        slot: 2,
      },
      {
        ability: {
          name: 'friend-guard',
          url: 'https://pokeapi.co/api/v2/ability/132/',
        },
        is_hidden: true,
        slot: 3,
      },
    ],
    height: 5,
    id: 39,
    name: 'jigglypuff',
    order: 71,
    sprites: {
      back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/39.png',
      back_female: null,
      back_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/39.png',
      back_shiny_female: null,
      front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/39.png',
      front_female: null,
      front_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/39.png',
      front_shiny_female: null,
      other: {
        'official-artwork': {
          front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/39.png',
          front_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/39.png',
        },
      },
    },
    stats: [
      {
        base_stat: 115,
        effort: 2,
        stat: {
          name: 'hp',
          url: 'https://pokeapi.co/api/v2/stat/1/',
        },
      },
      {
        base_stat: 45,
        effort: 0,
        stat: {
          name: 'attack',
          url: 'https://pokeapi.co/api/v2/stat/2/',
        },
      },
      {
        base_stat: 20,
        effort: 0,
        stat: {
          name: 'defense',
          url: 'https://pokeapi.co/api/v2/stat/3/',
        },
      },
      {
        base_stat: 45,
        effort: 0,
        stat: {
          name: 'special-attack',
          url: 'https://pokeapi.co/api/v2/stat/4/',
        },
      },
      {
        base_stat: 25,
        effort: 0,
        stat: {
          name: 'special-defense',
          url: 'https://pokeapi.co/api/v2/stat/5/',
        },
      },
      {
        base_stat: 20,
        effort: 0,
        stat: {
          name: 'speed',
          url: 'https://pokeapi.co/api/v2/stat/6/',
        },
      },
    ],
    types: [
      {
        slot: 1,
        type: {
          name: 'normal',
          url: 'https://pokeapi.co/api/v2/type/1/',
        },
      },
      {
        slot: 2,
        type: {
          name: 'fairy',
          url: 'https://pokeapi.co/api/v2/type/18/',
        },
      },
    ],
    weight: 55,
  },
  {
    abilities: [
      {
        ability: {
          name: 'cute-charm',
          url: 'https://pokeapi.co/api/v2/ability/56/',
        },
        is_hidden: false,
        slot: 1,
      },
      {
        ability: {
          name: 'competitive',
          url: 'https://pokeapi.co/api/v2/ability/172/',
        },
        is_hidden: false,
        slot: 2,
      },
      {
        ability: {
          name: 'frisk',
          url: 'https://pokeapi.co/api/v2/ability/119/',
        },
        is_hidden: true,
        slot: 3,
      },
    ],
    height: 10,
    id: 40,
    name: 'wigglytuff',
    order: 72,
    sprites: {
      back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/40.png',
      back_female: null,
      back_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/40.png',
      back_shiny_female: null,
      front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/40.png',
      front_female: null,
      front_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/40.png',
      front_shiny_female: null,
      other: {
        'official-artwork': {
          front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/40.png',
          front_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/40.png',
        },
      },
    },
    stats: [
      {
        base_stat: 140,
        effort: 3,
        stat: {
          name: 'hp',
          url: 'https://pokeapi.co/api/v2/stat/1/',
        },
      },
      {
        base_stat: 70,
        effort: 0,
        stat: {
          name: 'attack',
          url: 'https://pokeapi.co/api/v2/stat/2/',
        },
      },
      {
        base_stat: 45,
        effort: 0,
        stat: {
          name: 'defense',
          url: 'https://pokeapi.co/api/v2/stat/3/',
        },
      },
      {
        base_stat: 85,
        effort: 0,
        stat: {
          name: 'special-attack',
          url: 'https://pokeapi.co/api/v2/stat/4/',
        },
      },
      {
        base_stat: 50,
        effort: 0,
        stat: {
          name: 'special-defense',
          url: 'https://pokeapi.co/api/v2/stat/5/',
        },
      },
      {
        base_stat: 45,
        effort: 0,
        stat: {
          name: 'speed',
          url: 'https://pokeapi.co/api/v2/stat/6/',
        },
      },
    ],
    types: [
      {
        slot: 1,
        type: {
          name: 'normal',
          url: 'https://pokeapi.co/api/v2/type/1/',
        },
      },
      {
        slot: 2,
        type: {
          name: 'fairy',
          url: 'https://pokeapi.co/api/v2/type/18/',
        },
      },
    ],
    weight: 120,
  },
  {
    abilities: [
      {
        ability: {
          name: 'pickup',
          url: 'https://pokeapi.co/api/v2/ability/53/',
        },
        is_hidden: false,
        slot: 1,
      },
      {
        ability: {
          name: 'technician',
          url: 'https://pokeapi.co/api/v2/ability/101/',
        },
        is_hidden: false,
        slot: 2,
      },
      {
        ability: {
          name: 'unnerve',
          url: 'https://pokeapi.co/api/v2/ability/127/',
        },
        is_hidden: true,
        slot: 3,
      },
    ],
    height: 4,
    id: 52,
    name: 'meowth',
    order: 88,
    sprites: {
      back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/52.png',
      back_female: null,
      back_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/52.png',
      back_shiny_female: null,
      front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/52.png',
      front_female: null,
      front_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/52.png',
      front_shiny_female: null,
      other: {
        'official-artwork': {
          front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/52.png',
          front_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/52.png',
        },
      },
    },
    stats: [
      {
        base_stat: 40,
        effort: 0,
        stat: {
          name: 'hp',
          url: 'https://pokeapi.co/api/v2/stat/1/',
        },
      },
      {
        base_stat: 45,
        effort: 0,
        stat: {
          name: 'attack',
          url: 'https://pokeapi.co/api/v2/stat/2/',
        },
      },
      {
        base_stat: 35,
        effort: 0,
        stat: {
          name: 'defense',
          url: 'https://pokeapi.co/api/v2/stat/3/',
        },
      },
      {
        base_stat: 40,
        effort: 0,
        stat: {
          name: 'special-attack',
          url: 'https://pokeapi.co/api/v2/stat/4/',
        },
      },
      {
        base_stat: 40,
        effort: 0,
        stat: {
          name: 'special-defense',
          url: 'https://pokeapi.co/api/v2/stat/5/',
        },
      },
      {
        base_stat: 90,
        effort: 1,
        stat: {
          name: 'speed',
          url: 'https://pokeapi.co/api/v2/stat/6/',
        },
      },
    ],
    types: [
      {
        slot: 1,
        type: {
          name: 'normal',
          url: 'https://pokeapi.co/api/v2/type/1/',
        },
      },
    ],
    weight: 42,
  },
  {
    abilities: [
      {
        ability: {
          name: 'limber',
          url: 'https://pokeapi.co/api/v2/ability/7/',
        },
        is_hidden: false,
        slot: 1,
      },
      {
        ability: {
          name: 'technician',
          url: 'https://pokeapi.co/api/v2/ability/101/',
        },
        is_hidden: false,
        slot: 2,
      },
      {
        ability: {
          name: 'unnerve',
          url: 'https://pokeapi.co/api/v2/ability/127/',
        },
        is_hidden: true,
        slot: 3,
      },
    ],
    height: 10,
    id: 53,
    name: 'persian',
    order: 91,
    sprites: {
      back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/53.png',
      back_female: null,
      back_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/53.png',
      back_shiny_female: null,
      front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/53.png',
      front_female: null,
      front_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/53.png',
      front_shiny_female: null,
      other: {
        'official-artwork': {
          front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/53.png',
          front_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/53.png',
        },
      },
    },
    stats: [
      {
        base_stat: 65,
        effort: 0,
        stat: {
          name: 'hp',
          url: 'https://pokeapi.co/api/v2/stat/1/',
        },
      },
      {
        base_stat: 70,
        effort: 0,
        stat: {
          name: 'attack',
          url: 'https://pokeapi.co/api/v2/stat/2/',
        },
      },
      {
        base_stat: 60,
        effort: 0,
        stat: {
          name: 'defense',
          url: 'https://pokeapi.co/api/v2/stat/3/',
        },
      },
      {
        base_stat: 65,
        effort: 0,
        stat: {
          name: 'special-attack',
          url: 'https://pokeapi.co/api/v2/stat/4/',
        },
      },
      {
        base_stat: 65,
        effort: 0,
        stat: {
          name: 'special-defense',
          url: 'https://pokeapi.co/api/v2/stat/5/',
        },
      },
      {
        base_stat: 115,
        effort: 2,
        stat: {
          name: 'speed',
          url: 'https://pokeapi.co/api/v2/stat/6/',
        },
      },
    ],
    types: [
      {
        slot: 1,
        type: {
          name: 'normal',
          url: 'https://pokeapi.co/api/v2/type/1/',
        },
      },
    ],
    weight: 320,
  },
  {
    abilities: [
      {
        ability: {
          name: 'keen-eye',
          url: 'https://pokeapi.co/api/v2/ability/51/',
        },
        is_hidden: false,
        slot: 1,
      },
      {
        ability: {
          name: 'inner-focus',
          url: 'https://pokeapi.co/api/v2/ability/39/',
        },
        is_hidden: false,
        slot: 2,
      },
      {
        ability: {
          name: 'defiant',
          url: 'https://pokeapi.co/api/v2/ability/128/',
        },
        is_hidden: true,
        slot: 3,
      },
    ],
    height: 8,
    id: 83,
    name: 'farfetchd',
    order: 135,
    sprites: {
      back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/83.png',
      back_female: null,
      back_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/83.png',
      back_shiny_female: null,
      front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/83.png',
      front_female: null,
      front_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/83.png',
      front_shiny_female: null,
      other: {
        'official-artwork': {
          front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/83.png',
          front_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/83.png',
        },
      },
    },
    stats: [
      {
        base_stat: 52,
        effort: 0,
        stat: {
          name: 'hp',
          url: 'https://pokeapi.co/api/v2/stat/1/',
        },
      },
      {
        base_stat: 90,
        effort: 1,
        stat: {
          name: 'attack',
          url: 'https://pokeapi.co/api/v2/stat/2/',
        },
      },
      {
        base_stat: 55,
        effort: 0,
        stat: {
          name: 'defense',
          url: 'https://pokeapi.co/api/v2/stat/3/',
        },
      },
      {
        base_stat: 58,
        effort: 0,
        stat: {
          name: 'special-attack',
          url: 'https://pokeapi.co/api/v2/stat/4/',
        },
      },
      {
        base_stat: 62,
        effort: 0,
        stat: {
          name: 'special-defense',
          url: 'https://pokeapi.co/api/v2/stat/5/',
        },
      },
      {
        base_stat: 60,
        effort: 0,
        stat: {
          name: 'speed',
          url: 'https://pokeapi.co/api/v2/stat/6/',
        },
      },
    ],
    types: [
      {
        slot: 1,
        type: {
          name: 'normal',
          url: 'https://pokeapi.co/api/v2/type/1/',
        },
      },
      {
        slot: 2,
        type: {
          name: 'flying',
          url: 'https://pokeapi.co/api/v2/type/3/',
        },
      },
    ],
    weight: 150,
  },
];

const byNameMock = [
  {
    abilities: [
      {
        ability: {
          name: 'steadfast',
          url: 'https://pokeapi.co/api/v2/ability/80/',
        },
        is_hidden: false,
        slot: 1,
      },
      {
        ability: {
          name: 'inner-focus',
          url: 'https://pokeapi.co/api/v2/ability/39/',
        },
        is_hidden: false,
        slot: 2,
      },
      {
        ability: {
          name: 'justified',
          url: 'https://pokeapi.co/api/v2/ability/154/',
        },
        is_hidden: true,
        slot: 3,
      },
    ],
    height: 12,
    id: 448,
    name: 'lucario',
    order: 573,
    sprites: {
      back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/448.png',
      back_female: null,
      back_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/448.png',
      back_shiny_female: null,
      front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/448.png',
      front_female: null,
      front_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/448.png',
      front_shiny_female: null,
      other: {
        'official-artwork': {
          front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/448.png',
          front_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/448.png',
        },
      },
    },
    stats: [
      {
        base_stat: 70,
        effort: 0,
        stat: {
          name: 'hp',
          url: 'https://pokeapi.co/api/v2/stat/1/',
        },
      },
      {
        base_stat: 110,
        effort: 1,
        stat: {
          name: 'attack',
          url: 'https://pokeapi.co/api/v2/stat/2/',
        },
      },
      {
        base_stat: 70,
        effort: 0,
        stat: {
          name: 'defense',
          url: 'https://pokeapi.co/api/v2/stat/3/',
        },
      },
      {
        base_stat: 115,
        effort: 1,
        stat: {
          name: 'special-attack',
          url: 'https://pokeapi.co/api/v2/stat/4/',
        },
      },
      {
        base_stat: 70,
        effort: 0,
        stat: {
          name: 'special-defense',
          url: 'https://pokeapi.co/api/v2/stat/5/',
        },
      },
      {
        base_stat: 90,
        effort: 0,
        stat: {
          name: 'speed',
          url: 'https://pokeapi.co/api/v2/stat/6/',
        },
      },
    ],
    types: [
      {
        slot: 1,
        type: {
          name: 'fighting',
          url: 'https://pokeapi.co/api/v2/type/2/',
        },
      },
      {
        slot: 2,
        type: {
          name: 'steel',
          url: 'https://pokeapi.co/api/v2/type/9/',
        },
      },
    ],
    weight: 540,
  },
];

const carrouselMock = [
  {
    abilities: [
      {
        ability: {
          name: 'pickup',
          url: 'https://pokeapi.co/api/v2/ability/53/',
        },
        is_hidden: false,
        slot: 1,
      },
      {
        ability: {
          name: 'thick-fat',
          url: 'https://pokeapi.co/api/v2/ability/47/',
        },
        is_hidden: false,
        slot: 2,
      },
      {
        ability: {
          name: 'gluttony',
          url: 'https://pokeapi.co/api/v2/ability/82/',
        },
        is_hidden: true,
        slot: 3,
      },
    ],
    height: 6,
    id: 446,
    name: 'munchlax',
    order: 234,
    sprites: {
      back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/446.png',
      back_female: null,
      back_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/446.png',
      back_shiny_female: null,
      front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/446.png',
      front_female: null,
      front_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/446.png',
      front_shiny_female: null,
      other: {
        'official-artwork': {
          front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/446.png',
          front_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/446.png',
        },
      },
    },
    stats: [
      {
        base_stat: 135,
        effort: 1,
        stat: {
          name: 'hp',
          url: 'https://pokeapi.co/api/v2/stat/1/',
        },
      },
      {
        base_stat: 85,
        effort: 0,
        stat: {
          name: 'attack',
          url: 'https://pokeapi.co/api/v2/stat/2/',
        },
      },
      {
        base_stat: 40,
        effort: 0,
        stat: {
          name: 'defense',
          url: 'https://pokeapi.co/api/v2/stat/3/',
        },
      },
      {
        base_stat: 40,
        effort: 0,
        stat: {
          name: 'special-attack',
          url: 'https://pokeapi.co/api/v2/stat/4/',
        },
      },
      {
        base_stat: 85,
        effort: 0,
        stat: {
          name: 'special-defense',
          url: 'https://pokeapi.co/api/v2/stat/5/',
        },
      },
      {
        base_stat: 5,
        effort: 0,
        stat: {
          name: 'speed',
          url: 'https://pokeapi.co/api/v2/stat/6/',
        },
      },
    ],
    types: [
      {
        slot: 1,
        type: {
          name: 'normal',
          url: 'https://pokeapi.co/api/v2/type/1/',
        },
      },
    ],
    weight: 1050,
  },
  {
    abilities: [
      {
        ability: {
          name: 'steadfast',
          url: 'https://pokeapi.co/api/v2/ability/80/',
        },
        is_hidden: false,
        slot: 1,
      },
      {
        ability: {
          name: 'inner-focus',
          url: 'https://pokeapi.co/api/v2/ability/39/',
        },
        is_hidden: false,
        slot: 2,
      },
      {
        ability: {
          name: 'prankster',
          url: 'https://pokeapi.co/api/v2/ability/158/',
        },
        is_hidden: true,
        slot: 3,
      },
    ],
    height: 7,
    id: 447,
    name: 'riolu',
    order: 572,
    sprites: {
      back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/447.png',
      back_female: null,
      back_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/447.png',
      back_shiny_female: null,
      front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/447.png',
      front_female: null,
      front_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/447.png',
      front_shiny_female: null,
      other: {
        'official-artwork': {
          front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/447.png',
          front_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/447.png',
        },
      },
    },
    stats: [
      {
        base_stat: 40,
        effort: 0,
        stat: {
          name: 'hp',
          url: 'https://pokeapi.co/api/v2/stat/1/',
        },
      },
      {
        base_stat: 70,
        effort: 1,
        stat: {
          name: 'attack',
          url: 'https://pokeapi.co/api/v2/stat/2/',
        },
      },
      {
        base_stat: 40,
        effort: 0,
        stat: {
          name: 'defense',
          url: 'https://pokeapi.co/api/v2/stat/3/',
        },
      },
      {
        base_stat: 35,
        effort: 0,
        stat: {
          name: 'special-attack',
          url: 'https://pokeapi.co/api/v2/stat/4/',
        },
      },
      {
        base_stat: 40,
        effort: 0,
        stat: {
          name: 'special-defense',
          url: 'https://pokeapi.co/api/v2/stat/5/',
        },
      },
      {
        base_stat: 60,
        effort: 0,
        stat: {
          name: 'speed',
          url: 'https://pokeapi.co/api/v2/stat/6/',
        },
      },
    ],
    types: [
      {
        slot: 1,
        type: {
          name: 'fighting',
          url: 'https://pokeapi.co/api/v2/type/2/',
        },
      },
    ],
    weight: 202,
  },
  {
    abilities: [
      {
        ability: {
          name: 'steadfast',
          url: 'https://pokeapi.co/api/v2/ability/80/',
        },
        is_hidden: false,
        slot: 1,
      },
      {
        ability: {
          name: 'inner-focus',
          url: 'https://pokeapi.co/api/v2/ability/39/',
        },
        is_hidden: false,
        slot: 2,
      },
      {
        ability: {
          name: 'justified',
          url: 'https://pokeapi.co/api/v2/ability/154/',
        },
        is_hidden: true,
        slot: 3,
      },
    ],
    height: 12,
    id: 448,
    name: 'lucario',
    order: 573,
    sprites: {
      back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/448.png',
      back_female: null,
      back_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/448.png',
      back_shiny_female: null,
      front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/448.png',
      front_female: null,
      front_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/448.png',
      front_shiny_female: null,
      other: {
        'official-artwork': {
          front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/448.png',
          front_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/448.png',
        },
      },
    },
    stats: [
      {
        base_stat: 70,
        effort: 0,
        stat: {
          name: 'hp',
          url: 'https://pokeapi.co/api/v2/stat/1/',
        },
      },
      {
        base_stat: 110,
        effort: 1,
        stat: {
          name: 'attack',
          url: 'https://pokeapi.co/api/v2/stat/2/',
        },
      },
      {
        base_stat: 70,
        effort: 0,
        stat: {
          name: 'defense',
          url: 'https://pokeapi.co/api/v2/stat/3/',
        },
      },
      {
        base_stat: 115,
        effort: 1,
        stat: {
          name: 'special-attack',
          url: 'https://pokeapi.co/api/v2/stat/4/',
        },
      },
      {
        base_stat: 70,
        effort: 0,
        stat: {
          name: 'special-defense',
          url: 'https://pokeapi.co/api/v2/stat/5/',
        },
      },
      {
        base_stat: 90,
        effort: 0,
        stat: {
          name: 'speed',
          url: 'https://pokeapi.co/api/v2/stat/6/',
        },
      },
    ],
    types: [
      {
        slot: 1,
        type: {
          name: 'fighting',
          url: 'https://pokeapi.co/api/v2/type/2/',
        },
      },
      {
        slot: 2,
        type: {
          name: 'steel',
          url: 'https://pokeapi.co/api/v2/type/9/',
        },
      },
    ],
    weight: 540,
  },
  {
    abilities: [
      {
        ability: {
          name: 'sand-stream',
          url: 'https://pokeapi.co/api/v2/ability/45/',
        },
        is_hidden: false,
        slot: 1,
      },
      {
        ability: {
          name: 'sand-force',
          url: 'https://pokeapi.co/api/v2/ability/159/',
        },
        is_hidden: true,
        slot: 3,
      },
    ],
    height: 8,
    id: 449,
    name: 'hippopotas',
    order: 575,
    sprites: {
      back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/449.png',
      back_female: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/female/449.png',
      back_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/449.png',
      back_shiny_female: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/female/449.png',
      front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/449.png',
      front_female: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/female/449.png',
      front_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/449.png',
      front_shiny_female: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/female/449.png',
      other: {
        'official-artwork': {
          front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/449.png',
          front_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/449.png',
        },
      },
    },
    stats: [
      {
        base_stat: 68,
        effort: 0,
        stat: {
          name: 'hp',
          url: 'https://pokeapi.co/api/v2/stat/1/',
        },
      },
      {
        base_stat: 72,
        effort: 0,
        stat: {
          name: 'attack',
          url: 'https://pokeapi.co/api/v2/stat/2/',
        },
      },
      {
        base_stat: 78,
        effort: 1,
        stat: {
          name: 'defense',
          url: 'https://pokeapi.co/api/v2/stat/3/',
        },
      },
      {
        base_stat: 38,
        effort: 0,
        stat: {
          name: 'special-attack',
          url: 'https://pokeapi.co/api/v2/stat/4/',
        },
      },
      {
        base_stat: 42,
        effort: 0,
        stat: {
          name: 'special-defense',
          url: 'https://pokeapi.co/api/v2/stat/5/',
        },
      },
      {
        base_stat: 32,
        effort: 0,
        stat: {
          name: 'speed',
          url: 'https://pokeapi.co/api/v2/stat/6/',
        },
      },
    ],
    types: [
      {
        slot: 1,
        type: {
          name: 'ground',
          url: 'https://pokeapi.co/api/v2/type/5/',
        },
      },
    ],
    weight: 495,
  },
  {
    abilities: [
      {
        ability: {
          name: 'sand-stream',
          url: 'https://pokeapi.co/api/v2/ability/45/',
        },
        is_hidden: false,
        slot: 1,
      },
      {
        ability: {
          name: 'sand-force',
          url: 'https://pokeapi.co/api/v2/ability/159/',
        },
        is_hidden: true,
        slot: 3,
      },
    ],
    height: 20,
    id: 450,
    name: 'hippowdon',
    order: 576,
    sprites: {
      back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/450.png',
      back_female: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/female/450.png',
      back_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/450.png',
      back_shiny_female: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/female/450.png',
      front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/450.png',
      front_female: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/female/450.png',
      front_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/450.png',
      front_shiny_female: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/female/450.png',
      other: {
        'official-artwork': {
          front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/450.png',
          front_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/450.png',
        },
      },
    },
    stats: [
      {
        base_stat: 108,
        effort: 0,
        stat: {
          name: 'hp',
          url: 'https://pokeapi.co/api/v2/stat/1/',
        },
      },
      {
        base_stat: 112,
        effort: 0,
        stat: {
          name: 'attack',
          url: 'https://pokeapi.co/api/v2/stat/2/',
        },
      },
      {
        base_stat: 118,
        effort: 2,
        stat: {
          name: 'defense',
          url: 'https://pokeapi.co/api/v2/stat/3/',
        },
      },
      {
        base_stat: 68,
        effort: 0,
        stat: {
          name: 'special-attack',
          url: 'https://pokeapi.co/api/v2/stat/4/',
        },
      },
      {
        base_stat: 72,
        effort: 0,
        stat: {
          name: 'special-defense',
          url: 'https://pokeapi.co/api/v2/stat/5/',
        },
      },
      {
        base_stat: 47,
        effort: 0,
        stat: {
          name: 'speed',
          url: 'https://pokeapi.co/api/v2/stat/6/',
        },
      },
    ],
    types: [
      {
        slot: 1,
        type: {
          name: 'ground',
          url: 'https://pokeapi.co/api/v2/type/5/',
        },
      },
    ],
    weight: 3000,
  },
];

module.exports = {
  firstPageMock,
  secondPageMock,
  normalMock,
  byNameMock,
  carrouselMock,
};
