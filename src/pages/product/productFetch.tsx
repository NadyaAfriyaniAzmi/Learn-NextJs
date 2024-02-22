import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { productType } from "./product.type";


const ProductFetch = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [products, setProducts] = useState([]);
  const { push } = useRouter();

  // useEffect(() => {
  //   if (!isLogin) {
  //     push("/auth/login");
  //   }
  // }, []);

  useEffect(() => {
    fetch("/api/product")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.data);
      });
  }, []);
  return (
    <div className="w-screen">
      <h1 className="text-center text-[30px] font-bold">Product</h1>
      <div className="flex px-[5%]">
        {products.length > 0 ? (
          <>
          {products.map((product: productType) => (
          <div key={product.id}className="w-[25%] p-[10px] ">
            <div>
              <img src={product.image} alt={product.name} />
            </div>
            <h4 className="text-[20px] font-semibold mt-[5px]">{product.name}</h4>
            <p className="text-gray-400">{product.category}</p>
            <p className="font-bold mt-[10px]">{product.price.toLocaleString("id-ID", { style: "currency", currency: "IDR" })}</p>
            <br />
          </div>
        ))}
          </>
        ): (
          <div className="w-[25%] aspect-w-1 aspect-h-1 p-[10px]">
          <div className="w-full h-full bg-gray-500 "/>
          <div className="w-full h-[20px]  mt-[5px] bg-gray-500"/>
          <div className="w-full h-[16px] mt-[5px] bg-gray-500"/>
          <div className="w-full h-[16px] mt-[10px] bg-gray-500"/>
        </div>
        )
      }
        
        
      </div>
    </div>
  );
};

export default ProductFetch;
