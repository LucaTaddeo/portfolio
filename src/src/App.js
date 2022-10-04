import * as React from 'react';
import { createTheme, NextUIProvider, Text } from "@nextui-org/react"
import useDarkMode from 'use-dark-mode';

const lightTheme = createTheme({
  type: 'light',
})

const darkTheme = createTheme({
  type: 'dark',
})

function App() {
  const darkMode = useDarkMode(true);
  
  return (
    <NextUIProvider theme={darkMode.value ? darkTheme : lightTheme}>
      <div style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", height: "100vh"}} >
      <Text
        h1
        size={60}
        css={{
          textGradient: "45deg, $blue600 -20%, $pink600 50%",
        }}
        weight="bold"
      >
        Website
      </Text>
      <Text
        h1
        size={60}
        css={{
          textGradient: "45deg, $purple600 -20%, $pink600 100%",
        }}
        weight="bold"
      >
        Under
      </Text>
      <Text
        h1
        size={60}
        css={{
          textGradient: "45deg, $yellow600 -20%, $red600 100%",
        }}
        weight="bold"
      >
        Construction
      </Text>
      </div>
    </NextUIProvider>
  );
}

export default App;