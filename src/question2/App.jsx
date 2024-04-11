// 2. Visa lista med Posts (Inlägg) via API-Anrop (3p)
// Hämta post-data från https://jsonplaceholder.typicode.com/posts.
// Komponenten ska visa titlarna på de första 10 posts.
// Varje titel ska ha en knapp märkt "Visa detaljer".
// När denna knapp klickas på, ska inläggets body visas under sin titel.

import { useEffect, useState } from "react";

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function getPosts() {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const data = await response.json();

      setPosts(data.slice(0, 10));
    }
    getPosts();
  }, []);

  return (
    <div className="flex flex-col m-auto gap-2">
      {posts.map((post) => { 
        return <button onClick={() => console.log(post.body)}>{post.title} (Visa detaljer i konsolen)</button>;
      })}
    </div>
  );
}

export default App;


