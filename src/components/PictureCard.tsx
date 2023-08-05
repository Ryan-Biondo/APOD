import { Box, Card, Image, Text } from '@chakra-ui/react';

interface PictureCardProps {
  title: string;
  imageUrl: string;
  date: string;
  explanation: string;
  hdUrl?: string;
  copyright?: string;
}

const PictureCard = (props: PictureCardProps) => {
  const { title, imageUrl, date, explanation, hdUrl, copyright } = props;

  return (
    <Card mt="4" py={2}>
      <Box px={2}>
        <Text fontWeight="bold" fontSize="2xl" mb="2">
          {title}
        </Text>
        <Text fontSize="sm" mb="2">
          Date: {date}
        </Text>
        <Text>{explanation}</Text>
      </Box>
      <Image
        src={imageUrl}
        alt={title}
        w="100%"
        objectFit="cover"
        borderRadius="sm"
        mt="4"
        mx="auto"
      />
      <Box px={2}>
        {hdUrl && (
          <Box mt="4">
            <Text as="a" href={hdUrl} target="_blank" rel="noopener noreferrer">
              View in HD
            </Text>
          </Box>
        )}
        {copyright && (
          <Box mt="2" fontSize="xs">
            Copyright: {copyright}
          </Box>
        )}
      </Box>
    </Card>
  );
};

export default PictureCard;
