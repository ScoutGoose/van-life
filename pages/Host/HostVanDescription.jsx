import { useOutletContext } from "react-router-dom";
export default function HostVanDescription() {
  const { van } = useOutletContext();
  return (
    <>
      <div className="description">
        <p>
          <span className="detail">Name: </span>
          {van.name}
        </p>
        <p>
          <span className="detail">Category: </span>
          {van.type[0].toUpperCase() + van.type.slice(1)}
        </p>
        <p>
          <span className="detail">Description: </span>
          {van.description}
        </p>
      </div>
    </>
  );
}
