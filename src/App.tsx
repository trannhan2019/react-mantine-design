import { MantineProvider } from "@mantine/core";

import { theme } from "./theme";
import { Router } from "./router";

function App() {
  return (
    <MantineProvider theme={theme}>
      <Router />
    </MantineProvider>
  );
}

export default App;
