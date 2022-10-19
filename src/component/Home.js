import { Link } from "react-router-dom";
import { productArr } from "../Product/productArr";
import { categoryArr } from "../Product/productArr";

export default function Home(props) {
  return (
    <div className="">
      <div
        id="category"
        className="flex flex-col items-center bg-orange-400 text-orange-100"
      >
        <h1 className="text-4xl m-5 text-center">Categories</h1>
        <div className="flex w-full justify-around flex-wrap">
          {/* when Api is working */}
          {/* {props.categoryList.map((category) => {
            return (
              <button
                onClick={function (e) {
                  props.setInputVal(e.target.innerText);
                }}
                key={category.id}
                className="w-40 text-2xl rounded-3xl my-11 text-black bg-yellow-50"
              >
                {category.name}
              </button>
            );
          })} */}

          {/* withot api */}
          {categoryArr.map((category) => {
            return (
              <button
                onClick={function (e) {
                  props.setInputVal(e.target.innerText);
                }}
                key={category.id}
                className="w-40 text-2xl rounded-3xl my-11 text-black bg-yellow-50"
              >
                {category.name}
              </button>
            );
          })}
        </div>
      </div>
      <div id="product" className="">
        <h1 className="text-5xl p-5">Products</h1>

        <div className="flex flex-wrap items-baseline justify-around">
          {/* when Api is working */}
          {/* {props.productList.map((product) => {
            return (
              <Link
                to="detail"
                key={product.id}
                className="border-black rounded-2xl border-2 m-12"
              >
                <div>
                  <div className="h-28 m-8 flex">
                    <img
                      src={product.avatar}
                      alt={product.name}
                      className="w-full h-full"
                    />
                  </div>
                  <h3 className="text-center">{product.name}</h3>
                </div>
              </Link>
            );
          })} */}

          {/* without api */}
          {productArr.map((product) => {
            return (
              <Link
                // to={product.name}
                to={`detail#${product.name}`}
                key={product.id}
                className="border-black rounded-2xl border-2 m-12"
              >
                <div>
                  <div className="h-28 m-8 flex">
                    <img
                      src={product.avatar}
                      alt={product.name}
                      className="w-full h-full"
                    />
                  </div>
                  <h3 className="text-center">{product.name}</h3>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
