import { useParams } from "react-router-dom";

function UserDetails() {
  const { id } = useParams();
  return <h3>Viewing details for user ID: {id}</h3>;
}
export default UserDetails;
