import "@mantine/core/styles.css";
import '@mantine/carousel/styles.css';

import { MantineProvider } from "@mantine/core";
import Home from "./pages/Home";
import theme from "./theme/theme";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <MantineProvider theme={theme}>
        <Home />
      </MantineProvider>
    </QueryClientProvider>
  );
}
