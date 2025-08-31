import Button from "@mui/material/Button";
import SchoolCard from "../components/SchoolCard";
import { Link } from "react-router-dom";
import { RiAddCircleLine } from "react-icons/ri";
import { IoMdHome } from "react-icons/io";

const Schools = () => {
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
          <SchoolCard
            image="https://uniformapp.in/admin_area/school_images/La_Martiniere_College_Lucknow_image1_7.jpeg"
            city="Lucknow"
            name="La Martiniere College"
            address="Hazratganj"
          />
          <SchoolCard
            image="https://uniformapp.in/admin_area/school_images/La_Martiniere_College_Lucknow_image1_7.jpeg"
            city="Lucknow"
            name="La Martiniere College"
            address="Hazratganj"
          />
          <SchoolCard
            image="https://uniformapp.in/admin_area/school_images/La_Martiniere_College_Lucknow_image1_7.jpeg"
            city="Lucknow"
            name="La Martiniere College"
            address="Hazratganj"
          />
          <SchoolCard
            image="https://uniformapp.in/admin_area/school_images/La_Martiniere_College_Lucknow_image1_7.jpeg"
            city="Lucknow"
            name="La Martiniere College"
            address="Hazratganj"
          />
          <SchoolCard
            image="https://uniformapp.in/admin_area/school_images/La_Martiniere_College_Lucknow_image1_7.jpeg"
            city="Lucknow"
            name="La Martiniere College"
            address="Hazratganj"
          />
          <SchoolCard
            image="https://uniformapp.in/admin_area/school_images/La_Martiniere_College_Lucknow_image1_7.jpeg"
            city="Lucknow"
            name="La Martiniere College"
            address="Hazratganj"
          />
        </div>
      </div>
    </div>
  );
};

export default Schools;
