import { ThemeProvider } from '@mui/material/styles';

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { fetchCandidateProfile, fetchCandidateSummary } from './api/api.ts'
import { theme } from './theme';

import './index.css'
import App from './App.tsx'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      queryFn: async ({ queryKey }) => {
        const [endpoint] = queryKey as [string];

        if (endpoint === 'candidateSummary') {
          return fetchCandidateSummary();
        }

        if (endpoint === 'candidateProfile') {
          return fetchCandidateProfile();
        }

        throw new Error(`Unknown query key: ${endpoint}`);
      },
      staleTime: 50000,
      refetchOnWindowFocus: false,
    },
  },
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </ThemeProvider>
  </StrictMode>,
)
