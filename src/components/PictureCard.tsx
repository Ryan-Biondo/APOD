import useApod from '../hooks/useApod';

const PictureCard = () => {
  const { data, error, isLoading } = useApod();

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  if (data) {
    return (
      <div>
        {data.map((item) => (
          <div key={item.date}>
            <h2>{item.title}</h2>
            <img src={item.url} alt={item.title} />
            <p>{item.explanation}</p>
            {item.copyright && <p>Copyright: {item.copyright}</p>}
          </div>
        ))}
      </div>
    );
  } else {
    return <p>No data to display.</p>;
  }
};

export default PictureCard;
