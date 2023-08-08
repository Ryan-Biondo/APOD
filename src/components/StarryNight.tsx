import { useEffect, useRef } from 'react';
import { useColorMode, useTheme } from '@chakra-ui/react';

const numStars = 150;

const StarryNight = () => {
  const container = useRef<HTMLDivElement | null>(null);
  const { colorMode } = useColorMode();
  const theme = useTheme();

  const starColors = [
    '#FFDFD3',
    '#D4EFFF',
    '#FFEED4',
    '#D8FFD4',
    '#FFD4EB',
    '#D4DFFF',
  ];

  const getRandomStarColor = () =>
    starColors[Math.floor(Math.random() * starColors.length)];

  useEffect(() => {
    let resizeTimer: ReturnType<typeof setTimeout>;

    const generateRandomPosition = () => {
      const { scrollWidth, scrollHeight } = document.documentElement;
      return {
        x: Math.floor(Math.random() * scrollWidth),
        y: Math.floor(Math.random() * scrollHeight),
      };
    };

    const createStar = (container: HTMLDivElement) => {
      const star = document.createElement('div');
      star.className = 'star';
      star.style.transform = `rotate(${Math.floor(Math.random() * 360)}deg)`;
      star.style.backgroundColor = getRandomStarColor();
      const { x, y } = generateRandomPosition();
      star.style.left = `${x}px`;
      star.style.top = `${y}px`;
      container.appendChild(star);
      applyRandomTwinkle(star);
    };

    const applyRandomTwinkle = (star: HTMLDivElement) => {
      const randomInterval = Math.random() * 3000 + 1000;
      setTimeout(() => {
        star.classList.toggle('twinkle');
        setTimeout(() => applyRandomTwinkle(star), randomInterval);
      }, randomInterval);
    };

    const generateStars = () => {
      const containerElement = container.current;
      if (containerElement) {
        while (containerElement.firstChild) {
          containerElement.removeChild(containerElement.firstChild);
        }
        Array.from({ length: numStars }).forEach(() =>
          createStar(containerElement)
        );
      }
    };

    const handleResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(generateStars, 500);
    };

    generateStars();
    window.addEventListener('resize', handleResize);

    return () => {
      const containerElement = container.current;
      if (containerElement) {
        while (containerElement.firstChild) {
          containerElement.removeChild(containerElement.firstChild);
        }
      }
      window.removeEventListener('resize', handleResize);
      clearTimeout(resizeTimer);
    };
  }, [colorMode, theme]);

  return <div ref={container} id="star-container" />;
};

export default StarryNight;
