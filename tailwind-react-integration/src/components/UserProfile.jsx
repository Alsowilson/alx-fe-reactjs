import React from "react";

function UserProfile() {
  return (
    <div className="user-profile bg-gray-100 p-8 md:p-8 sm:p-4 max-w-xs md:max-w-sm mx-auto my-20 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
      
      {/* Profile Image */}
      <img
        src="https://via.placeholder.com/150"
        alt="User"
        className="rounded-full sm:w-24 sm:h-24 md:w-36 md:h-36 mx-auto object-cover transition-transform duration-300 ease-in-out hover:scale-110"
      />

      {/* Name */}
      <h1 className="text-lg md:text-xl text-blue-800 text-center my-4 hover:text-blue-500 transition-colors duration-200 cursor-pointer">
        John Doe
      </h1>

      {/* Description */}
      <p className="text-gray-600 text-sm md:text-base text-center">
        Developer at Example Co. Loves to write code and explore new technologies.
      </p>
    </div>
  );
}

export default UserProfile;
