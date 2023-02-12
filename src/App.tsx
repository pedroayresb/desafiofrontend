import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import HomePage from './pages/HomePage';
import PokemonPage from './pages/PokemonPage';

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
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
