import {
  Box,
  Card,
  Icon,
  Link,
  Text,
  useColorMode,
  useTheme,
} from '@chakra-ui/react';
import { BiPlanet } from 'react-icons/bi';
import BackToTop from './BackToTop';

const Footer = () => {
  const { colorMode } = useColorMode();
  const theme = useTheme();

  return (
    <>
      <BackToTop />
      <Card
        mt="35px"
        borderBottomRadius={0}
        p={2}
        justifyContent="space-between"
        alignItems="center"
        flexDirection="row"
        gap={6}
        bg={
          colorMode === 'dark' ? theme.colors.gray[900] : theme.colors.gray[100]
        }
        color={
          colorMode === 'dark' ? theme.colors.gray[100] : theme.colors.gray[900]
        }>
        <Box letterSpacing={0.5}>
          <Text>
            Created by{' '}
            <Link
              fontStyle="italic"
              href="https://www.ryanbiondo.com/"
              target="_blank">
              Ryan Biondo
            </Link>
          </Text>
          <Text>
            For more information, visit{' '}
            <Link
              href="https://www.ryanbiondo.com/"
              target="_blank"
              textDecoration="underline"
              color="teal.500">
              ryanbiondo.com
            </Link>
          </Text>
        </Box>
        <Icon
          as={BiPlanet}
          ml={2}
          w={'50px'}
          h={'50px'}
          alignSelf={'end'}
          display={{ base: 'none', sm: 'block' }}
        />
      </Card>
    </>
  );
};

export default Footer;
