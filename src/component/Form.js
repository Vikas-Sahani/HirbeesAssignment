// import PreviousMap from "postcss/lib/previous-map";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

let globalId = 1;
export default function Form(props) {
  const navigateFn = useNavigate();
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [categories, setCategories] = useState("");
  const [description, setDescription] = useState("");
  const [img, setImg] = useState("");
  // const [email, setEmail] = useState("");
  return (
    <div className="flex justify-center items-center w-full h-full bg-red-200 absolute inset-0 z-10 bg-[url('https://source.unsplash.com/1600x900/?nature,water')]">
      <form className="bg-slate-300 rounded-xl w-1/3 flex justify-center items-center flex-col">
        <label className="block my-5">
          <span className="block text-sm font-medium text-slate-700">
            Name:
          </span>
          <input
            type="text"
            className="border-black w-60 border-2 rounded-xl"
            onChange={function (e) {
              setName(e.target.value);
            }}
          />
        </label>

        <label className="block my-5">
          <span className="block text-sm font-medium text-slate-700">
            Price:
          </span>
          <input
            type="number"
            name="price"
            className="border-black border-2 w-60 rounded-xl"
            onChange={function (e) {
              setPrice(e.target.value);
            }}
          />
        </label>

        <label className="block my-5">
          <span className="block text-sm font-medium text-slate-700">
            Category:
          </span>
          <input
            type="text"
            name="category"
            className="border-black border-2 w-60 rounded-xl"
            onChange={function (e) {
              setCategories(e.target.value);
            }}
          />
        </label>

        <label className="block my-5">
          <span className="block text-sm font-medium text-slate-700">
            Description:
          </span>
          <input
            type="text"
            name="description"
            className="border-black border-2 w-60 rounded-xl"
            onChange={function (e) {
              setDescription(e.target.value);
            }}
          />
        </label>

        <label className="block my-5">
          <span className="block text-sm font-medium text-slate-700">
            Avatar(img):
          </span>
          <input
            type="text"
            name="image"
            className="border-black border-2 w-60 rounded-xl"
            onChange={function (e) {
              setImg(e.target.value);
            }}
          />
        </label>

        <label className="block my-5">
          <span className="block text-sm font-medium text-slate-700">
            DeveloperEmail:
          </span>
          <input
            type="email"
            name="email"
            className="border-black border-2 w-60 rounded-xl peer ..."
            value="vikassahani1110@gmail.com"
          />
          <p className="mt-2 invisible peer-invalid:visible text-pink-600 text-sm">
            Please provide a valid email address.
          </p>
        </label>

        <button
          onSubmit={function (e) {
            e.preventDefault();
            // POST: https://upayments-studycase-api.herokuapp.com/api/products
            fetch(
              "https://upayments-studycase-api.herokuapp.com/api/products",
              {
                method: "POST",
                mode: "cors",
                headers: new Headers({
                  "Content-Type": "application/json",
                  Authorization:
                    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InZpa2Fzc2FoYW5pMTExMEBnbWFpbC5jb20iLCJnaXRodWIiOiJodHRwczovL2dpdGh1Yi5jb20vVmlrYXMtU2FoYW5pIiwiaWF0IjoxNjYzMzE5MTk5LCJleHAiOjE2NjM3NTExOTl9.cR86G78up3Z5LT_7zZmBOTH64J2Oo7IuBM75ZWBQqmA",
                }),
                body: JSON.stringify({
                  name: name,
                  price: price,
                  category: categories,
                  description: description,
                  avatar: img,
                  createdAt: new Date(),
                  developerEmail: "nandanwar.akshita23@gmail.com",
                  updatedAt: new Date(),
                  __v: 0,
                  _id: globalId++,
                }),
              }
            )
              .then((response) => response.json())
              .then((value) => {
                console.log("post", value);
                let copyOfProductList = props.productList.slice();
                console.log(copyOfProductList);
                props.setProductList(value);
              });
            navigateFn("/");
            window.alert("Prodct Created Successfully");
          }}
          className="bg-sky-400 hover:bg-sky-700 hover:text-blue-50 rounded-full px-4 py-2 my-3"
        >
          Create Product
        </button>
      </form>
    </div>
  );
}
