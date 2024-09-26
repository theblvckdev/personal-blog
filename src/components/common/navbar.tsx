import { Search } from "lucide-react";
import { Input } from "../ui/input";
import Logo from "./logo";

const Navbar = () => {
  return (
    <>
      <header className="py-3 w-full">
        <nav className="max-w-6xl w-full mx-auto flex items-center justify-between">
          <div>
            <Logo />
          </div>

          <div className="relative">
            <Input
              type="text"
              className="border border-gray-200 focus-visible:ring-0 focus:border-blue-500 duration-300 ease-in focus-visible:ring-offset-0 w-full outline-none shadow-sm rounded-md pr-10"
              placeholder="Search by blog title..."
            />

            <button className="absolute right-0 top-[50%] -translate-y-[50%] mr-3 outline-none">
              <Search size={20} strokeWidth={1} />
            </button>
          </div>

          <div className="flex flex-row items-center gap-3">
            <a href="#" className="text-sm hover:text-blue-500">
              My Blogs
            </a>
            <a href="#" className="text-sm hover:text-blue-500">
              My Account
            </a>
            <a href="#" className="text-sm hover:text-blue-500">
              Sign Out
            </a>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
