import { Link } from 'react-router-dom';
import { FaSchool } from "react-icons/fa6";
import { RiAddCircleLine } from "react-icons/ri";


const Home = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center gap-8">
            <div className="shadow-xl rounded-3xl p-10 flex flex-col items-center gap-8">
                <h1 className="text-4xl font-black text-gray-900 mb-1 drop-shadow-md tracking-tight">
                    Welcome
                </h1>
                <div className="flex flex-col sm:flex-row gap-6 w-full justify-center">
                    <Link
                        to="/schools"
                        className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-semibold rounded-xl shadow-md hover:bg-blue-500 transition-all duration-300 text-lg justify-center"
                    >
                        <FaSchool className="w-6 h-6" />
                        Schools Page
                    </Link>
                    <Link
                        to="/add-school"
                        className="flex items-center gap-2 px-6 py-3 bg-pink-600 text-white font-semibold rounded-xl shadow-md hover:bg-pink-500 transition-all duration-300 text-lg justify-center"
                    >
                        <RiAddCircleLine className="w-6 h-6" />
                        Add New School
                    </Link>
                </div>
            </div>

            <footer className="text-sm text-gray-500 font-mono">
                <p>
                    Made by <a
                        href="https://laxmanpal.netlify.app/"
                        className="text-blue-600 hover:underline"
                    >
                        Laxman Pal
                    </a> for Reno Platforms
                </p>
            </footer>
        </div>
    );
}

export default Home;
