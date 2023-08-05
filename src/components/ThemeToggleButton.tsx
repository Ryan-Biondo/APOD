import { Switch, useColorMode } from '@chakra-ui/react';

const ThemeToggleButton = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Switch onChange={toggleColorMode} colorScheme="green">
      {colorMode === 'light' ? 'Light Mode' : 'Dark Mode'}
    </Switch>
  );
};

export default ThemeToggleButton;
