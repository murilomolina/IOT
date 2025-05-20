'use client';
import React from 'react';
import { useState } from 'react';

export default function App3() {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <div>
      <button
        onClick={() => setShowPopup(true)}
        className="px-4 py-2 bg-blue-600 text-white rounded"
      >
        Show Pop
      </button>
      {showPopup && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40"
          onClick={() => setShowPopup(false)}
        >
          <div
            className="bg-white p-6 rounded shadow"
            onClick={e => e.stopPropagation()}
          >
            <p>Hello</p>
            <button
              onClick={() => setShowPopup(false)}
              className="mt-4 px-3 py-1 bg-blue-500 text-white rounded"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}