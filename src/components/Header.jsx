import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { addUser, removeUser } from "../utils/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { Menu, X } from "lucide-react";

const Header = () => {
  const user = useSelector((store) => store.user);
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const dispatch = useDispatch();

  const handleSignOut = () => {
    signOut(auth)
      .then(() => navigate("/"))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/home");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unsubscribe();
  }, []);

  return (
    <header className="text-white bg-gradient-to-b from-black to-transparent fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <div
          className="text-2xl font-bold text-amber-400 cursor-pointer"
          onClick={() => navigate("/")}>
          SP Vision
        </div>

        {user && (
          <>
            <nav className="hidden md:flex items-center space-x-6">
              <a
                href="#"
                className="hover:text-amber-400">
                Home
              </a>
              <a
                href="#"
                className="hover:text-amber-400">
                Movies
              </a>
              <a
                href="#"
                className="hover:text-amber-400">
                Series
              </a>
              <input
                type="text"
                placeholder="Search..."
                className="bg-gray-800 text-white px-3 py-1 rounded-lg focus:outline-none"
              />
              {user && (
                <div className="flex items-center space-x-2">
                  <img
                    src={user.photoURL}
                    alt="avatar"
                    className="w-8 h-8 rounded-full"
                  />
                  <span className="hidden lg:inline-block">
                    {user.displayName}
                  </span>
                  <button
                    onClick={handleSignOut}
                    className="bg-amber-500 px-3 py-1 rounded text-white ml-2 hover:bg-amber-600 cursor-pointer">
                    Sign Out
                  </button>
                </div>
              )}
            </nav>

            <div className="md:hidden">
              <button onClick={() => setMenuOpen(!menuOpen)}>
                {menuOpen ? (
                  <X className="text-white" />
                ) : (
                  <Menu className="text-white" />
                )}
              </button>
            </div>
            {menuOpen && (
              <div className="md:hidden bg-black px-4 pb-4 space-y-3">
                <a
                  href="#"
                  className="block hover:text-amber-400">
                  Home
                </a>
                <a
                  href="#"
                  className="block hover:text-amber-400">
                  Movies
                </a>
                <a
                  href="#"
                  className="block hover:text-amber-400">
                  Series
                </a>
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full bg-gray-800 text-white px-3 py-1 rounded-lg focus:outline-none"
                />
                {user && (
                  <div className="flex items-center gap-3 mt-2">
                    <img
                      src={user.photoURL}
                      alt="avatar"
                      className="w-8 h-8 rounded-full"
                    />
                    <span>{user.displayName}</span>
                    <button
                      onClick={handleSignOut}
                      className="bg-amber-500 px-3 py-1 rounded text-white ml-auto cursor-pointer">
                      Sign Out
                    </button>
                  </div>
                )}
              </div>
            )}
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
