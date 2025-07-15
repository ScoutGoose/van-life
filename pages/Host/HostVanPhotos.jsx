import { useOutletContext } from "react-router-dom";
export default function HostVanPhotos() {
  const { van } = useOutletContext();
  return (
    <div className="photos">
      {/* MAP IF MULTIPLE PHOTOS */}
      <div className="photo-container">
        <img src={van.imageUrl} alt={`${van.name} photo`} />
      </div>
    </div>
  );
}
