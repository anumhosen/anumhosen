import { useState, useEffect } from 'react';

export default function TypingEffect({ 
  words = [], 
  speed = 100, 
  deleteSpeed = 50, 
  pauseTime = 1800,
  className = "" 
}) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (!words || words.length === 0) return;

    const fullWord = words[currentWordIndex];
    let timer;

    if (!isDeleting) {
      if (currentText.length < fullWord.length) {
        timer = setTimeout(() => {
          setCurrentText(fullWord.slice(0, currentText.length + 1));
        }, speed);
      } else {
        timer = setTimeout(() => {
          setIsDeleting(true);
        }, pauseTime);
      }
    } else {
      if (currentText.length > 0) {
        timer = setTimeout(() => {
          setCurrentText(fullWord.slice(0, currentText.length - 1));
        }, deleteSpeed);
      } else {
        setIsDeleting(false);
        setCurrentWordIndex((prev) => (prev + 1) % words.length);
      }
    }

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentWordIndex, words, speed, deleteSpeed, pauseTime]);

  return (
    <span className={`inline-flex items-center font-mono ${className}`}>
      <span>{currentText}</span>
      <span className="w-0.5 h-6 ml-1 bg-cyan-400 animate-pulse inline-block" />
    </span>
  );
}
