import { useEffect, useRef } from 'react';
import { useColorMode, useTheme } from '@chakra-ui/react';

const numStars = 150;

const StarryNight = () => {
  const container = useRef<HTMLDivElement | null>(null);
  const { colorMode } = useColorMode();
  const theme = useTheme();

  const starColors = [
    '#FFDFD3', // soft peach
    '#D4EFFF', // gentle sky blue
    '#FFEED4', // light tangerine
    '#D8FFD4', // pastel green
    '#FFD4EB', // light pink
    '#D4DFFF', // pale lilac
  ];

  const getRandomStarColor = () => {
    const randomIndex = Math.floor(Math.random() * starColors.length);
    return starColors[randomIndex];
  };

  useEffect(() => {
    const generateRandomPosition = () => {
      const documentWidth = document.documentElement.scrollWidth;
      const documentHeight = document.documentElement.scrollHeight;
      const xPos = Math.floor(Math.random() * documentWidth);
      const yPos = Math.floor(Math.random() * documentHeight);
      return { x: xPos, y: yPos };
    };

    const createStar = (container: HTMLDivElement) => {
      const star = document.createElement('div');
      star.classList.add('star');
      // Set a random angle between 0 and 360 degrees
      const randomAngle = Math.floor(Math.random() * 360);
      star.style.transform = `rotate(${randomAngle}deg)`;
      star.style.backgroundColor = getRandomStarColor(); // Updated to use the new random color function
      const position = generateRandomPosition();
      star.style.left = `${position.x}px`;
      star.style.top = `${position.y}px`;
      container.appendChild(star);
    };

    const applyRandomTwinkle = (star: HTMLDivElement) => {
      const randomInterval = Math.random() * 3000 + 1000;
      setTimeout(() => {
        star.classList.toggle('twinkle');
        setTimeout(() => applyRandomTwinkle(star), randomInterval);
      }, randomInterval);
    };

    if (container.current) {
      for (let i = 0; i < numStars; i++) {
        createStar(container.current);
      }
      const stars = container.current.getElementsByClassName('star');
      for (let i = 0; i < stars.length; i++) {
        const star = stars[i] as HTMLDivElement;
        applyRandomTwinkle(star);
      }
    }

    // Cleanup function to remove all stars
    return () => {
      if (container.current) {
        while (container.current.firstChild) {
          container.current.removeChild(container.current.firstChild);
        }
      }
    };
  }, [colorMode, theme]);

  return <div ref={container} id="star-container"></div>;
};

export default StarryNight;
