// eslint-disable-next-line no-unused-vars

import { useState } from 'react';
import { useEffect } from 'react';
function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      const jsonData = await response.json();
      setData(jsonData);
    };

    fetchData();
  }, []);

  return (
    <div className="App">
      <h1 className='text-4xl text-neutral-700 text-center font-semibold'>Posts</h1>
      <ul className='grid grid-cols-4 gap-4 p-4'>
        {data && data.map((post) => (
          <li key={post.id} >
            <h2 className='text-violet-600 text-2xl' >{post.title}</h2>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;


