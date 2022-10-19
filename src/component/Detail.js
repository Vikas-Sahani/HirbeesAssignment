import { Link } from "react-router-dom";
import { productArr } from "../Product/productArr";
export default function Detail(props) {
  return (
    <div>
      <h1 className="m-11 text-6xl">Detail of Product</h1>

      <div>
        {/* When Api is working fine */}
        {/* {props.productList.map((product) => { */}
        {/* without api */}
        {productArr.map((product) => {
          return (
            <Link
              to="/"
              key={product.id}
              className="flex justify-around rounded-3xl border-8 border-red-900
              m-11 p-10"
            >
              <div className="w-1/5">
                <img
                  src={product.avatar}
                  alt={product.name}
                  className="w-full h-hull"
                />
              </div>
              <div className="w-2/5">
                <h1 className="m-5 text-3xl">{product.name}</h1>
                <h2 className="m-5 text-2xl">₹ {product.price}</h2>
                <h3 className="m-5 text-xl">{product.category}</h3>
                <h3 className="m-5 text-xl">{product.description}</h3>
                <h3 className="m-5 text-xl">{product.createdAt}</h3>
                <h3 className="m-5 text-xl">{product.updatedAt}</h3>
                <h3 className="m-5 text-xl">{product.developerEmail}</h3>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
