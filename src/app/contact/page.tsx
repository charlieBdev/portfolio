"use client"

import React, { useRef } from 'react'
import emailjs from 'emailjs-com'

// emailjs.init('your_user_id');

export default function Contact() {

  const form = useRef<HTMLFormElement | null>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (form.current) {
      // console.log('Form data:', new FormData(form.current));

      // make sure to make first an env variable and hidden
      emailjs.sendForm('service_9r37mup', 'template_e9avqw4', form.current, 'ax2EtnNRhWQkWQJmN')
        .then((result) => {
            console.log(result.text)
        }, (error) => {
            console.log(error.text)
        })
    }
  }

  return (
    <main className="flex flex-col h-screen justify-center">
        <form
          className="w-5/6 max-w-lg ml-auto mr-auto mt-3 mb-3"
          ref={form}
          onSubmit={sendEmail}
          >
          <div className="flex flex-wrap -mx-3 mb-5">
            <div className="w-full px-2">
              <label className="block tracking-wide text-neutral-300 text-xs font-bold mb-2" htmlFor="user_name">
                Name
              </label>
              <input className="autofocus appearance-none block w-full bg-neutral-300 text-neutral-900 border border-gray-200 rounded py-3 px-4 mb-2 leading-tight focus:outline-none focus:bg-white" name="user_name" type="text" placeholder="What's your name?" />
              <p className="text-pink-400 text-xs italic">Please enter your name.</p>
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-5">
            <div className="w-full px-2">
              <label className="block tracking-wide text-neutral-300 text-xs font-bold mb-2" htmlFor="user_email">
                e-mail
              </label>
              <input className="appearance-none block w-full bg-neutral-300 text-neutral-900 border border-gray-200 rounded py-3 px-4 mb-2 leading-tight focus:outline-none focus:bg-white" name="user_email" type="email" placeholder="What's your e-mail?" />
              <p className="text-pink-400 text-xs italic">Please check your e-mail address.</p>
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-5">
            <div className="w-full px-2">
              <label className="block tracking-wide text-neutral-300 text-xs font-bold mb-2" htmlFor="message">
                Message
              </label>
              <textarea className=" no-resize appearance-none block w-full bg-neutral-300 text-neutral-900 border border-gray-200 rounded py-3 px-4 mb-2 leading-tight focus:outline-none focus:bg-white h-48 resize-none" name="message" placeholder="What's your message?"></textarea>
              <p className="text-pink-400 text-xs italic">Please enter a message.</p>
            </div>
          </div>
          <div className="md:flex md:items-center">
            <div className="md:w-1/3">
              <button className="shadow bg-cyan-400 hover:bg-cyan-600 focus:shadow-outline focus:outline-none text-neutral-100 font-bold py-2 px-4 rounded" type="submit">Send</button>
            </div>
            <div className="md:w-2/3"></div>
          </div>
        </form>
    </main>
  )
}