import React, { useState } from "react";
import { UserData, UserModalProps } from "@/interfaces";

const UserModal: React.FC<UserModalProps> = ({ onClose, onSubmit }) => {
  const [formData, setFormData] = useState<UserData>({
    name: "",
    username: "",
    email: "",
    address: {
      street: "",
      suite: "",
      city: "",
      zipcode: "",
      geo: {
        lat: "",
        lng: "",
      },
    },
    phone: "",
    website: "",
    company: {
      name: "",
      catchPhrase: "",
      bs: "",
    },
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    // Handle nested address + company updates
    if (name.startsWith("address.")) {
      const [, key] = name.split(".");
      setFormData((prev) => ({
        ...prev,
        address: {
          ...prev.address,
          [key]: value,
          geo: { ...prev.address.geo },
        },
      }));
    } else if (name.startsWith("company.")) {
      const [, key] = name.split(".");
      setFormData((prev) => ({
        ...prev,
        company: {
          ...prev.company,
          [key]: value,
        },
      }));
    } else if (name.startsWith("geo.")) {
      const [, key] = name.split(".");
      setFormData((prev) => ({
        ...prev,
        address: {
          ...prev.address,
          geo: {
            ...prev.address.geo,
            [key]: value,
          },
        },
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-2xl p-6">
        <h2 className="text-2xl font-bold mb-4">Add New User</h2>

        <form
          onSubmit={handleSubmit}
          className="space-y-4 max-h-[70vh] overflow-y-auto pr-2">
          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              className="border p-2 rounded w-full"
              required
            />
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={formData.username}
              onChange={handleChange}
              className="border p-2 rounded w-full"
              required
            />
          </div>

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="border p-2 rounded w-full"
            required
          />

          <input
            type="text"
            name="phone"
            placeholder="Phone"
            value={formData.phone}
            onChange={handleChange}
            className="border p-2 rounded w-full"
          />

          <input
            type="text"
            name="website"
            placeholder="Website"
            value={formData.website}
            onChange={handleChange}
            className="border p-2 rounded w-full"
          />

          {/* Address */}
          <h3 className="font-semibold mt-2">Address</h3>
          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              name="address.street"
              placeholder="Street"
              value={formData.address.street}
              onChange={handleChange}
              className="border p-2 rounded w-full"
            />
            <input
              type="text"
              name="address.suite"
              placeholder="Suite"
              value={formData.address.suite}
              onChange={handleChange}
              className="border p-2 rounded w-full"
            />
            <input
              type="text"
              name="address.city"
              placeholder="City"
              value={formData.address.city}
              onChange={handleChange}
              className="border p-2 rounded w-full"
            />
            <input
              type="text"
              name="address.zipcode"
              placeholder="Zipcode"
              value={formData.address.zipcode}
              onChange={handleChange}
              className="border p-2 rounded w-full"
            />
          </div>

          {/* Geo */}
          <h3 className="font-semibold mt-2">Geo Location</h3>
          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              name="geo.lat"
              placeholder="Latitude"
              value={formData.address.geo.lat}
              onChange={handleChange}
              className="border p-2 rounded w-full"
            />
            <input
              type="text"
              name="geo.lng"
              placeholder="Longitude"
              value={formData.address.geo.lng}
              onChange={handleChange}
              className="border p-2 rounded w-full"
            />
          </div>

          {/* Company */}
          <h3 className="font-semibold mt-2">Company</h3>
          <input
            type="text"
            name="company.name"
            placeholder="Company Name"
            value={formData.company.name}
            onChange={handleChange}
            className="border p-2 rounded w-full"
          />
          <input
            type="text"
            name="company.catchPhrase"
            placeholder="Catch Phrase"
            value={formData.company.catchPhrase}
            onChange={handleChange}
            className="border p-2 rounded w-full"
          />
          <input
            type="text"
            name="company.bs"
            placeholder="Business Specialty"
            value={formData.company.bs}
            onChange={handleChange}
            className="border p-2 rounded w-full"
          />

          <div className="flex justify-end space-x-3 mt-6">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded bg-gray-300 hover:bg-gray-400">
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 rounded bg-blue-500 text-white hover:bg-blue-600">
              Save User
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserModal;
