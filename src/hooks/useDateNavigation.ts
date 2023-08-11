import { useNavigate, useParams } from 'react-router-dom';

const useDateNavigation = () => {
  const navigate = useNavigate();
  const { date } = useParams<{ date: string }>();

  const today = new Date(Date.UTC(new Date().getUTCFullYear(), new Date().getUTCMonth(), new Date().getUTCDate() )).toISOString().split('T')[0];
  const earliestDate = '1995-06-16';

  const isAtStartDate = date === earliestDate;
  const isAtEndDate = date ? date >= today : false;

  const navigateToPreviousDate = (): Date | null => {
    if (isAtStartDate) return null;
    if (date) {
      const prevDate = new Date(date);
      prevDate.setMinutes(prevDate.getMinutes() + prevDate.getTimezoneOffset());
      prevDate.setDate(prevDate.getDate() - 1);
      navigate(`/details/${prevDate.toISOString().split('T')[0]}`);
      return prevDate;
    }
    return null;
  };

  const navigateToNextDate = (): Date | null => {
    if (isAtEndDate) return null;
    if (date) {
      const nextDate = new Date(date);
      nextDate.setMinutes(nextDate.getMinutes() + nextDate.getTimezoneOffset());
      nextDate.setDate(nextDate.getDate() + 1);
      navigate(`/details/${nextDate.toISOString().split('T')[0]}`);
      return nextDate;
    }
    return null;
  };

  return {
    navigateToPreviousDate,
    navigateToNextDate,
    isAtStartDate,
    isAtEndDate
  };
};

export default useDateNavigation;
