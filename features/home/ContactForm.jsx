const ContactForm = () => {
  return (
    <form action="">
      <div className="flex justify-between gap-6 ">
        <input type="text" placeholder="enter your name " className="w-1/2 input-contact py-6 px-10" />
        <input type="text" placeholder="enter your email address " className="w-1/2 input-contact py-6 px-10"/>
      </div>
      <input type="text" placeholder="type your message..." className="text-start input-contact w-full my-4 min-h-72 "/>
      <button className="m-6 bg-purple-heart py-4 px-8 text-2xl text-white rounded-xl">Sumbit</button>
    </form>
  )
}
export default ContactForm