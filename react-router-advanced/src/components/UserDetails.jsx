import { useParams } from "react-router-dom";

function UserDetails() {
  const { id } = useParams();
  return (
    <div>
      <h3>User Details Page</h3>
      {/* ✅ Explicitly reference the dynamic parameter */}
      <p>Dynamic route parameter: {id}</p>
    </div>
  );
}

export default UserDetails;
