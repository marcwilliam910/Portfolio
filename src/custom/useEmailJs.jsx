import React, {useState} from "react";
import emailjs from "@emailjs/browser";

const serviceKey = import.meta.env.VITE_SERVICE_KEY;
const templateKey = import.meta.env.VITE_TEMPLATE_KEY;
const publicKey = import.meta.env.VITE_PUBLIC_KEY;

export default function useEmailJs(form) {
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  function sendEmail(e) {
    e.preventDefault();
    setLoading(true);
    emailjs
      .sendForm(serviceKey, templateKey, form.current, {
        publicKey,
      })
      .then(
        () => {
          setSuccess(true);
          setError(false);
        },
        () => {
          setError(true);
          setSuccess(false);
        }
      )
      .finally(() => {
        form.current.reset();
        setLoading(false);
      });
  }

  return {success, error, loading, sendEmail};
}
