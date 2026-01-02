import ProductCard from "./productCard";

export default function OnSaleNow() {
  return (
    <div>
      <h1>On Sale Now</h1>

      <ProductCard
        name="MacBook Air"
        image="https://tse1.mm.bing.net/th/id/OIP.uxnHlNOryMw24GsBEqz10AHaFj?w=1024&h=768&rs=1&pid=ImgDetMain&o=7&rm=3"
        price="$999"
      />

      <ProductCard
        name="iPhone"
        image="https://tse2.mm.bing.net/th/id/OIP.ettt6vf1TptDWvRHDMJIsQAAAA?rs=1&pid=ImgDetMain&o=7&rm=3"
        price="$799"
      />

      <ProductCard
        name="Tablet"
        image="https://i5.walmartimages.com/asr/643ebe69-dde4-412a-aa8e-0d16d4c0fc26_1.d11370ee4efe2a51d015c14eb0cce553.jpeg"
        price="$899"
      />
    </div>
  );
}
