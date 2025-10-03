import React from "react";

type Props = {
  className: string;
  timeRemaining?: number;
};

const Timer = ({ className, timeRemaining }: Props) => {
  const mins = timeRemaining && Math.floor(timeRemaining / 60);
  const secs = timeRemaining && Math.floor(timeRemaining % 60);

  return (
    <div className={`text-white text-[20px] ${className}`}>
      {mins && mins < 10 && 0}
      {`${mins}`}:{secs && secs < 10 && 0}
      {`${secs}`}
    </div>
  );
};

export default Timer;
