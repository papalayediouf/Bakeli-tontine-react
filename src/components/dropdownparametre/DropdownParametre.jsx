import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { Link } from "react-router-dom";

export default function DropdownParametre() {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-md  px-3 py-2 text-sm font-semibold text-[white] shadow-sm  ring-inset ">
          Parametre
          <ChevronDownIcon
            aria-hidden="true"
            className="-mr-1 h-5 w-5 text-gray-400"
          />
        </MenuButton>
      </div>

      <MenuItems
        transition
        className="absolute right- z-10 mt-2 w-56 origin-top-right rounded-md  shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
      >
        <div className="py-1">
          <MenuItem>
            <span className="px-4 py-2 hover:bg-gray-200">
              <Link to="/parametregeneraux">Parametre generaux</Link>
            </span>
          </MenuItem>
          <MenuItem>
            <p className="px-4 py-2 hover:bg-gray-200">
              <Link to="/mesutilisateur">Utilisateur</Link>
            </p>
          </MenuItem>
          <MenuItem>
            <p className="px-4 py-2 hover:bg-gray-200">
              <Link to="/archives">Archives</Link>
            </p>
          </MenuItem>
          <form action="#" method="POST">
            <MenuItem>
              <p className="px-4 py-2 hover:bg-gray-200">
                <Link to="/bloques">Bloques</Link>
              </p>
            </MenuItem>
          </form>
        </div>
      </MenuItems>
    </Menu>
  );
}
