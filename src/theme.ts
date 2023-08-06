import { extendTheme, ThemeConfig } from "@chakra-ui/react";


const config: ThemeConfig = {
  initialColorMode: 'dark'
 
};

const theme = extendTheme({ config,
  colors: {
    gray: {
      50: '#f9f9f9',
      100: '#ededed',
      200: '#d3d3d3',
      300: '#b3b3b3',
      400: '#a0a0a0',
      500: '#898989',
      600: '#636363',
      700: '#404040',
      800: '#262626',
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
        color: props.colorMode === 'dark' ? 'gray.100' : 'gray.900'
      }
    })
  }

  
   });

export default theme;