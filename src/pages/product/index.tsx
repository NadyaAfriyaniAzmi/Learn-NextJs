import { useEffect, useState } from "react";
import { useRouter } from "next/router";

type productType = {
    id: number;
  name: string;
  price: number;
  size: string;
};
const ProductPage = () => {
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
  return <div>ProductPage
    {products.map((product: productType) => (
      <div key={product.id}>{product.name}</div>
    ))}
  </div>;
};

export default ProductPage;
