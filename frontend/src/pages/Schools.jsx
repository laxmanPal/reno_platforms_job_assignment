import SchoolCard from "../components/SchoolCard";

const Schools = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="sticky top-0 z-10 bg-white shadow-sm border-b border-blue-100">
        <div className="max-w-7xl mx-auto px-8 py-10 flex flex-col sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-4xl font-black text-gray-900 mb-2 tracking-tight drop-shadow-md">
              Schools
            </h1>
            <p className="text-lg text-gray-500 font-medium">
              Discover the right school for your child.
            </p>
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
