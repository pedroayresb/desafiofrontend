import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import HomePage from './pages/HomePage';
import PokemonPage from './pages/PokemonPage';
import PartyPage from './pages/PartyPage';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={ queryClient }>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <HomePage />
            }
          />
          <Route
            path="/pokemon/:pokemonName"
            element={
              <PokemonPage />
            }
          />
          <Route
            path="/party"
            element={
              <PartyPage />
            }
          />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
