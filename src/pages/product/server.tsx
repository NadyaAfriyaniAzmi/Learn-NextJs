import Image from "next/image";
import { productType } from "./product.type"

const Productpage = (props:{ products: productType[]}) => {
    const {products} = props;
    return(
        <div className="w-screen">
      <h1 className="text-center text-[30px] font-bold">Product</h1>
      <div className="flex px-[5%]">
      {products.length > 0 ? (
          <>
          {products.map((product: productType) => (
          <div key={product.id}className="w-[25%] p-[10px] ">
            <div>
              <Image src={product.image} alt={product.name} />
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
    )
}

export default Productpage

// di panggil setiap melakukan request
export async function getServerSideProps(){
    // fetch data
    const res = await fetch('http://localhost:3000/api/product')
    const response = await res.json()

    return {
        props: {
        products: response.data}
    }
}
