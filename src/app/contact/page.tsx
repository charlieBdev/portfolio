"use client"

import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com'

// rhf
import { useForm, SubmitHandler, FieldValues } from 'react-hook-form';
import Spinner from '../Components/Spinner';
// import Link from 'next/link';

// rhf
// interface IFormInput {
//   user_name: string
//   user_email: string
//   message: string
// }


export default function Contact() {

  const [isSent, setIsSent] = useState<boolean>(false)
  const [isSending, setIsSending] = useState<boolean>(false)

  // rhf
  const { reset, register, handleSubmit, formState: { errors } } = useForm();
  // console.log(useForm(), '<<< useForm')
  // can I take out data?
  const onSubmit: SubmitHandler<FieldValues> = () => {
    // console.log(data, '<<< data')
    setIsSending(true)
    sendEmail()
  }
  // remove log and comment!
  console.log(errors, '<<< errors')

  // emailjs
  const form = useRef<HTMLFormElement | null>(null)
  console.dir(form.current, '<<< form.current')
  const sendEmail = () => {
    
    // e.preventDefault();
    if (form.current) {
      const serviceID: string | undefined = process.env.NEXT_PUBLIC_EMAILJS_SERVICEID
      const templateID = 'template_e9avqw4'
      const userID = 'ax2EtnNRhWQkWQJmN'
  
      // console.log('Form data:', new FormData(form.current));
  
      // make sure to make first an env variable and hidden
      emailjs.sendForm(serviceID!, templateID, form.current, userID)
      .then((result) => {
        console.log('Email sent: ', result.text)
        setIsSent(true)
        reset()
      })
      .catch((error) => {
        console.log('Email error: ', error.text)
      })
      .finally(() => {
        setIsSending(false)
      })
    }
  }

  return (
    <main className="flex flex-col">
        <div className="p-6 space-y-1">
          <h2 className="text-lg text-pink-400">Contact</h2>
          <p>Please <span className="text-neutral-400">feel free</span> to leave a message. I'd <span className="text-neutral-400">love</span> to hear from you <span className="text-neutral-400">regardless</span> of what it's about!</p>
          <p>If you have any <span className="text-neutral-400">accessibility issues</span> with the site, please <span className="text-neutral-400">let me know</span>.</p>
          {/* <p>I used <Link href="https://www.emailjs.com/" target="_blank" className="underline decoration-purple-300 text-purple-300">email.js</Link> to send this form to my email address without a backend and <Link href="/https://react-hook-form.com/" target="_blank" className="underline decoration-purple-300 text-purple-300">React Hook Form</Link> for form validation.</p> */}
        </div>
        <form
          className="w-full p-6 max-w-lg ml-auto mr-auto"
          // old
          ref={form}
          // new
          // ref={(element) => form.current = element}
          // emailjs was sendEmail
          onSubmit={handleSubmit(onSubmit)}
          >
          <div className="flex flex-wrap -mx-3 mb-5">
            <div className="w-full px-2">
              <label
                className="text-neutral-300 block tracking-wide text-xs font-bold mb-2"
                htmlFor="user_name"
              >
                Name
              </label>
              <input
                className="autofocus appearance-none block w-full bg-neutral-300 text-neutral-900 border border-gray-200 rounded py-3 px-4 mb-2 leading-tight focus:outline-none focus:bg-white"
                id="user_name"
                // emailjs
                // name="user_name"
                type="text"
                placeholder="What's your name?"
                // rhf
                {...register("user_name", {required: true, maxLength: 50})}
              />
              {errors.user_name && (
                <p className="text-pink-400 text-xs italic">Please check your name. Max length is 50 chars.</p>
              )}
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-5">
            <div className="w-full px-2">
              <label
                className="text-neutral-300 block tracking-wide text-xs font-bold mb-2"
                htmlFor="user_email"
              >
                e-mail
              </label>
              <input
                className="appearance-none block w-full bg-neutral-300 text-neutral-900 border border-gray-200 rounded py-3 px-4 mb-2 leading-tight focus:outline-none focus:bg-white"
                id="user_email"
                // emailjs
                // name="user_email"
                type="text"
                placeholder="What's your e-mail?"
                // rhf /^\S+@\S+$/i
                {...register("user_email", {required: true, pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i})}
              />
              {errors.user_email && (
                <p className="text-pink-400 text-xs italic">Please check your e-mail address.</p>
              )}
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-5">
            <div className="w-full px-2">
              <label
                className="text-neutral-300 block tracking-wide text-xs font-bold mb-2"
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                className="no-resize appearance-none block w-full bg-neutral-300 text-neutral-900 border border-gray-200 rounded py-3 px-4 mb-2 leading-tight focus:outline-none focus:bg-white h-48 resize-none"
                id="message"
                // emailjs
                // name="message"
                placeholder="What's your message?"
                // rhf
                {...register("message", {required: true, maxLength: 200})}
              >
              </textarea>
              {errors.message && (
                <p className="text-pink-400 text-xs italic">Please check your message. Max length is 200 chars.</p>
              )}
            </div>
          </div>
          <div className="mb-5 -mx-1">
            <button
              className="text-center mx-auto w-1/4 bg-gradient-to-r from-cyan-300 via-cyan-400 to-cyan-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-500 font-medium py-2 px-4 mb-2 rounded"
              type="submit"
            >
              {isSending ? <Spinner /> : "Send"}
            </button>
            {errors.user_name || errors.user_email || errors.message ? (
                <p className="text-pink-400 text-xs italic">Oops! Please try again.</p>
              ) : isSent ? (
                <p className="text-green-500 text-xs italic">Message sent! Thanks and I'll be in touch as soon as possible.</p>
              ) : null
            }
          </div>
        </form>
    </main>
  )
}
