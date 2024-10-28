import React, { useState } from 'react';
import Modal from './Modal/Modal.jsx';

const Overlay = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [modalText, setModalText] = useState('');

  const openModalWithText = (text) => {
    setModalText(text);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setModalText('');
  };

  return (
    <div className="relative">
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black"></div>

      {/* Content on top of the overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-start p-4 space-y-4 text-white">
        {/* Heading */}
        <h1 className="text-3xl font-bold mt-4">Overlay Heading</h1>

        {/* Button Container */}
        <div className="flex space-x-4 mt-4">
          <button onClick={() => openModalWithText('Content for Button 1')} className="px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded">
            Button 1
          </button>
          <button onClick={() => openModalWithText('Content for Button 2')} className="px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded">
            Button 2
          </button>
          <button onClick={() => openModalWithText('Content for Button 3')} className="px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded">
            Button 3
          </button>
          <button onClick={() => openModalWithText('Content for Button 4')} className="px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded">
            Button 4
          </button>
          <button onClick={() => openModalWithText('Content for Button 5')} className="px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded">
            Button 5
          </button>
        </div>
      </div>

      {/* Modal Component */}
      {isModalOpen && <Modal text={modalText} onClose={closeModal} />}
    </div>
  );
};

export default Overlay;
