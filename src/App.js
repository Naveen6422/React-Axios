import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [myData, setMyData] = useState([]);
  const [isError, setIsError] = useState("");

  const getMyPostData = async () => {
    try {
      const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
      setMyData(res.data);
    } catch (error) {
      setIsError(error.message);
    }
  };

  useEffect(() => {
    getMyPostData();
  }, []);

  return (
    <>
      <h2>Axios</h2>
      {isError !== "" && <h2>{isError}</h2>}
      <div class="container">
        {myData.slice(0, 9).map((post) => {
          const { body, id, title } = post;
          return (
            <div key={id} class="card">
              <div class="box">
                <div class="content">
                  <h3>{title.slice(0, 15).toUpperCase()}</h3>
                  <p>{body.slice(0, 100)}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default App;
