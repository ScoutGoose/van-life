import { useOutletContext } from "react-router-dom";
export default function HostVanPricing() {
  const { van } = useOutletContext();
  return (
    <div className="pricing">
      <h2>
        ${van.price.toFixed(2)}
        <span>/day</span>
      </h2>
    </div>
  );
}
