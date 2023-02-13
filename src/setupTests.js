import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';
import { QueryClientProvider, QueryClient } from 'react-query';
import { render } from '@testing-library/react';

const renderWithRouter = (component, route) => {
  const queryClient = new QueryClient();

  return (
    {
      ...render(
        <QueryClientProvider client={ queryClient }>
          <MemoryRouter initialEntries={ [route] }>
            {component}
          </MemoryRouter>
        </QueryClientProvider>,
      ),
    });
};

export default renderWithRouter;
