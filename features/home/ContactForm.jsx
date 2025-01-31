"use client";
import { useState } from 'react';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');
  const [isLoading, setIsLoading] = useState(false); // Loading state

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true); // Set loading to true when submitting

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, message }),
      });

      const result = await res.json();
      if (res.status === 200) {
        setStatus('Email sent successfully!');
        setName('');
        setEmail('');
        setMessage('');
      } else {
        setStatus('Error sending email');
      }
    } catch (error) {
      console.error('Error:', error);
      setStatus('Error sending email');
    } finally {
      setIsLoading(false); // Reset loading state
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Name and Email Inputs */}
      <div className="flex flex-col md:flex-row justify-between gap-4 md:gap-6 text-white">
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full md:w-1/2 input-contact py-4 md:py-6 px-6 md:px-10 text-2xl"
          required
        />
        <input
          type="email"
          placeholder="Enter your email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full md:w-1/2 input-contact py-4 md:py-6 px-6 md:px-10 text-2xl"
          required
        />
      </div>

      {/* Message Input */}
      <textarea
        placeholder="Type your message..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="text-start input-contact w-full my-4 min-h-48 md:min-h-72 p-6 md:p-10 text-2xl"
        required
      />

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isLoading} // Disable button when loading
        className="m-4 md:m-6 bg-purple-heart py-3 md:py-4 px-6 md:px-8 text-xl md:text-2xl text-white rounded-xl hover:bg-purple-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isLoading ? 'Sending...' : 'Submit'}
      </button>

      {/* Status Message */}
      {status && (
        <p
          className={`mt-4 text-center text-2xl ${
            status.includes('successfully') ? 'text-green-500' : 'text-red-500'
          }`}
        >
          {status}
        </p>
      )}
    </form>
  );
};

export default ContactForm;