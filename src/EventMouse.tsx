import { useState } from "react";

type Props = {
  beforeSrc: string;
  afterSrc: string;
  alt: string;
};

export default function EventMouse({ beforeSrc, afterSrc, alt }: Props) {
  const [current, setCurrent] = useState(beforeSrc);

  const handleEnter = () => setCurrent(afterSrc);
  const handleLeave = () => setCurrent(beforeSrc);

  return (
    <img
      src={current}
      alt={alt}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    />
  );
}
