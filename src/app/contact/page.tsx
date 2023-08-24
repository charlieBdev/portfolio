"use client"

import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com'
// import { useForm } from 'react-hook-form'


interface FormData {
  user_name: string
  user_email: string
  message: string
}

export default function Contact() {

  const form = useRef<HTMLFormElement | null>(null)
  const [isSendError, setIsSendError] = useState<boolean>(false)
  const [isSuccess, setIsSuccess] = useState<boolean>(false)

  const [user_name, setUser_name] = useState<string>('')
  const [user_email, setUser_email] = useState<string>('')
  const [message, setMessage] = useState<string>('')

  const sendEmail = () => {
    
    const serviceID = 'service_9r37mup'
    const templateID = 'template_e9avqw4'
    const userID = 'ax2EtnNRhWQkWQJmN'

    // console.log('Form data:', new FormData(form.current));

    // make sure to make first an env variable and hidden
    if (form.current && user_name && user_email && message) {
      emailjs.sendForm(serviceID, templateID, form.current, userID)
      .then((result) => {
          console.log('Email sent: ', result.text)
          setIsSuccess(true)
          setUser_name('')
          setUser_email('')
          setMessage('')
      })
      .catch((error) => {
          console.log('Email error: ', error.text)
          setIsSendError(true)
      })
    }
  }

  return (
    <main className="flex flex-col bg-neutral-950 h-screen">
        <div className="p-6 space-y-1">
          <h2 className="text-lg text-pink-400">Contact</h2>
        </div>
        <form
          className="w-5/6 max-w-lg ml-auto mr-auto mt-3 mb-3"
          ref={form}
          onSubmit={sendEmail}
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
                name="user_name"
                type="text"
                placeholder="What's your name?"
                value={user_name}
                onChange={(e) => setUser_name(e.target.value)}
              />
              {user_name.length < 1 && (
                <p className="text-pink-400 text-xs italic">Please enter your name.</p>
              )}
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
                name="user_email"
                type="email"
                placeholder="What's your e-mail?"
                value={user_email}
                onChange={(e) => setUser_email(e.target.value)}
              />
              {user_email.length < 1 && (
                <p className="text-pink-400 text-xs italic">Please check your e-mail address.</p>
              )}
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
                name="message"
                placeholder="What's your message?"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              >
              </textarea>
              {message.length < 1 && (
                <p className="text-pink-400 text-xs italic">Please enter a message.</p>
              )}
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
              {isSendError ? (
                <p className="text-pink-400 text-xs italic">Oops! Please try again.</p>
              ) : isSuccess ? (
                <p className="text-green-500 text-xs italic">Message sent!</p>
              ) : null
            }
            </div>
          </div>
        </form>
    </main>
  )
}
