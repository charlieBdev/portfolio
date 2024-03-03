'use client';

import { useEffect, useRef, useState } from 'react';
import { useForm, SubmitHandler, FieldValues } from 'react-hook-form';
import emailjs from '@emailjs/browser';
import { Spinner } from '.';
import { toast } from 'sonner';
import { useInView, motion } from 'framer-motion';
import { SectionProps } from '../interfaces/SectionProps';

export const ContactPage = (props: SectionProps) => {
	const { setActiveLink } = props;

	const ref = useRef(null);
	const isInViewContact = useInView(ref, { amount: 0.9 });

	useEffect(() => {
		if (isInViewContact) setActiveLink('Contact');
	}, [isInViewContact, setActiveLink]);

	const [form, setForm] = useState({
		name: '',
		email: '',
		message: '',
	});

	const [isSent, setIsSent] = useState<boolean>(false);
	const [isSending, setIsSending] = useState<boolean>(false);

	const {
		reset,
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const handleChange = (e: any) => {
		const { name, value } = e.target;
		setForm({
			...form,
			[name]: value,
		});
	};

	const onSubmit: SubmitHandler<FieldValues> = () => {
		setIsSending(true);
		sendEmail();
	};

	const formRef = useRef<HTMLFormElement | null>(null);

	const sendEmail = () => {
		console.log(formRef, '<<< formRef');
		if (formRef.current) {
			const serviceID: string | undefined =
				process.env.NEXT_PUBLIC_EMAILJS_SERVICEID;
			const templateID = 'template_e9avqw4';
			const userID = 'ax2EtnNRhWQkWQJmN';

			emailjs
				.sendForm(serviceID!, templateID, formRef.current, userID)
				.then(() => {
					toast.success('Message sent!');
					setIsSent(true);
					clearForm();
					// reset();
				})
				.catch(() => {
					toast.error('Please try again!');
				})
				.finally(() => {
					setIsSending(false);
				});
		}
	};

	const clearForm = () => {
		setForm({
			name: '',
			email: '',
			message: '',
		});
	};

	const emailRegex = /^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/;

	return (
		<section
			ref={ref}
			id='contact'
			className='min-h-[calc(100vh)] px-6 xl:px-24 gap-6 flex flex-col items-center justify-center bg-opacity-90 dark:bg-opacity-90 backdrop-blur dark:backdrop-blur'
		>
			<div>
				<motion.h2
					className='text-4xl tracking-wide text-cyan-400 font-bold mb-3'
					initial={{ opacity: 0 }}
					animate={isInViewContact ? { opacity: 1 } : {}}
					transition={{
						duration: 0.5,
					}}
				>
					Contact<span className="text-pink-400">.</span>
				</motion.h2>
				<p>
					Please <span className=''>feel free</span> to leave a message. I'd{' '}
					<span className=''>love</span> to hear from you{' '}
					<span className=''>regardless</span> of what it's about!
				</p>
			</div>
			{/* <ContactForm /> */}
			<form
				className='w-full max-w-xl flex flex-col gap-3'
				ref={formRef}
				onSubmit={handleSubmit(onSubmit)}
			>
				<div className='flex flex-col -mx-2'>
					<div className='w-full px-2'>
						<div className='flex justify-between text-neutral-400 tracking-wide text-xs mb-1'>
							<label className='font-bold' htmlFor='name'>
								Name
							</label>
							<p className={form.name.length > 50 ? 'text-pink-400' : ''}>
								{50 - form.name.length}
							</p>
						</div>

						<input
							className={`${
								form.name.length > 0 && form.name.length < 51
									? 'bg-green-100'
									: ''
							} ${form.name.length === 0 ? 'focus:bg-white' : ''} ${
								form.name.length > 50 ? 'bg-pink-100' : ''
							} appearance-none block w-full text-neutral-950 border border-gray-200 focus:border-cyan-400 rounded py-2 px-3 leading-tight focus:outline-none`}
							id='name'
							type='text'
							placeholder='Mr. Musk'
							{...register('name', { required: true, maxLength: 50 })}
							name='name'
							value={form.name}
							onChange={handleChange}
						/>
						{errors.name &&
							(form.name.length === 0 || form.name.length > 50) && (
								<p className='text-pink-400 text-xs italic mt-1'>
									Please check your name. Max length is 50 chars.
								</p>
							)}
					</div>
				</div>
				<div className='flex flex-wrap -mx-2'>
					<div className='w-full px-2'>
						<label
							className='text-neutral-400 block tracking-wide text-xs font-bold mb-1'
							htmlFor='email'
						>
							e-mail
						</label>
						<input
							className={`${
								form.email.length > 0 && emailRegex.test(form.email)
									? 'bg-green-100'
									: form.email.length === 0
									? ''
									: 'bg-pink-100'
							} ${
								form.email.length === 0 ? 'focus:bg-white' : ''
							} appearance-none block w-full text-neutral-950 border border-gray-200 focus:border-cyan-400 rounded py-2 px-3 leading-tight focus:outline-none`}
							id='email'
							type='text'
							placeholder='elon@spaceX.com'
							{...register('email', {
								required: true,
								pattern: emailRegex,
							})}
							name='email'
							value={form.email}
							onChange={handleChange}
						/>
						{errors.email && !emailRegex.test(form.email) && (
							<p className='text-pink-400 text-xs italic mt-1'>
								Please check your e-mail address.
							</p>
						)}
					</div>
				</div>
				<div className='flex flex-wrap -mx-2'>
					<div className='w-full px-2'>
						<div className='flex justify-between text-neutral-400 tracking-wide text-xs mb-1'>
							<label
								className='block tracking-wide text-xs font-bold'
								htmlFor='message'
							>
								Message
							</label>
							<p className={form.message.length > 300 ? 'text-pink-400' : ''}>
								{300 - form.message.length}
							</p>
						</div>
						<textarea
							className={`no-resize h-36 ${
								form.message.length > 0 && form.message.length < 301
									? 'bg-green-100'
									: 'bg-neutral-100'
							} ${form.message.length === 0 ? 'focus:bg-white' : ''} ${
								form.message.length > 300 ? 'bg-pink-100' : ''
							} appearance-none block w-full text-neutral-950 border border-gray-200 focus:border-cyan-400 rounded py-2 px-3 leading-tight focus:outline-none`}
							id='message'
							placeholder='You are great! Can I hire you?'
							{...register('message', { required: true, maxLength: 300 })}
							name='message'
							value={form.message}
							onChange={handleChange}
						></textarea>
						{errors.message &&
							(form.message.length === 0 || form.message.length > 300) && (
								<p className='text-pink-400 text-xs italic mt-1'>
									Please check your message. Max length is 300 chars.
								</p>
							)}
					</div>
				</div>
				<div className='mx-auto'>
					<button
						className='text-center border-2 border-cyan-400 text-cyan-400 py-2 px-4 rounded-full shadow hover:shadow-lg hover:animate-pulse'
						type='submit'
						aria-label='Submit'
					>
						{isSending ? <Spinner /> : 'Submit'}
					</button>
				</div>
			</form>
		</section>
	);
};
