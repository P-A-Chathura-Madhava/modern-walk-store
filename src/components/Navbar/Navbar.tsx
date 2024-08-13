import Image from "next/image"
import companyLogo from "@/assets/company-logo.png";

function Navbar() {
  return (
    <div className="flex items-center py-2">
      <div className="flex items-center">
      <Image src={companyLogo} alt="company-logo" height={60} width={60} />
      <h2 className="text-2xl font-bold">MODERN WALK</h2>
      </div>
      <div>
      <button>Home</button>
      </div>
    </div>
  )
}

export default Navbar