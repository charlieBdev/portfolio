"use client"

import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import { useForm, SubmitHandler, FieldValues } from 'react-hook-form'
import Spinner from '../Components/Spinner'


export default function Contact() {

  const [name, setName] = useState("")
  const [msg, setMsg] = useState("")

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
    <section className="p-6 xl:px-24 mt-24 flex flex-col lg:flex-row xl:flex-col xl:justify-start lg:justify-between xl:mx-auto space-y-6 min-h-screen">
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
              <div className="flex justify-between text-neutral-500 tracking-wide text-xs mb-2">
                <label
                  className="font-bold"
                  htmlFor="user_name"
                >
                  Name
                </label>
                <p className={name.length > 50 ? 'text-pink-400' : ''}>{name.length}/{50 - name.length}</p>
              </div>
              
              <input
                className="autofocus appearance-none block w-full bg-neutral-200 text-neutral-900 border border-gray-200 rounded py-2 px-3 leading-tight focus:outline-none focus:bg-white"
                id="user_name"
                type="text"
                placeholder="What's your name?"
                {...register("user_name", {required: true, maxLength: 50})}
                value={name}
                onChange={e => setName(e.target.value)}
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
              <div className="flex justify-between text-neutral-500 tracking-wide text-xs mb-2">
                <label
                  className="text-neutral-500 block tracking-wide text-xs font-bold"
                  htmlFor="message"
                >
                  Message
                </label>
                <p className={msg.length > 200 ? 'text-pink-400' : ''}>{msg.length}/{200 - msg.length}</p>
              </div>
              <textarea
                className="no-resize appearance-none block w-full h-40 bg-neutral-200 text-neutral-900 border border-gray-200 rounded py-2 px-3 leading-tight focus:outline-none focus:bg-white"
                id="message"
                placeholder="What's your message?"
                {...register("message", {required: true, maxLength: 200})}
                value={msg}
                onChange={e => setMsg(e.target.value)}
              >
              </textarea>
              {errors.message && (
                <p className="text-pink-400 text-xs italic">Please check your message. Max length is 200 chars.</p>
              )}
            </div>
          </div>
          <div className="-mx-1">
            <button
              className="text-center border-2 border-cyan-400 py-2 px-4 rounded-full shadow hover:shadow-lg hover:animate-pulse"
              type="submit"
            >
              {isSending ? <Spinner /> : "Send"}
            </button>
            {errors.user_name || errors.user_email || errors.message ? (
                <p className="text-pink-400 text-xs italic">Oops! Please try again.</p>
              ) : isSent ? (
                <p className="text-green-500 text-xs italic">Message sent! Thanks and I'll be in touch as soon as possible. Please check your spam for an auto-response.</p>
              ) : null
            }
          </div>
        </form>
    </section>
  )
}
