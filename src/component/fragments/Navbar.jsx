import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="bg-black text-special-bg2 sm:w-72 w-36 h-screen px-7 py-12 flex flex-col justify-between">
            <div>
                <Link to = "">
                <div className="text-white flex justify-center mb-10">Logo</div>
                <div className="flex bg-primary text-white px-4 py-3 rounded-md">
                    <div className="text-white mx-auto sm:max-0">A</div>
                    <div className="ms-3 hidden sm:block">Overview</div>
                </div>
                </Link>
                <Link to = "/balance">
                <div className="flex hover:bg-special-bg3 px-4 py-3 rounded-md">
                    <div className="text-white mx-auto sm:max-0">B</div>
                    <div className="ms-3 hidden sm:block">
                        Balances
                    </div>
                </div>
                </Link>
                <div className="flex hover:bg-special-bg3 px-4 py-3 rounded-md">
                    <div className="text-white mx-auto sm:max-0">C</div>
                    <div className="ms-3 hidden sm:block">Transaction
                    </div>
                </div>
            </div>
            <div>
                <div className="flex bg-special-bg3 px-4 py-3 rounded-md">
                    <div className="text-white mx-auto sm:max-0">D</div>
                    <div className="ms-3 hidden sm:block">Logout</div>
                </div>
                <div className="border-b my-10 border-b-special-bg"></div>
                <div className="flex justify-between">
                    <div className="text-white mx-auto sm:max-0">foto</div>
                    <div className="hidden sm:block">
                        Username
                        <br />
                        View Profile
                    </div>
                    <div className="hidden sm:block">icon</div>
                </div>
            </div>
        </nav>
    )
};

export default Navbar;