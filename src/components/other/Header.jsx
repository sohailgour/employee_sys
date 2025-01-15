import React from 'react';
import { LogOut } from 'lucide-react';

const Header = (props) => {
  const logoutUser = () => {
    localStorage.setItem('loggedINUser', '');
    props.changeUser('');
  };

  return (
    <div className="bg-gradient-to-r from-gray-900 to-gray-800 shadow-lg">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center px-6 py-8">
          {/* Greeting Section */}
          <div className="space-y-1">
            <h2 className="text-gray-400 font-medium">
              Hello,
            </h2>
            <div className="flex items-center space-x-2">
              <h1 className="text-3xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                username
              </h1>
              <span className="text-3xl animate-pulse">🔥</span>
            </div>
          </div>

          {/* Logout Button */}
          <button
            onClick={logoutUser}
            className="flex items-center space-x-2 px-6 py-3 bg-red-600 hover:bg-red-700 text-white rounded-lg font-medium transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-gray-900"
          >
            <span>Log Out</span>
            <LogOut className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;