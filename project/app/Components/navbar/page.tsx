import React from "react";

const Navbar = () => {
  return (
    <div className="navbar bg-[#051124] pr-8">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl text-slate-200">MyApp</a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a className=" text-slate-200 font-bold">Link</a>
          </li>
          <li>
            <details>
              <summary className=" text-slate-200 font-bold">Parent</summary>
              <ul className="p-2 rounded-t-none bg-[#0a1423]">
                <li>
                  <a className=" text-slate-200">Link 1</a>
                </li>
                <li>
                  <a className=" text-slate-200">Link 2</a>
                </li>
              </ul>
            </details>
          </li>
        </ul>
      </div>
      <div className=" dropdown  dropdown-end">
        <div
          tabIndex={0}
          role="button"
          className="btn btn-ghost btn-circle avatar"
        >
          <div className="w-10 rounded-full">
            <img
              alt="Tailwind CSS Navbar component"
              src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
            />
          </div>
        </div>
        <ul
          tabIndex={0}
          className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
        >
          <li>
            <a className="justify-between">
              Profile
              <span className=" badge">New</span>
            </a>
          </li>
          <li>
            <a>Settings</a>
          </li>
          <li>
            <a>Logout</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
