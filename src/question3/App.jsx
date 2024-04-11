// 3. Custom Hook useInput (3p)
// Skapa en hook useInput som tar hand om state för ett input-fält.
// useInput ska returnera funktionen för att uppdatera state och
// själva värdet från state.
// Använd sedan useInput i App-komponenten nedan för att spara det man
// skriver in i ett input-fält. Det man skriver in ska visas under inputfältet.

import {useState} from 'react';


function useInput(defaultValue) {
  const [value, setValue] = useState(defaultValue);
  const handleChange = (save) => {
    setValue(save.target.value);
  };

  return [value, handleChange];
}

function App() {
  const [inputValue, setNewInputValue] = useInput("");

  return (
    <div>
      <input type="text" value={inputValue} onChange={setNewInputValue} />
      <p>resultat: {inputValue}</p>
    </div>
  );
}

export default App;

