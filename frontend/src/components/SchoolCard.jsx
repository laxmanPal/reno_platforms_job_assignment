import { PiCity } from "react-icons/pi";
import { HiLocationMarker } from "react-icons/hi";

export default function SchoolCard({ image, name, address, city }) {
    return (
        <div className="relative  md:rounded-3xl rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden group border border-blue-100">
            {/* Image Section */}
            <div className="relative h-48 overflow-hidden">
                <img
                    src={image}
                    alt={name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
            </div>
            {/* Content Section */}
            <div className="p-6">
                <h3 className="text-2xl font-black text-gray-800 mb-2 tracking-tight group-hover:text-blue-600 transition-colors duration-200 drop-shadow-md">
                    {name}
                </h3>
                <div className="flex items-center text-gray-500 mb-1">
                    <HiLocationMarker className="w-5 h-5 mr-2 text-red-400" />
                    <span className="text-base font-medium truncate">{address}</span>
                </div>
                <div className="flex items-center text-gray-500">
                    <PiCity className="w-5 h-5 mr-2 text-blue-400" />
                    <span className="text-base font-medium">{city}</span>
                </div>
            </div>

        </div>
    );
}
