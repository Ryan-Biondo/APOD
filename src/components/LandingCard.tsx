import {
  Box,
  Image,
  Text,
  Link as ChakraLink,
  Card,
  CardBody,
  useColorMode,
  useTheme,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';

interface CardProps {
  imageUrl: string;
  title: string;
  date?: string;
  onClick?: () => void;
}

const formatDateDisplay = (dateString: string) => {
  const [year, month, day] = dateString.split('-');
  return `${month}-${day}-${year}`;
};

const LandingCard = ({ imageUrl, title, date, onClick }: CardProps) => {
  const { colorMode } = useColorMode();
  const theme = useTheme();

  return (
    <ChakraLink as={Link} to={`/details/${date}`} onClick={onClick}>
      <Card
        h="fit-content"
        borderRadius="lg"
        boxShadow="lg"
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
        }}>
        <CardBody padding={0}>
          <Image
            src={imageUrl}
            alt={title}
            objectFit="cover"
            height="250px"
            width="100%"
            borderTopRadius="lg"
          />
          <Box my={2} px={3}>
            <Text fontWeight="semibold" fontSize="lg">
              {title}
            </Text>
            {date && (
              <Text fontSize="sm" mt="1">
                {formatDateDisplay(date)}
              </Text>
            )}
          </Box>
        </CardBody>
      </Card>
    </ChakraLink>
  );
};

export default LandingCard;
