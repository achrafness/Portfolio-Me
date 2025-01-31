const ContactForm = () => {
  return (
    <form action="">
      {/* Name and Email Inputs */}
      <div className="flex flex-col md:flex-row justify-between gap-4 md:gap-6">
        <input
          type="text"
          placeholder="Enter your name"
          className="w-full md:w-1/2 input-contact py-4 md:py-6 px-6 md:px-10"
        />
        <input
          type="email"
          placeholder="Enter your email address"
          className="w-full md:w-1/2 input-contact py-4 md:py-6 px-6 md:px-10"
        />
      </div>

      {/* Message Input */}
      <textarea
        placeholder="Type your message..."
        className="text-start input-contact w-full my-4 min-h-48 md:min-h-72 p-6 md:p-10"
      />

      {/* Submit Button */}
      <button className="m-4 md:m-6 bg-purple-heart py-3 md:py-4 px-6 md:px-8 text-xl md:text-2xl text-white rounded-xl hover:bg-purple-700 transition-colors">
        Submit
      </button>
    </form>
  );
};

export default ContactForm; 