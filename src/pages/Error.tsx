import React from 'react';
import { Link } from 'react-router-dom';

const Error: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-purple-600 text-white">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <p className="text-2xl mb-8">Page Not Found</p>
      <Link to="/signup" className="text-lg underline hover:text-gray-200">
        Go back Home
      </Link>
    </div>
  );
};

export default Error;
