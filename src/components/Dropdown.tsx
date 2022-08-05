export const Dropdown = () => {
  return (
    <div
      className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
      role="menu"
    >
      <a
        href="#"
        className="block px-4 py-2 text-sm text-gray-700"
        role="menuitem"
        id="user-menu-item-0"
      >
        Your Profile
      </a>
      <a
        href="#"
        className="block px-4 py-2 text-sm text-gray-700"
        role="menuitem"
        id="user-menu-item-1"
      >
        Settings
      </a>
      <a
        href="#"
        className="block px-4 py-2 text-sm text-gray-700"
        role="menuitem"
        id="user-menu-item-2"
      >
        Sign out
      </a>
    </div>
  );
};

export const MobileMenu = () => {
  return (
    <div className="sm:hidden" id="mobile-menu">
      <div className="px-2 pt-2 pb-3 space-y-1">
        <a
          href="#"
          className="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium"
        >
          Dashboard Anjay
        </a>

        <a
          href="#"
          className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
        >
          Team
        </a>

        <a
          href="#"
          className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
        >
          Projects
        </a>

        <a
          href="#"
          className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
        >
          Calendar
        </a>
      </div>
    </div>
  );
};
