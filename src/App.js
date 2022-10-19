import { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Detail from "./component/Detail";
import Home from "./component/Home";
import Form from "./component/Form";
import { productArr } from "./Product/productArr";

function App() {
  const [inputVal, setInputVal] = useState("");
  const [productList, setProductList] = useState([]);
  const [categoryList, setCategoryList] = useState([]);
  const navigateFn = useNavigate();
  // useEffect(() => {
  //   //Product Get API => https://upayments-studycase-api.herokuapp.com/api/products
  //   // fetch("https://upayments-studycase-api.herokuapp.com/api/products", {
  //   fetch("http://localhost:3500/product")
  //     .then((response) => response.json())
  //     .then((list) => {
  //       return setProductList(list);
  //     });

  //   //Product Get API(id) =>  https://upayments-studycase-api.herokuapp.com/api/products/{id}

  //   // Categori GET API => https://upayments-studycase-api.herokuapp.com/api/categories/
  //   //   fetch("https://upayments-studycase-api.herokuapp.com/api/categories/", {
  //   //     method: "GET",
  //   //     mode: "cors",
  //   //     headers: new Headers({
  //   //       "Content-Type": "application/json",
  //   //       Authorization:
  //   //         "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im5hbmRhbndhci5ha3NoaXRhMjNAZ21hbC5jb20iLCJnaXRodWIiOiJodHRwczovL2dpdGh1Yi5jb20vQWtzaGl0YU5hbmRhbndhciIsImlhdCI6MTY2Mzc3NTg3OSwiZXhwIjoxNjY0MjA3ODc5fQ.8yk7N9hi42xzDxHANd19iR7nOXRwMwWlq8kVakJIykM",
  //   //       Host: "upayments-studycase-api.herokuapp.com",
  //   //     }),
  //   //   })
  //   //     .then((response) => response.json())
  //   //     .then((list) => {
  //   //       // console.log(list.categories);
  //   //       return setCategoryList(list.categories);
  //   //     });

  //   //   // Categories API GET =>  https://upayments-studycase-api.herokuapp.com/api/categories/
  // }, []);
  // console.log(productList);
  // console.log(categoryList);

  // setProductList(productArr);

  return (
    <div className=" border-indigo-500">
      <div className="flex justify-around items-center text-3xl bg-blue-700 h-28">
        <div className="w-20">
          <img
            className="w-full h-full"
            alt="HireBee"
            src="data:image/jpeg;base64,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"
          />
        </div>
        <input
          type="text"
          placeholder="Search Categories..."
          value={inputVal}
          onInput={function (e) {
            setInputVal(e.target.value);
            setProductList(
              productList.filter((product) =>
                product.category.includes(inputVal)
              )
            );
          }}
          className="py-2 px-4 focus:outline-none focus:ring-2 rounded-lg"
        />

        <button
          onClick={function () {
            navigateFn("/FormForCreatingProduct");
          }}
          className="py-2 px-4 bg-blue-500 text-white font-semibold rounded-2xl shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
        >
          Create Product
        </button>
      </div>
      <Routes>
        <Route
          path="/"
          element={
            <Home
              productList={productList}
              categoryList={categoryList}
              setInputVal={setInputVal}
            />
          }
        />
        {`${productArr.map((product) => {
          return <Route path={product.name} element={<Detail product />} />;
        })}`}

        {/* when api is working fine         */}
        <Route path="detail" element={<Detail productList={productList} />} />

        <Route
          path="FormForCreatingProduct"
          element={
            <Form
              setProductList={setProductList}
              productList={productList}
              setCategoryList={setCategoryList}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
