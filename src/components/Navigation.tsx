import React from "react";
import { NavLink } from "react-router-dom";
import { auth } from "../config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";

const Navigation: React.FC = () => {
  const [user] = useAuthState(auth);

  const signUserOut = async () => {
    await signOut(auth);
  };

  return (
    <div className="bg-blue-400">
      <div className="mx-auto max-w-7xl px-4 py-3 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-[40px]">
          <div className="text-white flex gap-5">
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "underline" : "")}
            >
              Home
            </NavLink>
            {!user ? (
              <NavLink
                to="/login"
                className={({ isActive }) => (isActive ? "underline" : "")}
              >
                Login
              </NavLink>
            ) : (
              <NavLink
                to="/createpost"
                className={({ isActive }) => (isActive ? "underline" : "")}
              >
                Create Post
              </NavLink>
            )}
          </div>
          <div className="flex gap-3 items-center text-white">
            {user && (
              <>
                <p>{user?.displayName}</p>
                <img
                  src={user?.photoURL || ""}
                  alt="user"
                  width="40"
                  height="40"
                  className="rounded-4xl"
                />
                <button onClick={signUserOut} className="cursor-pointer">
                  Signout
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
