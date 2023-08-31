"use client"

import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import { useForm, SubmitHandler, FieldValues } from 'react-hook-form'
import Spinner from '../Components/Spinner'


export default function Contact() {

  const [isSent, setIsSent] = useState<boolean>(false)
  const [isSending, setIsSending] = useState<boolean>(false)

  const { reset, register, handleSubmit, formState: { errors } } = useForm();
  
  const onSubmit: SubmitHandler<FieldValues> = () => {
    setIsSending(true)
    sendEmail()
  }

  const form = useRef<HTMLFormElement | null>(null)
  const sendEmail = () => {
    
    if (form.current) {
      const serviceID: string | undefined = process.env.NEXT_PUBLIC_EMAILJS_SERVICEID
      const templateID = 'template_e9avqw4'
      const userID = 'ax2EtnNRhWQkWQJmN'
  
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
    <section className="p-6 xl:px-24 mt-24 mb-16 flex flex-col lg:flex-row lg:justify-between space-y-6">
        <div className="space-y-1">
          <h2 className="text-lg text-pink-400">Contact</h2>
          <p>Please <span className="">feel free</span> to leave a message. I'd <span className="">love</span> to hear from you <span className="">regardless</span> of what it's about!</p>
          <p>If you have any <span className="">accessibility issues</span> with the site, please <span className="">let me know</span>.</p>
        </div>
        <form
          className="w-full max-w-xl mx-auto px-1 lg:mr-0 lg:ml-8 space-y-3"
          ref={form}
          onSubmit={handleSubmit(onSubmit)}
          >
          <div className="flex flex-wrap -mx-3">
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
                type="text"
                placeholder="What's your name?"
                {...register("user_name", {required: true, maxLength: 50})}
              />
              {errors.user_name && (
                <p className="text-pink-400 text-xs italic">Please check your name. Max length is 50 chars.</p>
              )}
            </div>
          </div>
          <div className="flex flex-wrap -mx-3">
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
                type="text"
                placeholder="What's your e-mail?"
                {...register("user_email", {required: true, pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i})}
              />
              {errors.user_email && (
                <p className="text-pink-400 text-xs italic">Please check your e-mail address.</p>
              )}
            </div>
          </div>
          <div className="flex flex-wrap -mx-3">
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
                placeholder="What's your message?"
                {...register("message", {required: true, maxLength: 200})}
              >
              </textarea>
              {errors.message && (
                <p className="text-pink-400 text-xs italic">Please check your message. Max length is 200 chars.</p>
              )}
            </div>
          </div>
          <div className="-mx-1">
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
