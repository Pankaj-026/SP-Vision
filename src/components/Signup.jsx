import React, { useState } from "react";
import { Globe, ChevronDown, ChevronUp } from "lucide-react";

const Singup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("English");

  const languages = ["English", "Japanaese"];

  return (
    <div>
      {/* Header */}
      <div className="absolute px-28 bg-gradient-to-b flex justify-between w-full items-center bg-black bg-opacity-50 z-50">
        <img
          src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
          alt="Logo"
          className="w-56"
        />

        <div className="flex">
          <div className="relative inline-block text-white">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex items-center px-4 py-2 border border-gray-500 rounded-md bg-black">
              <Globe
                size={18}
                className="mr-2"
              />
              {selectedLanguage}

              {isOpen === true ? (
                <ChevronUp
                  size={18}
                  className="ml-2"
                />
              ) : (
                <ChevronDown
                  size={18}
                  className="ml-2"
                />
              )}
            </button>
            {isOpen && (
              <ul className="absolute left-0 w-full bg-black border border-gray-500 rounded-md mt-2 shadow-lg">
                {languages.map((lang) => (
                  <li
                    key={lang}
                    onClick={() => {
                      setSelectedLanguage(lang);
                      setIsOpen(false);
                    }}
                    className="px-4 py-2 cursor-pointer hover:bg-gray-700">
                    {lang}
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Sign in */}
          <div className="text-white bg-red-600 inline-block ml-4 border px-4 py-2 rounded-md cursor-pointer hover:bg-red-700 transition">
            <a href="/login">Sign In</a>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      {/* <div className="absolute"> */}
      <div className="absolute h-[100vh] bg-black p-12 my-[94px] mx-auto right-0 left-0 text-white bg-opacity-50 z-50 flex flex-col justify-center items-center ">
        <h2 className="text-6xl font-bold mx-2 mb-7">
          Unlimited movies, TV shows and more.
        </h2>
        <p className="text-lg mx-2 mb-7">Watch anywhere. Cancel anytime.</p>
        <p className="text-gray-400 mx-2 mb-7">
          Ready to watch? Enter your email to create or restart your membership.
        </p>
        <div className="flex">
          <input
            type="email"
            placeholder="Email Address"
            className="p-4 m-2 w-8/12 bg-gray-900 text-gray-50 bg-opacity-70 border-2 rounded-md"
          />
          <button className="p-4 m-2 w-4/12 bg-red-600 rounded-md">
            Get Started
          </button>
        </div>
      </div>
      {/* </div> */}

      {/* Bg */}
      <div className="relative ">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/04ef06cc-5f81-4a8e-8db0-6430ba4af286/web/IN-en-20250224-TRIFECTA-perspective_3a9c67b5-1d1d-49be-8499-d179f6389935_small.jpg"
          alt="bg-image"
        />
      </div>
    </div>
  );
};

export default Singup;
