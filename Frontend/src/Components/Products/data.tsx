import React, { useEffect, useState } from "react";
import data from "./db.json";
import Navofout from "./navofout";
import SimpleAccordion from "./Sas";
import Db from "./db.json";
import { Link } from "react-router-dom";
import { Star } from "@mui/icons-material";
import StarBorderIcon from "@mui/icons-material/StarBorder";

interface Todo {
  title: string;
  id: number;
  _id: string;
  completed: boolean;
  image: string;
  price: number;
  thumbnail: string;
  rating: string;
}

function Data() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [error, setError] = useState({});

  function SortD(val: number) {
    console.log(todos);
    let data = todos.sort((a: Todo, b: Todo) => {
      if (val == 1) {
        return a.price - b.price;
      } else {
        return b.price - a.price;
      }
    });

    setTodos([...data]);
  }

  useEffect(() => {
    fetch("http://localhost:8070/Best")
      .then((res) =>
        res.json().then((response) => setTodos(response.slice(0, 13)))
      )
      .catch((err) => setError(err));
  }, []);

  return (
    <div>
      <>
        <div className="filterbestbuy">
          <div>
            <SimpleAccordion />
          </div>

          <div>
            <div>
              <Navofout sortd={SortD} />
            </div>
            <div className="buybestpro">
              {todos.map((todo: Todo) => (
                <Link to={`/ProductDetailPage${todo._id}`}>
                  <div className="singleproduct">
                    <img src={todo.thumbnail} alt="" width="100%" />
                    <h4>{todo.title}</h4>
                    <p>{`$  ${todo.price}`}</p>
                    <p>{`* ${todo.rating}`}</p>
                    <StarBorderIcon > </StarBorderIcon>
                    <StarBorderIcon> </StarBorderIcon>
                    <StarBorderIcon> </StarBorderIcon>
                    <StarBorderIcon> </StarBorderIcon>
                    <br />
                    <button>Add</button>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </>
    </div>
  );
}

export default Data;
