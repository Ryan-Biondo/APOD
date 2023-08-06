import { Box, HStack, Text } from '@chakra-ui/react';

import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useNavigate } from 'react-router-dom';

interface CalendarProps {
  startDate: Date | null;
  setStartDate: React.Dispatch<React.SetStateAction<Date | null>>;
}

const Calendar = ({ startDate, setStartDate }: CalendarProps) => {
  const navigate = useNavigate();

  return (
    <HStack mb={2} mx={'auto'} w={'fit-content'}>
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
          minDate={new Date('1995-06-16')}
          maxDate={new Date()}
          showYearDropdown={true}
          scrollableYearDropdown={true}
          yearDropdownItemNumber={30}
        />
      </Box>
    </HStack>
  );
};

const formatDate = (date: Date): string =>
  `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(
    2,
    '0'
  )}-${String(date.getDate()).padStart(2, '0')}`;

export default Calendar;
