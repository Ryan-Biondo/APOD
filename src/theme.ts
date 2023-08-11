import { extendTheme, ThemeConfig } from "@chakra-ui/react";


const config: ThemeConfig = {
  initialColorMode: 'dark'
 
};

const theme = extendTheme({ config,
  colors: {
    gray: {
      50: '#f0f0f0',
      100: '#F0F2FF',
      200: '#e4dfeb',
      300: '#b3b3b3',
      400: '#a0a0a0',
      500: '#898989',
      600: '#313131',
      700: '#262626',
      800: '#1a1a1a',
      900: '#111',
    },

    background: {
      light: '#F0F2FF',
      dark: '#1a1a1a',
    }
  },
  styles: {
    global: (props: { colorMode: string; }) => ({
      body: {
        bg: props.colorMode === 'dark' ? 'background.dark' : 'background.light',
        color: props.colorMode === 'dark' ? 'gray.50' : 'gray.900'
      }
    })
  }

  
   });

export default theme;