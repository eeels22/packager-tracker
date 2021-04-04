// NPM package
import { Link } from "react-router-dom";
import { useRecoilValue } from "recoil";

// Project files
import { parcelState } from "../state/parcelData";
import OrderDetailed from "../components/OrderDetailed";

export default function Parcel({ match }) {
  // Global state
  const parcels = useRecoilValue(parcelState);

  // Constants
  const routerID = match.params.id;
  const parcel = parcels.find((item) => item.parcel_id === routerID);

  return (
    <div id="parcel" className="container">
      <h1>Parcel details</h1>
      <div className="OrderDetailed">
        <OrderDetailed key={parcel.id} information={parcel} />
      </div>
      <Link className="back-to-list" to="/list">
        ⬅ Back to all parcels
      </Link>
    </div>
  );
}
