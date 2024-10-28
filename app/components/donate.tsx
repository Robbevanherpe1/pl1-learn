"use client";
import { useState } from 'react';

export default function DonateButton() {
  const [showModal, setShowModal] = useState(false);
  const [amount, setAmount] = useState("");

  const handleDonateClick = () => {
    setShowModal(true); // Show the modal when the "Donate" button is clicked
  };

  const handleConfirmDonation = () => {
    const donationAmount = parseFloat(amount);

    if (!amount || isNaN(donationAmount) || donationAmount <= 0) {
      alert("Please enter a valid amount");
      return;
    }

    // Redirect to PayPal.me with the specified amount
    window.location.href = `https://paypal.me/pl1learn/${donationAmount}?currency=EUR`; // Replace "yourusername" with your PayPal.me username
  };

  const closeModal = () => {
    setShowModal(false);
    setAmount(""); // Reset amount when closing
  };

  return (
    <div>
      {/* Donate Button */}
      <button
        onClick={handleDonateClick}
        className="fixed top-4 right-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded shadow-lg transition duration-200"
      >
        Donate
      </button>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 z-50">
          <div className="bg-white p-6 rounded shadow-lg w-80 text-center">
            <h2 className="text-xl font-semibold mb-4 text-gray-500">Enter Donation Amount (€)</h2>
            <p className="text  mb-4 text-gray-500">I really appreciate all the help :))</p>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="Amount"
              className="p-2 border rounded w-full mb-4 text-gray-500"
            />
            <button
              onClick={handleConfirmDonation}
              className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded w-full mb-2"
            >
              Confirm Donation
            </button>
            <button
              onClick={closeModal}
              className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded w-full"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
}