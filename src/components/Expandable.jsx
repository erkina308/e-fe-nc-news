import { useState } from "react";
import Button from "../styleComponents/Button";

export default function Expandable({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  function toggleOpen() {
    setIsOpen((currentState) => !currentState);
  }

  return (
    <div>
      <Button onClick={toggleOpen}>{isOpen ? "Hide" : "Show"} comments</Button>
      {isOpen ? children : null}
    </div>
  );
}
