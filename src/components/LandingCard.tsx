import {
  Box,
  Image,
  Text,
  Link as ChakraLink,
  Card,
  CardBody,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';

interface CardProps {
  imageUrl: string;
  title: string;
  date?: string;
}

const LandingCard = ({ imageUrl, title, date }: CardProps) => {
  return (
    <ChakraLink as={Link} to={`/details/${date}`}>
      <Card h="fit-content" borderRadius="lg" boxShadow="lg">
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
                {date}
              </Text>
            )}
          </Box>
        </CardBody>
      </Card>
    </ChakraLink>
  );
};

export default LandingCard;
