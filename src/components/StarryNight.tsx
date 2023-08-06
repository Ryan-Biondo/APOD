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

  const getRandomStarColor = () => {
    const randomIndex = Math.floor(Math.random() * starColors.length);
    return starColors[randomIndex];
  };

  useEffect(() => {
    let resizeTimer: any;

    const generateStars = (container: HTMLDivElement) => {
      while (container.firstChild) {
        container.removeChild(container.firstChild);
      }

      for (let i = 0; i < numStars; i++) {
        createStar(container);
      }
      const stars = container.getElementsByClassName('star');
      for (let i = 0; i < stars.length; i++) {
        const star = stars[i] as HTMLDivElement;
        applyRandomTwinkle(star);
      }
    };

    // Debouncing effect
    const handleResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        if (container.current) {
          generateStars(container.current);
        }
      }, 500);
    };

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
      const randomAngle = Math.floor(Math.random() * 360);
      star.style.transform = `rotate(${randomAngle}deg)`;
      star.style.backgroundColor = getRandomStarColor();
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
      generateStars(container.current);
    }

    window.addEventListener('resize', handleResize);

    return () => {
      if (container.current) {
        while (container.current.firstChild) {
          container.current.removeChild(container.current.firstChild);
        }
      }
      window.removeEventListener('resize', handleResize);
      clearTimeout(resizeTimer);
    };
  }, [colorMode, theme]);

  return <div ref={container} id="star-container"></div>;
};

export default StarryNight;
