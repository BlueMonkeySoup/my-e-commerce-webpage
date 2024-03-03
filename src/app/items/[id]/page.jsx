import Image from "next/image";
import ButtonPrice from "../../components/ButtonPrice";

async function getData(id) {
  const res = await fetch(`http://localhost:3000/api/products/${id}`);
  // console.log(id)
  if (!res.ok) {
    throw new Error("Failed to fetch");
  }
  return res.json();
}

export async function generateMetadata({ params, searchParams }, parent) {
  const id = params.id;

  const product = await fetch(`http://localhost:3000/api/products/${id}`).then(
    (res) => res.json()
  );

  return {
    title: product.title,
    desc: product.desc,
  };
}

const Item = async ({ params }) => {
  // console.log(params)
  const product = await getData(params.id);

  // console.log(product)

  return (
    <div className=" p-10  bg-red-50">
      <div className="flex items-center lg:my-28 justify-center  ">
        {/* Text container */}
        <div className="flex lg:w-[300px] xl:min-w-[200px] md:min-w-[100px] lg:min-w-[100px] xl:ml-100px md:ml-[30px] "></div>

        <div className="flex lg:h-[300] xl:min-h-[200] lg:min-h-[200] xl:h-[300]  lg:w-[300] md:w-[300] md:min-w-[300] max-md:ml-5 rounded-lg shadow-lg">
          <Image
            src={product.img}
            alt=""
            width="300"
            height="300"
            className="rounded"
          />
        </div>

        {/* Middle container */}
        <div className="w-[100px] "></div>

        {/* Item description */}
        <div className="flex-1 items-start justify-start w-[30rem]  ">
          <div className="flex-1 ml-5 justify-start">
            <h1 className=" font-bold text-6xl mr-4 align-top mb-[50px] ">
              {product.title}
            </h1>
            <p className="mr-10 mb-10 ">{product.desc}</p>
            <p className="mr-10 text-3xl mb-10 p-1 text-red-500 rounded-lg">
              ${product.price}
            </p>
          </div>
          <div key={product.id} className="flex items-center">
            <div className="ml-5">
              <ButtonPrice product={product} showInput={true} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item;
