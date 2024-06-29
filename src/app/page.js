import HeroBanner from "./Components/HeroBanner";
import ProductCard from "./Components/ProductCard";
import Wrapper from "./Components/Wrapper";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col p-1">
      <HeroBanner />
      <Wrapper>
        <section className="mx-auto text-center my-6 py-4">
          <div className="text-[28px] md:text-[34px] mb-5 font-semibold leading-tight">
                Cushioning for Your Miles
            </div>
            <div className="text-md md:text-xl md:w-8/12 mx-auto text-center">
                A lightweight Nike ZoomX midsole is combined with
                increased stack heights to help provide cushioning
                during extended stretches of running.
            </div>
        </section>
        <section id="product" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-6 py-4 px-1 md:px-0">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </section>
      </Wrapper>
    </main>
  );
}
