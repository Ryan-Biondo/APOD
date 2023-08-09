import { Button, Flex, useColorMode, useTheme } from '@chakra-ui/react';

const BackToTop = () => {
  const { colorMode } = useColorMode();
  const theme = useTheme();
  return (
    <>
      <Flex justifyContent="end">
        <Button
          size="lg"
          onClick={() => window.scrollTo(0, 0)}
          borderWidth={1}
          mt={8}
          bg={
            colorMode === 'dark'
              ? theme.colors.gray[900]
              : theme.colors.gray[100]
          }
          color={
            colorMode === 'dark'
              ? theme.colors.gray[100]
              : theme.colors.gray[900]
          }>
          Back to top
        </Button>
      </Flex>
    </>
  );
};

export default BackToTop;
