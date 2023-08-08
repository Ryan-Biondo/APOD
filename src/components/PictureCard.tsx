import {
  Card,
  CardBody,
  CardFooter,
  Image,
  Text,
  useColorMode,
  useTheme,
} from '@chakra-ui/react';

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
  const { colorMode } = useColorMode();
  const theme = useTheme();

  return (
    <Card
      my={4}
      bg={
        colorMode === 'dark' ? theme.colors.gray[900] : theme.colors.gray[100]
      }
      color={
        colorMode === 'dark' ? theme.colors.gray[100] : theme.colors.gray[900]
      }>
      <CardBody px={2}>
        <Text fontWeight="bold" fontSize="2xl" mb="2">
          {title}
        </Text>
        <Text fontSize="sm" mb="2">
          Date: {date}
        </Text>
        <Text>{explanation}</Text>
      </CardBody>
      <Image
        src={imageUrl}
        alt={title}
        w="100%"
        objectFit="cover"
        borderRadius="sm"
        mx="auto"
      />
      <CardFooter justifyContent={'space-between'} alignItems={'end'}>
        {hdUrl && (
          <Text
            as="a"
            href={hdUrl}
            target="_blank"
            rel="noopener noreferrer"
            textDecoration="underline">
            View in HD
          </Text>
        )}
        {copyright && (
          <Text mb={1} fontSize="xs">
            Copyright: {copyright}
          </Text>
        )}
      </CardFooter>
    </Card>
  );
};

export default PictureCard;
