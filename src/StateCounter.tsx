import "./StateCounter.css";

type Props = {
  step: string;
  onUpdate: string;
};

export default function StateCounter({ step, onUpdate }: Props) {
  const handleClick = () => onUpdate(step);
  return (
    <button className="cnt" onClick={handleClick}>
      <span>{step}</span>
    </button>
  );
}
