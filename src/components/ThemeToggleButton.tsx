import { IconButton, useColorMode, useTheme } from '@chakra-ui/react';
import { SunIcon, MoonIcon } from '@chakra-ui/icons';

const ThemeToggleButton = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const theme = useTheme();

  return (
    <IconButton
      size="lg"
      icon={colorMode === 'dark' ? <SunIcon /> : <MoonIcon />}
      onClick={toggleColorMode}
      aria-label="Toggle theme"
      borderWidth={1}
      fontSize={{ base: 'xl', md: '2xl' }}
      bg={
        colorMode === 'dark' ? theme.colors.gray[900] : theme.colors.gray[100]
      }
      color={
        colorMode === 'dark' ? theme.colors.gray[100] : theme.colors.gray[900]
      }
      _hover={{
        bg:
          colorMode === 'dark'
            ? theme.colors.gray[800]
            : theme.colors.gray[200],
      }}
    />
  );
};

export default ThemeToggleButton;
