import { Button, ChakraProvider, defaultSystem } from "@chakra-ui/react";

export function App() {
  return (
    <ChakraProvider value={defaultSystem}>
      <Button>Click me</Button>
    </ChakraProvider>
  );
}
