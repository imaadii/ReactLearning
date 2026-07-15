import { useState, useEffect } from "react";

const FetchDataEffect = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fecthData = async function () {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts",
      );

      const data = await response.json();

      setData(data);
    };

    fecthData();

  }, []);

  return (
    <div>
      <ul>
        {data.map((post) => (
          <section key={post.id}>
            <li>{post.title}</li>
            <li>BODY --- {post.body}</li>
          </section>
        ))}
      </ul>
    </div>
  );
};

export default FetchDataEffect;
