import React, { useState } from 'react';

const ImageSearch = ({ searchText }) => {
  const [text, setText] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    searchText(text);
  };

  return (
    <div className="max-w-sm rounded overflow-hidden my-10 mx-auto">
      <form onSubmit={onSubmit} className="w-full max-w-sm">
        <div className="flex items-center space-x-2">
          <input
            onChange={(e) => setText(e.target.value)}
            className="appearance-none border border-gray-300 rounded-md w-full text-gray-700 py-2 px-3 leading-tight focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
            type="text"
            placeholder="Search Image Term..."
          />
          <button
            className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 text-white font-medium py-2 px-4 rounded-md h-5-xl"
            type="submit"
          >
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

export default ImageSearch;

