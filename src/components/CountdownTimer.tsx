import React, { useState, useEffect } from 'react';

export const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState(3600); // 1 hour for demo

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="text-brand-red font-bold text-lg mb-2">
      Oferta termina en: {formatTime(timeLeft)}
    </div>
  );
};
