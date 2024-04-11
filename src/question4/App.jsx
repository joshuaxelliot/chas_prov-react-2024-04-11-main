// 3. Uppdatera ett namn med callback 3p
// En namn ska visas på sidan och namnet ska vara kopplat till useState i App-komponenten.
// Skapa en komponent: ChangeName som har ett inputfält som ska användas för att ändra
// namnet i App-komponenten via en callback-funktion.

import { useState } from 'react';


function App() {
  const [name, setName] = useState("Josh");
  const [edit, setEdit] = useState(false);

  function ChangeName() {
    if (edit) {
      return (
        <>
          <input type="text" onChange={(e) => setName(e.target.value)} value={name}/>
          <button onClick={() => setEdit(!edit)}>Spara</button>
        </>
      );
    } else {
      return (
        <>
          <p>{name}</p>
          <button onClick={() => setEdit(!edit)}>Ändra</button>
        </>
      );
    }
  }

  return <div>{ChangeName()}</div>;
}

export default App;

