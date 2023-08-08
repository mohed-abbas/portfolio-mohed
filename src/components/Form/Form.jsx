import React, { useRef, useEffect } from "react";
import Button from "../reusable/button";
import Title from "../reusable/Title";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Aos from "aos";
import "aos/dist/aos.css";
import "./Form.css";

const Form = () => {
  useEffect(() => {
    Aos.init({ duration: 1500 });

    emailjs.init('y7J_RYfwWqsFc8GQL')
  }, []);
  const form = useRef();
  const notify = () => (toast.success("Message sent successfully"));

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_2zdprjr",
        "template_kqlgo6u",
        form.current,
        "y7J_RYfwWqsFc8GQL"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
    notify();
  };

  return (
    <div id="contact">
      <Title title="Contactez Moi" />
      <div>
        <form ref={form} onSubmit={sendEmail} className="form">
          <div className="name-email">
            <input
              className="form-box"
              type="name"
              placeholder="Votre Nom/Prénom"
              name="name"
              data-aos="fade-right"
              data-aos-once="true"
              required
            />
            <input
              className="form-box"
              type="email"
              placeholder="Votre Email"
              name="email"
              data-aos="fade-left"
              data-aos-once="true"
              required
            />
          </div>
          <div className="text-area">
            <textarea
              className="form-box"
              name="message"
              placeholder="Votre Message"
              cols="30"
              rows="10"
              data-aos="fade-up"
              data-aos-once="true"
              required
            />
          </div>
          <div>
            <Button classes="btn-round" text="Envoyer" />
          </div>
          <ToastContainer />
        </form>
      </div>
    </div>
  );
};

export default Form;
