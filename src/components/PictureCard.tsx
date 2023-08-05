import { Box, Image, Text } from '@chakra-ui/react';

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
    <Box
      maxW="full"
      borderWidth="1px"
      borderRadius="lg"
      p="6"
      overflow="hidden">
      <Image src={imageUrl} alt={title} width="full" />
      <Box mt="4">
        <Text fontWeight="bold" fontSize="2xl" mb="2">
          {title}
        </Text>
        <Text fontSize="sm" mb="2">
          Date: {date}
        </Text>
        <Text>{explanation}</Text>
        {hdUrl && (
          <Box mt="4">
            <Text as="a" href={hdUrl} target="_blank" rel="noopener noreferrer">
              View in HD
            </Text>
          </Box>
        )}
        {copyright && (
          <Box mt="2" fontSize="xs" color="gray.500">
            Copyright: {copyright}
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default PictureCard;
