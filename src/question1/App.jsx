// 1. En lista med filmer (3p)
// Sidan ska visa en lista med filmer
// Användaren ska kunna lägga till nya filmer i listan genom att skriva in filmens namn
// i ett inputfält och sedan klicka på en "Lägg till"-knapp.
// Varje film i listan ska ha en ta bort knapp som tar bort den filmen ur listan

import { useState } from 'react'

let count = 0;

function App() {
  const [movies, setMovies] = useState([]);
  const [input, setInput] = useState("");

  function handleAdd() {
    const newMovie = {
      id: count++,
      text: input,
    };

    setMovies([...movies, newMovie]);
  }

  function handleRemove(id) {
    const filteredMovies = movies.filter((movie) => movie.id !== id);

    setMovies(filteredMovies);
  }

  return (
    <main>
      <input type="text" onChange={(e) => setInput(e.target.value)} />
      <button onClick={handleAdd}>Lägg till film</button>

      {movies.map((movie) => {
        return (
          <div>
            <p>{movie.text}</p>
            <button onClick={() => handleRemove(movie.id)}>Ta bort film</button>
          </div>
          );
      })}
    </main>
  );
}

export default App;
