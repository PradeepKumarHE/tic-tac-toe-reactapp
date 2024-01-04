import { useState } from "react";

export default function Player({ name, symbol }) {
  const [isEditing, setIsEditing] = useState(false);
  function handleEditClick() {
    setIsEditing(true);
  }
  let playerName = <span className="palyer-name">{name}</span>;
  if (isEditing) {
    playerName = <input type="text" required />;
  }
  return (
    <li>
      <span className="palyer">
        {playerName}
        <span className="palyer-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>Save</button>
    </li>
  );
}
