import emailjs from 'emailjs-com';
const Mailer = () => {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_37efnhn',
        'template_805pwlb',
        e.target,
        'aUPCK6xGHAKeeBqgD'
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  }
  return (
    <div>
      <h1>Contact Form</h1>
      <form onSubmit={sendEmail}>
        <label>name</label>
        <input type="text" name="name" />

        <label>Email</label>
        <input type="email" name="user_email" />

        <label>Message</label>
        <textarea name="message" rows="4" />

        <input type="submit" value="Send" />
      </form>
    </div>
  );
};

export default Mailer;
