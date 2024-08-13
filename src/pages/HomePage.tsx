import CategoriesCard from "@/components/CategoriesCard/CategoriesCard";
import ProductCard from "@/components/ProductCard/ProductCard";

function HomePage() {
  return (
    <div>
      {/* <h1 className="text-4xl font-bold text-center mt-2">Moden Walk</h1> */}
      
      <div className="container mx-auto mt-4 px-44">
        <h3 className="font-bold">Flash Sale</h3>
        <div className="flex justify-between items-center py-6">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </div>
      <div className="container mx-auto mb-6 px-44"> 
        <h3 className="font-bold mt-2">Categories</h3>   
      <div className="flex items-center py-6 gap-6">
        <CategoriesCard />        
        <CategoriesCard />
        <CategoriesCard />
      </div>
      </div>
    </div>
  );
}

export default HomePage;
