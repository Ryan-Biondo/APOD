import { useNavigate, useParams } from 'react-router-dom';

const useDateNavigation = () => {
  const navigate = useNavigate();
  const { date } = useParams<{ date: string }>();

  const today = new Date().toISOString().split('T')[0];
  const earliestDate = '1995-06-16';

  const isAtStartDate = date === earliestDate;
  const isAtEndDate = date === today;

  const navigateToPreviousDate = (): Date | null => {
    if (isAtStartDate) return null;
    const prevDate = new Date(date!);
    prevDate.setDate(prevDate.getDate() - 1);
    navigate(`/details/${prevDate.toISOString().split('T')[0]}`);
    return prevDate;
  };

  const navigateToNextDate = (): Date | null => {
    if (isAtEndDate) return null;
    const nextDate = new Date(date!);
    nextDate.setDate(nextDate.getDate() + 1);
    navigate(`/details/${nextDate.toISOString().split('T')[0]}`);
    return nextDate;
  };

  return {
    navigateToPreviousDate,
    navigateToNextDate,
    isAtStartDate,
    isAtEndDate
  };
};

export default useDateNavigation;
