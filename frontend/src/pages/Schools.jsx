import Button from "@mui/material/Button";
import SchoolCard from "../components/SchoolCard";
import { Link } from "react-router-dom";
import { RiAddCircleLine } from "react-icons/ri";
import { IoMdHome } from "react-icons/io";
import { useEffect, useState } from "react";
const API_URL = import.meta.env.VITE_BACKEND_URL;

const Schools = () => {
  const [schools, setSchools] = useState([])

  useEffect(() => {
    fetchSchools()
  }, [])

  const fetchSchools = async () => {
    try {
      const response = await fetch(`${API_URL}/api/schools`);
      if (!response.ok) throw new Error("Failed to fetch schools");
      const data = await response.json();
      setSchools(data);
    } catch (error) {
      console.error("Error fetching schools:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="sticky top-0 z-10 bg-white shadow-sm border-b border-blue-100">
        <div className=" mx-auto px-4 md:px-8 py-3  md:py-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
          <div>
            <h1 className="text-4xl font-black text-gray-900 mb-2 tracking-tight drop-shadow-md">
              Schools
            </h1>
            <p className="text-lg text-gray-500 font-medium">
              Discover the right school for your child.
            </p>
          </div>
          <div className="flex gap-4">
            <Link
              to="/add-school"
              className="flex items-center gap-2 px-3 md:px-6 py-3 bg-pink-600 text-white font-semibold rounded-xl shadow-md hover:bg-pink-500 transition-all duration-300 md:text-lg justify-center"
            >
              <RiAddCircleLine className="w-6 h-6" />
              Add New School
            </Link>
            <Link
              to="/"
              className="flex items-center gap-2 px-3 md:px-6 py-3 bg-green-600 text-white font-semibold rounded-xl shadow-md hover:bg-green-500 transition-all duration-300 md:text-lg justify-center"
            >
              <IoMdHome className="w-6 h-6" />
              Home
            </Link>
          </div>
        </div>
      </div>

      {/* Cards Grid */}
      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {
            schools.length > 0 ? (
              schools.map((school) => (
                <SchoolCard key={school.id} image={school.image}
                  city={school.city}
                  name={school.name}
                  address={school.address} />
              ))
            ) : (
              <p className="text-gray-500">No schools available.</p>
            )
          }

        </div>
      </div>
    </div>
  );
};

export default Schools;
