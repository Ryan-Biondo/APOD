import { Box, Image, Text, Link as ChakraLink } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

interface CardProps {
  imageUrl: string;
  title: string;
  date?: string; // Add this
}

const LandingCard: React.FC<CardProps> = ({ imageUrl, title, date }) => {
  return (
    <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
      <ChakraLink as={Link} to={`/details/${date}`}>
        <Image src={imageUrl} alt={title} />
        <Box p="6">
          <Text fontWeight="semibold" fontSize="lg" mb="2">
            {title}
          </Text>
        </Box>
      </ChakraLink>
    </Box>
  );
};

export default LandingCard;
