import useApod from '../hooks/useApod';

const PictureCard = () => {
  const { data: apod, error, isLoading } = useApod();

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Something went wrong: {error.message}</p>;

  return apod ? (
    <div>
      <h2>{apod.title}</h2>
      <img src={apod.url} alt={apod.title} />
      <p>{apod.explanation}</p>
      {apod.copyright && <p>Copyright: {apod.copyright}</p>}
    </div>
  ) : (
    <p>No data to display.</p>
  );
};

export default PictureCard;
