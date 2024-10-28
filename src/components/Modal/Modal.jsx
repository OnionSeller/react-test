import React from 'react';

const Modal = ({ text, onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      {/* Modal Background */}
      <div className="absolute inset-0 bg-black opacity-50" onClick={onClose}></div>

      {/* Modal Content */}
      <div className="bg-white p-6 rounded-lg shadow-lg z-10 max-w-md w-full mx-4">
        <p className="text-gray-800 text-lg">{text}</p>
        <button onClick={onClose} className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
