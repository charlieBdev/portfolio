'use client';

import { useRef, useState } from 'react';
import { useForm, SubmitHandler, FieldValues } from 'react-hook-form';
import emailjs from '@emailjs/browser';
import { Spinner } from '../components';

export default function Contact() {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [msg, setMsg] = useState('');

	const [isSent, setIsSent] = useState<boolean>(false);
	const [isSending, setIsSending] = useState<boolean>(false);

	const {
		reset,
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const clearForm = () => {
		setName('');
		setEmail('');
		setMsg('');
	};

	const onSubmit: SubmitHandler<FieldValues> = () => {
		setIsSending(true);
		sendEmail();
	};

	const form = useRef<HTMLFormElement | null>(null);

	const sendEmail = () => {
		if (form.current) {
			const serviceID: string | undefined =
				process.env.NEXT_PUBLIC_EMAILJS_SERVICEID;
			const templateID = 'template_e9avqw4';
			const userID = 'ax2EtnNRhWQkWQJmN';

			emailjs
				.sendForm(serviceID!, templateID, form.current, userID)
				.then((result) => {
					// console.log('Email sent: ', result.text);
					setIsSent(true);
					clearForm();
					// reset();
				})
				.catch((error) => {
					// console.log('Email error: ', error.text);
				})
				.finally(() => {
					setIsSending(false);
				});
		}
	};

	// const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i
	const emailRegex = /^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/;

	return (
		<section className="p-6 xl:px-24 flex flex-col lg:flex-row xl:flex-col lg:justify-between xl:mx-auto xl:items-center space-y-6">
			<div className="space-y-1">
				<h2 className="text-lg text-pink-400">Contact</h2>
				<p>
					Please <span className="">feel free</span> to leave a message. I'd{' '}
					<span className="">love</span> to hear from you{' '}
					<span className="">regardless</span> of what it's about!
				</p>
				<p>
					If you have any <span className="">accessibility issues</span> with
					the site, please <span className="">let me know</span>.
				</p>
			</div>
			{/* <ContactForm /> */}
			<form
				className="w-full max-w-xl mx-auto px-1 lg:mr-0 lg:ml-8 space-y-3"
				ref={form}
				onSubmit={handleSubmit(onSubmit)}
			>
				<div className="flex flex-wrap -mx-3">
					<div className="w-full px-2">
						<div className="flex justify-between text-neutral-400 tracking-wide text-xs mb-1">
							<label className="font-bold" htmlFor="user_name">
								Name
							</label>
							<p className={name.length > 50 ? 'text-pink-400' : ''}>
								{50 - name.length}
							</p>
						</div>

						<input
							className={`${
								name.length > 0 && name.length < 51 ? 'bg-green-100' : ''
							} ${name.length === 0 ? 'focus:bg-white' : ''} ${
								name.length > 50 ? 'bg-pink-100' : ''
							} appearance-none block w-full text-neutral-950 border border-gray-200 focus:border-cyan-400 rounded py-2 px-3 leading-tight focus:outline-none`}
							id="user_name"
							type="text"
							placeholder="What's your name?"
							{...register('user_name', { required: true, maxLength: 50 })}
							value={name}
							onChange={(e) => setName(e.target.value)}
						/>
						{errors.user_name && (
							<p className="text-pink-400 text-xs italic mt-1">
								Please check your name. Max length is 50 chars.
							</p>
						)}
					</div>
				</div>
				<div className="flex flex-wrap -mx-3">
					<div className="w-full px-2">
						<label
							className="text-neutral-400 block tracking-wide text-xs font-bold mb-1"
							htmlFor="user_email"
						>
							e-mail
						</label>
						<input
							className={`${
								email.length > 0 && emailRegex.test(email)
									? 'bg-green-100'
									: email.length === 0
									? ''
									: 'bg-pink-100'
							} ${
								email.length === 0 ? 'focus:bg-white' : ''
							} appearance-none block w-full text-neutral-950 border border-gray-200 focus:border-cyan-400 rounded py-2 px-3 leading-tight focus:outline-none`}
							id="user_email"
							type="text"
							placeholder="What's your e-mail?"
							{...register('user_email', {
								required: true,
								pattern: emailRegex,
							})}
							value={email}
							onChange={(e) => setEmail(e.target.value)}
						/>
						{errors.user_email && (
							<p className="text-pink-400 text-xs italic mt-1">
								Please check your e-mail address.
							</p>
						)}
					</div>
				</div>
				<div className="flex flex-wrap -mx-3">
					<div className="w-full px-2">
						<div className="flex justify-between text-neutral-400 tracking-wide text-xs mb-1">
							<label
								className="block tracking-wide text-xs font-bold"
								htmlFor="message"
							>
								Message
							</label>
							<p className={msg.length > 200 ? 'text-pink-400' : ''}>
								{200 - msg.length}
							</p>
						</div>
						<textarea
							className={`no-resize h-36 ${
								msg.length > 0 && msg.length < 201
									? 'bg-green-100'
									: 'bg-neutral-100'
							} ${msg.length === 0 ? 'focus:bg-white' : ''} ${
								msg.length > 200 ? 'bg-pink-100' : ''
							} appearance-none block w-full text-neutral-950 border border-gray-200 focus:border-cyan-400 rounded py-2 px-3 leading-tight focus:outline-none`}
							id="message"
							placeholder="What's your message?"
							{...register('message', { required: true, maxLength: 200 })}
							value={msg}
							onChange={(e) => setMsg(e.target.value)}
						></textarea>
						{errors.message && (
							<p className="text-pink-400 text-xs italic mt-1">
								Please check your message. Max length is 200 chars.
							</p>
						)}
					</div>
				</div>
				<div className="-mx-1 space-y-3">
					<button
						className="text-center border-2 border-cyan-400 py-2 px-4 rounded-full shadow hover:shadow-lg hover:animate-pulse"
						type="submit"
						aria-label="Submit"
					>
						{isSending ? <Spinner /> : 'Send'}
					</button>
					{errors.user_name || errors.user_email || errors.message ? (
						<p className="text-pink-400 text-xs italic">
							Oops! Please try again.
						</p>
					) : isSent ? (
						<p className="text-green-500 text-xs italic">
							Message sent! Thanks and I'll be in touch as soon as possible.
							Please check your spam for an auto-response.
						</p>
					) : null}
				</div>
			</form>
		</section>
	);
}
