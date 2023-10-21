import { useState, useEffect } from 'react';

function TypingLoader() {
  const fullText = [
    'Please wait a moment...',
    'Launching you to space...',
    'Setting phasers to stun...',
    'Engage!',
  ];
  const [textIndex, setTextIndex] = useState(0);
  const [textDisplay, setTextDisplay] = useState('');
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    if (charIndex < fullText[textIndex].length) {
      const typeInterval = setInterval(() => {
        setTextDisplay(
          (prevTextDisplay) => prevTextDisplay + fullText[textIndex][charIndex]
        );
        setCharIndex((prevCharIndex) => prevCharIndex + 1);
      }, 100); // typing speed

      return () => {
        clearInterval(typeInterval);
      };
    } else {
      // If we are not at the last line, set a delay before moving to the next line
      if (textIndex < fullText.length - 1) {
        const linePause = setTimeout(() => {
          setTextIndex((prevTextIndex) => prevTextIndex + 1);
          setTextDisplay((prevTextDisplay) => prevTextDisplay + '\n'); // Start a new line
          setCharIndex(0);
        }, 2000);

        return () => {
          clearTimeout(linePause);
        };
      }
    }
  }, [textIndex, charIndex]);

  return <div className="typing-loader">{textDisplay}</div>;
}

export default TypingLoader;
