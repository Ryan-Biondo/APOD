import { Heading, useColorMode, useTheme } from '@chakra-ui/react';

const ApodHeading = () => {
  const { colorMode } = useColorMode();
  const theme = useTheme();
  return (
    <>
      <Heading
        p={2}
        borderRadius={'lg'}
        width={'fit-content'}
        bg={
          colorMode === 'dark' ? theme.colors.gray[800] : theme.colors.gray[100]
        }
        color={
          colorMode === 'dark' ? theme.colors.gray[100] : theme.colors.gray[900]
        }
        fontSize={{ base: 'xl', md: '2xl', lg: '3xl', xl: '4xl' }}>
        AstroPix Gallery
      </Heading>
    </>
  );
};

export default ApodHeading;
