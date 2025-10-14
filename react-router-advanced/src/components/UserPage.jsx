import { useParams } from "react-router-dom";

function UserPage() {
  const { id } = useParams();

  return (
    <div>
      <h2>User Page</h2>
      <p>Dynamic Routing implemented for user ID: {id}</p>
    </div>
  );
}

export default UserPage;
