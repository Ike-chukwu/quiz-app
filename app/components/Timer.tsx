import React from "react";

type Props = {
  className: string;
  timeRemaining?: number;
  mode?: string;
};

const Timer = ({ className, timeRemaining, mode }: Props) => {
  const mins = timeRemaining && Math.floor(timeRemaining / 60);
  const secs = timeRemaining && Math.floor(timeRemaining % 60);

  return (
    <div
      className={`text-[20px] ${className} ${
        mode == "dark" ? "text-white" : "text-[#313E51]"
      }`}
    >
      {mins && mins < 10 && 0}
      {`${mins}`}:{secs && secs < 10 && 0}
      {`${secs}`}
    </div>
  );
};

export default Timer;
