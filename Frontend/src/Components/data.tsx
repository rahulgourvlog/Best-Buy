import React, { useEffect, useState } from "react";
import data from "./db.json";
import Navofout from "./navofout";
import SimpleAccordion from "./Sas";
import Db from "./db.json";
import { Link } from "react-router-dom";
import { Star } from "@mui/icons-material";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import "./Data.css";

interface Todo {
  title: string;
  id: number;
  _id: string;
  completed: boolean;
  image: string;
  price: number;
  thumbnail: string;
  rating: string;
  discountPercentage: number;
  stock: number;
}

function Data() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [error, setError] = useState({});
  const [filtertodo, setFilter] = useState<Todo[]>([]);

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
  const handleFilter = (isStock: boolean) => {
    if (isStock) {
      setFilter(todos);

      var filterdata = todos.filter((a) => {
        if (a.stock < 50) {
          return a;
        }
      });
      setTodos([...filterdata]);
    } else {
      setTodos(filtertodo);
    }
  };
  useEffect(() => {
    fetch("http://localhost:8070/Best")
      .then((res) =>
        res.json().then((response) => setTodos(response.slice(0, 13)))
      )
      .catch((err) => setError(err));
  }, []);
  console.log(todos);
  return (
    <div>
      <>
        <div className="filterbestbuy">
          <div>
            <SimpleAccordion />
          </div>

          <div>
            <div>
              <Navofout sortd={SortD} handleFilter={handleFilter} />
            </div>
            <div className="buybestpro">
              {todos.map((todo: Todo) => (
                <Link
                  to={`/ProductDetailPage${todo._id}`}
                  style={{ textDecoration: "none" }}
                >
                  <ul className="singleproduct">
                    <li>
                      <img src={todo.thumbnail} alt="" width="100%" />
                    </li>
                    <li>{todo.title}</li>
                    <li>
                      <li className="tododrating">{`${todo.rating}        (${todo.stock}  Reviews)`}</li>
                    </li>
                    <li className="jsonprice">
                      {`$  ${todo.price} `}
                      <span className="jsondiscount">{`
                       save  $ ${todo.discountPercentage}
                       `}</span>
                    </li>
                    <li style={{ fontSize: "12px" }}>✔️Available only</li>
                    <li style={{ fontSize: "12px" }}>🛒Market Place Seller</li>

                    <br />
                  </ul>
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
