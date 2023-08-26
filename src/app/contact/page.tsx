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
    <section className="flex flex-col lg:flex-row p-6 space-y-6">
        <div className="space-y-1">
          <h2 className="text-lg text-pink-400">Contact</h2>
          <p>Please <span className="text-neutral-500">feel free</span> to leave a message. I'd <span className="text-neutral-500">love</span> to hear from you <span className="text-neutral-500">regardless</span> of what it's about!</p>
          <p>If you have any <span className="text-neutral-500">accessibility issues</span> with the site, please <span className="text-neutral-500">let me know</span>.</p>
        </div>
        <form
          className="w-full max-w-xl mx-auto px-1 lg:mr-0 lg:ml-8"
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
                className="text-neutral-500 block tracking-wide text-xs font-bold mb-2"
                htmlFor="user_name"
              >
                Name
              </label>
              <input
                className="autofocus appearance-none block w-full bg-neutral-200 text-neutral-900 border border-gray-200 rounded py-2 px-3 leading-tight focus:outline-none focus:bg-white"
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
                className="text-neutral-500 block tracking-wide text-xs font-bold mb-2"
                htmlFor="user_email"
              >
                e-mail
              </label>
              <input
                className="appearance-none block w-full bg-neutral-200 text-neutral-900 border border-gray-200 rounded py-2 px-3 leading-tight focus:outline-none focus:bg-white"
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
                className="text-neutral-500 block tracking-wide text-xs font-bold mb-2"
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                className="no-resize appearance-none block w-full h-40 bg-neutral-200 text-neutral-900 border border-gray-200 rounded py-2 px-3 leading-tight focus:outline-none focus:bg-white"
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
    </section>
  )
}
