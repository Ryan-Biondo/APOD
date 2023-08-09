import { HStack, Button, useColorMode, useTheme } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import ThemeToggleButton from './ThemeToggleButton';

interface Props {
  setStartDate: React.Dispatch<React.SetStateAction<Date | null>>;
}

const HomeButton = ({ setStartDate }: Props) => {
  const { colorMode } = useColorMode();
  const theme = useTheme();
  return (
    <>
      <HStack justifyContent={'space-between'} mb={3}>
        <Link to="/">
          <Button
            size="lg"
            onClick={() => setStartDate(new Date())}
            borderWidth={1}
            bg={
              colorMode === 'dark'
                ? theme.colors.gray[900]
                : theme.colors.gray[100]
            }
            color={
              colorMode === 'dark'
                ? theme.colors.gray[100]
                : theme.colors.gray[900]
            }
            _hover={{
              bg:
                colorMode === 'dark'
                  ? theme.colors.gray[800]
                  : theme.colors.gray[200],
            }}>
            Home
          </Button>
        </Link>
        <ThemeToggleButton />
      </HStack>
    </>
  );
};

export default HomeButton;
