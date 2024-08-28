import "@mantine/core/styles.css";
import '@mantine/notifications/styles.css';

import { RouterProvider } from "react-router-dom";
import { MantineProvider } from "@mantine/core";
import theme from "./theme/theme";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Notifications } from '@mantine/notifications';
import router from "./router";

const queryClient = new QueryClient();



export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <MantineProvider theme={theme}>
        <Notifications />
        <RouterProvider router={router} />
      </MantineProvider>
    </QueryClientProvider>
  );
}
