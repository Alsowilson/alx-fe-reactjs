import { useParams } from "react-router-dom";

function UserDetails() {
  const { id } = useParams();
  return (
    <div>
      <h3>Dynamic route: Viewing user {id}</h3>
    </div>
  );
}
export default UserDetails;

