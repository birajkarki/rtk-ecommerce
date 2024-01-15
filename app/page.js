import HeaderEcommerce from "@/components/header/HeaderEcommerce/HeaderEcommerce";
import HeaderMain from "@/components/header/HeaderMain/HeaderMain";
import MainHero from "@/components/herosection/MainHero";
import ProductSection from "@/components/productSection/ProductSection";
import { useAuth } from "@/context/AuthContext";

export default function Home() {
  return (
    <>
      <div>
        {" "}
        <MainHero />
        <ProductSection />
      </div>
    </>
  );
}
