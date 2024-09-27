import { Bell, Search, Sheet } from "lucide-react";
import { Input } from "../ui/input";
import Logo from "./logo";
import { Button } from "../ui/button";
import {
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";

const Navbar = () => {
  return (
    <>
      <header className="py-3 w-full">
        <nav className="max-w-6xl w-full mx-auto flex items-center justify-between">
          <div>
            <Logo />
          </div>

          <div className="flex flex-row items-center gap-4">
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
              <Sheet>
                <SheetTrigger asChild>
                  <Button className="rounded-full p-0 h-8 w-8 ring-1 ring-gray-200 bg-gray-100 text-gray-900 hover:bg-gray-50">
                    <Bell strokeWidth={0.75} size={18} />
                  </Button>
                </SheetTrigger>
                <SheetContent>
                  <SheetHeader>
                    <SheetTitle>Are you absolutely sure?</SheetTitle>
                    <SheetDescription>
                      This action cannot be undone. This will permanently delete
                      your account and remove your data from our servers.
                    </SheetDescription>
                  </SheetHeader>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
