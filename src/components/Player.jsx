import { useState } from "react";

export default function Player({ name, symbol, isActive }) {
  const [setName, changingName] = useState(name);
  const [isEditing, setIsEditing] = useState(false);

  function ifEditing() {
    setIsEditing(!isEditing);
  }

  function handleChange(event) {
    console.log(event);
    changingName(event.target.value);
  }

  let playername = (
    <input type="text" required value={setName} onChange={handleChange}></input>
  );
  let buttonLabel = "Save";

  if (!isEditing) {
    playername = <span className="player-name">{setName}</span>;
    buttonLabel = "Edit";
  }

  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {playername}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={ifEditing}>{buttonLabel}</button>
    </li>
  );
}
