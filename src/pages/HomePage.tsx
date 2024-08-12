import MensProductCard from "@/components/MensProductCard/MensProductCard"

function HomePage() {
  return (
    <div>
      <h1 className="text-4xl font-bold text-center mt-2">Moden Walk</h1>
      <div className="bg-slate-200 h-[4px] mt-2"></div>
      <div className="container mx-auto mt-4">
      <h3 className="font-bold">FLash Sale</h3>
      <div className="mt-4">
        <MensProductCard />
      </div>
      </div>
    </div>
  )
}

export default HomePage