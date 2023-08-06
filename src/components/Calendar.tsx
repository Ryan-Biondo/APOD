import { Box, HStack, Text, useColorMode, useTheme } from '@chakra-ui/react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useNavigate } from 'react-router-dom';
import '../App.css';

interface CalendarProps {
  startDate: Date | null;
  setStartDate: React.Dispatch<React.SetStateAction<Date | null>>;
}

const Calendar = ({ startDate, setStartDate }: CalendarProps) => {
  const { colorMode } = useColorMode();
  const theme = useTheme();
  const navigate = useNavigate();

  return (
    <HStack
      bg={
        colorMode === 'dark' ? theme.colors.gray[700] : theme.colors.gray[100]
      }
      color={
        colorMode === 'dark' ? theme.colors.gray[100] : theme.colors.gray[900]
      }
      p={2}
      borderRadius={'lg'}>
      <Text>Choose a Date:</Text>
      <Box borderWidth={1}>
        <DatePicker
          selected={startDate}
          onChange={(date) => {
            if (date) {
              setStartDate(date);
              const formattedDate = formatDate(date);
              navigate(`/details/${formattedDate}`);
            }
          }}
          minDate={new Date('1995-06-17')}
          maxDate={new Date()}
          showYearDropdown={true}
          scrollableYearDropdown={true}
          yearDropdownItemNumber={30}
          dateFormat="MM-dd-yyyy"
          className="datepicker"
        />
      </Box>
    </HStack>
  );
};

const formatDate = (date: Date): string =>
  `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(
    2,
    '0'
  )}-${String(date.getUTCDate()).padStart(2, '0')}`;

export default Calendar;
