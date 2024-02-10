import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { fetcher } from "@/lib/swr/fetcher";
import useSWR from "swr";


type productType = {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
};
const ProductPage = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [products, setProducts] = useState([]);
  const { push } = useRouter();

  //uses swr
  const { data, error, isLoading } = useSWR("/api/product", fetcher);

  // useEffect(() => {
  //   if (!isLogin) {
  //     push("/auth/login");
  //   }
  // }, []);

  // useEffect(() => {
  //   fetch("/api/product")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setProducts(data.data);
  //     });
  // }, []);
  return (
    <div className="w-screen">
      <h1 className="text-center text-[30px] font-bold">Product</h1>
      <div className="flex px-[5%]">
        {isLoading ? (
          <div className="w-[25%] p-[10px]">
            <div className="w-full h-[100px] bg-gray-500 " />
            <div className="w-full h-[20px]  mt-[5px] bg-gray-500" />
            <div className="w-full h-[16px] mt-[5px] bg-gray-500" />
            <div className="w-full h-[16px] mt-[10px] bg-gray-500" />
          </div>
        ) : (
          <>
            {data.data.map((product: productType) => (
              <div key={product.id} className="w-[25%] p-[10px] ">
                <div>
                  <img src={product.image} alt={product.name} />
                </div>
                <h4 className="text-[20px] font-semibold mt-[5px]">
                  {product.name}
                </h4>
                <p className="text-gray-400">{product.category}</p>
                <p className="font-bold mt-[10px]">
                  {product.price.toLocaleString("id-ID", {
                    style: "currency",
                    currency: "IDR",
                  })}
                </p>
                <br />
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default ProductPage;