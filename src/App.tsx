import "@mantine/core/styles.css";

import { MantineProvider } from "@mantine/core";
import Invitation from "./pages/Invitation";
import theme from "./theme/theme";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <MantineProvider theme={theme}>
        <Invitation />
      </MantineProvider>
    </QueryClientProvider>
  );
}
