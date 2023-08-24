"use client"

import React, { useRef } from 'react';
import emailjs from 'emailjs-com'

// rhf
import { useForm } from 'react-hook-form';

// interface FormData {
//   user_name: string
//   user_email: string
//   message: string
// }


export default function Contact() {

  // rhf
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = (data) => {
    sendEmail(data)
  }
  console.log(errors)

  // emailjs
  const form = useRef<HTMLFormElement | null>(null)

  const sendEmail = () => {
    
    const serviceID = 'service_9r37mup'
    const templateID = 'template_e9avqw4'
    const userID = 'ax2EtnNRhWQkWQJmN'

    // console.log('Form data:', new FormData(form.current));

    // make sure to make first an env variable and hidden
    emailjs.sendForm(serviceID, templateID, form.current, userID)
    .then((result) => {
        console.log('Email sent: ', result.text)
    })
    .catch((error) => {
        console.log('Email error: ', error.text)
    })
  }

  return (
    <main className="flex flex-col bg-neutral-950 h-screen">
        <div className="p-6 space-y-1">
          <h2 className="text-lg text-pink-400">Contact</h2>
        </div>
        <form
          className="w-5/6 max-w-lg ml-auto mr-auto mt-3 mb-3"
          ref={form}
          // emailjs was sendEmail
          onSubmit={handleSubmit(onSubmit)}
          >
          <div className="flex flex-wrap -mx-3 mb-5">
            <div className="w-full px-2">
              <label
                className="block tracking-wide text-xs font-bold mb-2"
                htmlFor="user_name"
              >
                Name
              </label>
              <input
                className="autofocus appearance-none block w-full bg-neutral-300 text-neutral-900 border border-gray-200 rounded py-3 px-4 mb-2 leading-tight focus:outline-none focus:bg-white"
                id="user_name"
                // emailjs
                name="user_name"
                type="text"
                placeholder="What's your name?"
                // rhf
                {...register("user_name", {required: true, maxLength: 50})}
              />
              {/* {user_name.length < 1 && (
                <p className="text-pink-400 text-xs italic">Please enter your name.</p>
              )} */}
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-5">
            <div className="w-full px-2">
              <label
                className="block tracking-wide text-xs font-bold mb-2"
                htmlFor="user_email"
              >
                e-mail
              </label>
              <input
                className="appearance-none block w-full bg-neutral-300 text-neutral-900 border border-gray-200 rounded py-3 px-4 mb-2 leading-tight focus:outline-none focus:bg-white"
                id="user_email"
                // emailjs
                name="user_email"
                type="text"
                placeholder="What's your e-mail?"
                // rhf
                {...register("user_email", {required: true, pattern: /^\S+@\S+$/i})}
              />
              {/* {user_email.length < 1 && (
                <p className="text-pink-400 text-xs italic">Please check your e-mail address.</p>
              )} */}
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-5">
            <div className="w-full px-2">
              <label
                className="block tracking-wide text-xs font-bold mb-2"
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                className=" no-resize appearance-none block w-full bg-neutral-300 text-neutral-900 border border-gray-200 rounded py-3 px-4 mb-2 leading-tight focus:outline-none focus:bg-white h-48 resize-none"
                id="message"
                // emailjs
                name="message"
                placeholder="What's your message?"
                // rhf
                {...register("message", {required: true, maxLength: 200})}
              >
              </textarea>
              {/* {message.length < 1 && (
                <p className="text-pink-400 text-xs italic">Please enter a message.</p>
              )} */}
            </div>
          </div>
          <div className="md:flex md:items-center -mx-3 mb-5">
            <div className="md:w-1/3 px-2">
              <button
                className="shadow bg-cyan-400 hover:bg-cyan-600 focus:shadow-outline focus:outline-none text-neutral-100 font-bold py-2 px-4 mb-2 rounded"
                type="submit"
              >
                Send
              </button>
              {/* {isSendError ? (
                  <p className="text-pink-400 text-xs italic">Oops! Please try again.</p>
                ) : isSuccess ? (
                  <p className="text-green-500 text-xs italic">Message sent!</p>
                ) : null
              } */}
            </div>
          </div>
        </form>
    </main>
  )
}
