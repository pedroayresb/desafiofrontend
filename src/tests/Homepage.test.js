import { screen, waitFor, fireEvent } from '@testing-library/react';
import renderWithRouter from '../setupTests';
import HomePage from '../pages/HomePage.tsx';
import { fetchPokemon } from '../utils/fetchPokemon.ts';
import { firstPageMock, secondPageMock, normalMock, byNameMock } from './mocks/pokeMocks';

jest.mock('../utils/fetchPokemon.ts', () => ({
  fetchPokemon: jest.fn(),
}));

describe('Testa a página inicial', () => {
  it('Testa se a página inicial é renderizada com sucesso', async () => {
    fetchPokemon
      .mockResolvedValue(firstPageMock);
    renderWithRouter(<HomePage />, '/');

    await waitFor(() => {
      expect(screen.getByAltText('bulbasaur')).toBeInTheDocument();
    });
  });
  it('Testa se a paginacao funciona', async () => {
    fetchPokemon
      .mockResolvedValueOnce(firstPageMock)
      .mockResolvedValueOnce(secondPageMock)
      .mockResolvedValueOnce(firstPageMock);
    renderWithRouter(<HomePage />, '/');

    await waitFor(() => {
      expect(screen.getByAltText('bulbasaur')).toBeInTheDocument();
    });

    fireEvent.click(screen.getByTestId('next-btn'));

    await waitFor(() => {
      expect(screen.getByAltText('weedle')).toBeInTheDocument();
    });

    fireEvent.click(screen.getByTestId('prev-btn'));

    await waitFor(() => {
      expect(screen.getByAltText('bulbasaur')).toBeInTheDocument();
    });
  });
  it('Testa se o filtro funciona', async () => {
    fetchPokemon
      .mockResolvedValueOnce(firstPageMock)
      .mockResolvedValueOnce(normalMock);
    renderWithRouter(<HomePage />, '/');

    await waitFor(() => {
      expect(screen.getByAltText('bulbasaur')).toBeInTheDocument();
    });

    const select = screen.getByTestId('filter-select');
    fireEvent.change(select, { target: { value: 'normal' } });

    await waitFor(() => {
      expect(screen.getByAltText('pidgey')).toBeInTheDocument();
    });

    fireEvent.change(select, { target: { value: 'all' } });

    await waitFor(() => {
      expect(screen.getByAltText('bulbasaur')).toBeInTheDocument();
    });
  });
  it('Testa se a busca funciona', async () => {
    fetchPokemon
      .mockResolvedValueOnce(firstPageMock)
      .mockResolvedValueOnce(byNameMock);
    renderWithRouter(<HomePage />, '/');

    await waitFor(() => {
      expect(screen.getByAltText('bulbasaur')).toBeInTheDocument();
    });

    const input = screen.getByTestId('search-input');
    fireEvent.change(input, { target: { value: 'lucario' } });
    fireEvent.click(screen.getByTestId('search-btn'));

    await waitFor(() => {
      expect(screen.getByAltText('lucario')).toBeInTheDocument();
    });

    fireEvent.change(input, { target: { value: '' } });

    await waitFor(() => {
      expect(screen.getByAltText('bulbasaur')).toBeInTheDocument();
    });
  });
});
