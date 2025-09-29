import React from "react";
import { UserProps } from "@/interfaces";

const UserCard: React.FC<{ user: UserProps }> = ({ user }) => {
  return (
    <div className="border rounded-lg p-6 shadow hover:shadow-xl transition duration-200">
      <h2 className="text-2xl font-semibold text-blue-700 mb-2">{user.name}</h2>
      <p className="text-gray-600 italic mb-1">@{user.username}</p>
      <p className="text-gray-800 mb-1">📧 {user.email}</p>
      <p className="text-gray-800 mb-1">📞 {user.phone}</p>
      <p className="text-gray-800 mb-1">🌐 {user.website}</p>

      <div className="mt-4">
        <h3 className="font-bold text-lg">🏠 Address</h3>
        <p className="text-gray-600">
          {user.address.suite}, {user.address.street}, {user.address.city}
        </p>
        <p className="text-gray-500">Zip: {user.address.zipcode}</p>
      </div>

      <div className="mt-4">
        <h3 className="font-bold text-lg">🏢 Company</h3>
        <p className="text-gray-700">{user.company.name}</p>
        <p className="text-sm text-gray-500">
          &quot;{user.company.catchPhrase}&quot;
        </p>
      </div>
    </div>
  );
};

export default UserCard;
