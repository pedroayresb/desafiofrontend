import { screen, waitFor } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import renderWithRouter from '../setupTests';
import PokemonPage from '../pages/PokemonPage.tsx';
import { fetchPokemonByName, fetchPokemonCarrousel } from '../utils/fetchPokemon.ts';
import { byNameMock, carrouselMock } from './mocks/pokeMocks';

jest.mock('../utils/fetchPokemon.ts', () => ({
  fetchPokemonByName: jest.fn(),
  fetchPokemonCarrousel: jest.fn(),
}));

const LUCARIO_URL = '/pokemon/lucario';

describe('Testa a página de detalhes', () => {
  it('Testa se a página de detalhes é renderizada com sucesso', async () => {
    fetchPokemonByName
      .mockResolvedValue(byNameMock);
    fetchPokemonCarrousel
      .mockResolvedValue(carrouselMock);
    renderWithRouter(<PokemonPage />, LUCARIO_URL);

    await waitFor(() => {
      expect(screen.getByText('lucario')).toBeInTheDocument();
    });
  });
  it('Testa se o shiny funciona', async () => {
    fetchPokemonByName
      .mockResolvedValue(byNameMock);
    fetchPokemonCarrousel
      .mockResolvedValue(carrouselMock);
    renderWithRouter(<PokemonPage />, LUCARIO_URL);

    await waitFor(() => {
      expect(screen.getByText('lucario')).toBeInTheDocument();
    });
    act(() => {
      const shiny = screen.getByTestId('shiny-checkbox');
      expect(shiny).not.toBeChecked();
      expect(screen.getByAltText('lucario')).toBeInTheDocument();

      shiny.click();
      expect(shiny).toBeChecked();
      expect(screen.getByAltText('lucario')).toHaveProperty('src', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/448.png');
    });
  });
  it('Testa se nao existir artwork, carrega o sprite', async () => {
    const newNameMock = {
      ...byNameMock[0],
      sprites: {
        front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/448.png',
        front_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/448.png',
        other: {
          'official-artwork': {
            front_default: null,
            front_shiny: null,
          },
        },
      },
    };
    fetchPokemonByName
      .mockResolvedValue([newNameMock]);
    fetchPokemonCarrousel
      .mockResolvedValue(carrouselMock);
    renderWithRouter(<PokemonPage />, LUCARIO_URL);

    await waitFor(() => {
      expect(screen.getByText('lucario')).toBeInTheDocument();
    });
    act(() => {
      const shiny = screen.getByTestId('shiny-checkbox');
      expect(shiny).not.toBeChecked();
      expect(screen.getByAltText('lucario')).toHaveProperty('src', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/448.png');

      shiny.click();
      expect(shiny).toBeChecked();
      expect(screen.getByAltText('lucario')).toHaveProperty('src', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/448.png');
    });
  });
  it('Testa se as habilidades sao renderizadas', async () => {
    fetchPokemonByName
      .mockResolvedValue(byNameMock);
    fetchPokemonCarrousel
      .mockResolvedValue(carrouselMock);
    renderWithRouter(<PokemonPage />, LUCARIO_URL);

    await waitFor(() => {
      expect(screen.getByText('lucario')).toBeInTheDocument();
    });

    expect(screen.getByText('inner focus')).toBeInTheDocument();
    expect(screen.getByText('steadfast')).toBeInTheDocument();
    expect(screen.getByText('justified')).toBeInTheDocument();
  });
  it('Testa se a habilidade e renderizada', async () => {
    const newMock = {
      ...byNameMock[0],
      abilities: [
        {
          ability: {
            name: 'inner focus',
            url: 'https://pokeapi.co/api/v2/ability/39/',
          },
          is_hidden: false,
          slot: 1,
        },
        {
          ability: {
            name: 'steadfast',
            url: 'https://pokeapi.co/api/v2/ability/80/',
          },
          is_hidden: true,
          slot: 3,
        },
      ],
    };
    fetchPokemonByName
      .mockResolvedValue([newMock]);
    fetchPokemonCarrousel
      .mockResolvedValueOnce(carrouselMock);
    renderWithRouter(<PokemonPage />, LUCARIO_URL);

    await waitFor(() => {
      expect(screen.getByText('lucario')).toBeInTheDocument();
    });
    expect(screen.getByTestId('abilities-container'))
      .toHaveAttribute('class', 'grid grid-cols-1 gap-2');
  });
  it('Testa se a barra de stat fica cheia a 120', async () => {
    const newMock = {
      ...byNameMock[0],
      stats: [
        {
          base_stat: 120,
          effort: 0,
          stat: {
            name: 'hp',
            url: 'https://pokeapi.co/api/v2/stat/1/',
          },
        },
        {
          base_stat: 300,
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
          base_stat: 87,
          effort: 0,
          stat: {
            name: 'special-attack',
            url: 'https://pokeapi.co/api/v2/stat/4/',
          },
        },
      ],
    };
    fetchPokemonByName
      .mockResolvedValue([newMock]);
    fetchPokemonCarrousel
      .mockResolvedValue(carrouselMock);
    renderWithRouter(<PokemonPage />, LUCARIO_URL);

    await waitFor(() => {
      expect(screen.getByText('lucario')).toBeInTheDocument();
    });

    expect(screen.getByTestId('stat-line-hp').classList).toContain('w-full');
    expect(screen.getByTestId('stat-line-attack').classList).toContain('w-full');
    expect(screen.getByTestId('stat-line-defense').classList).toContain('w-1/6');
    expect(screen.getByTestId('stat-line-special-attack').classList).toContain('w-1/2');
  });
});
