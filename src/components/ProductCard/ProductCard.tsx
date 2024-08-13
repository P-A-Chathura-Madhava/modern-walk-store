import Image from "next/image";
import img01 from "@/assets/sample.png";

function ProductCard() {
  // const { title, image, price, description, color } = props;
  const title = "Mens Cotton Jacket";
  const price = 2000;
  const description = "Mens Cotton Jacket";

  return (
    <div>
      <div className="h-[200px] w-[160px] rounded-2xl shadow-black shadow-3xl cursor-pointer hover:shadow-4xl transition-all duration-300 pt-2">
        <div className="px-4">
          <div className="overflow-hidden">
            <h2 className="text-center text-xs font-bold">{title}</h2>
          </div>
          <div className="flex justify-center py-2">
            <Image
              className="h-[80px] w-[80px]"
              src={img01}
              alt="Product Image"
            />
          </div>
        </div>
        <div className={`bg-mens-color rounded-2xl h-[80px] px-6`}>
          <h2 className="text-center text-blue-600 text-md font-bold pb-2 pt-2">
            Rs. {price}
          </h2>
          <p className="text-center text-xs truncate">{description}</p>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
