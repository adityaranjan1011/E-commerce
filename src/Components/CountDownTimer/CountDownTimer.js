import React, {  useEffect, useState  } from 'react';
import './CountDownTimer.css';

export default function CountDownTimer() {

  const calculateTimeLeft = () =>{
    let year = new Date().getFullYear();
  
    const diff = +new Date(`${year}-11-5`) - +new Date();
  
    let timeLeft = {};
  
    if (diff > 0) {
      timeLeft = {
        DAYS: Math.floor(diff / (1000 * 60 * 60 * 24)),
        HOURS: Math.floor((diff / (1000 * 60 * 60)) % 24),
        MINUTES: Math.floor((diff / 1000 / 60) % 60),
        SECONDS: Math.floor((diff / 1000) % 60)
      };
    }
    return timeLeft;
  }

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  // const [year] = useState(new Date().getFullYear(););  
    useEffect(() => {
      const timer = setTimeout(() => {
        setTimeLeft(calculateTimeLeft());
      }, 1000);

      return () => clearTimeout(timer);

    });

    const timerComponents = [];

    Object.keys(timeLeft).forEach((interval) => {
      if (!timeLeft[interval]) {
        return;
      }

      timerComponents.push(
        <span>
          {timeLeft[interval]} {interval}{" "}
        </span>
      );
    });
 
    return (
      <div className="CountDownTimer">
       
            <h1>Coming Soon...</h1>  
            <h2 className="days-timer">{timerComponents.length ? timerComponents : <span>Time's up!</span>}</h2>
            
  </div>
    );
  
}

