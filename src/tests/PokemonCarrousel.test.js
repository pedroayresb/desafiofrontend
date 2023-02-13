import { screen, waitFor } from '@testing-library/react';
import PokemonsCarrousel from '../components/PokemonsCarrousel.tsx';
import renderWithRouter from '../setupTests';
import { fetchPokemonCarrousel } from '../utils/fetchPokemon.ts';
import { carrouselMock } from './mocks/pokeMocks';

jest.mock('../utils/fetchPokemon.ts', () => ({
  fetchPokemonCarrousel: jest.fn(),
}));

describe('Testa o carrousel', () => {
  it('Testa se o carrousel é renderizado com sucesso', async () => {
    fetchPokemonCarrousel
      .mockResolvedValue(carrouselMock);
    renderWithRouter(<PokemonsCarrousel id={ 448 } />, '/pokemon/lucario');

    await waitFor(() => {
      expect(screen.getByText('#446')).toBeInTheDocument();
      expect(screen.getByText('#447')).toBeInTheDocument();
      expect(screen.getByText('#448')).toBeInTheDocument();
      expect(screen.getByTestId('pokemon-carrousel-item-448').classList)
        .toContain('border-yellow-500');
      expect(screen.getByText('#449')).toBeInTheDocument();
      expect(screen.getByText('#450')).toBeInTheDocument();
    });
  });
  it('Testa se o carrousel é renderizado com sucesso', async () => {
    fetchPokemonCarrousel
      .mockResolvedValue(carrouselMock);
    renderWithRouter(<PokemonsCarrousel id={ 1 } />, '/pokemon/lucario');

    await waitFor(() => {
      expect(screen.getByText('#446')).toBeInTheDocument();
      expect(screen.getByText('#447')).toBeInTheDocument();
      expect(screen.getByText('#448')).toBeInTheDocument();
      expect(screen.getByText('#449')).toBeInTheDocument();
      expect(screen.getByText('#450')).toBeInTheDocument();
    });
  });
});
