import User from 'public/user.png'
import { useState } from 'react'
import { useFormStatus } from 'react-dom'
import { NavLink } from 'react-router'
export default function SettingsForm() {
	const [formData, setFormData] = useState({})
	const { pending } = useFormStatus()

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setFormData({ ...formData, [e.target.name]: e.target.value })
	}

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		console.log(formData)
	}
	return (
		<section className='px-10 py-6'>
			<div className='flex flex-col gap-13 rounded-2xl bg-white p-8 pt-4'>
				<div className='flex gap-18'>
					<NavLink to='#' className='border-b-3 border-b-[#232323] px-4 py-2'>
						Edit Profile
					</NavLink>
					<NavLink to='#' className='px-4 py-2'>
						Preferences
					</NavLink>
					<NavLink to='#' className='px-4 py-2'>
						Security
					</NavLink>
				</div>
				<div className='flex w-full flex-col items-center gap-14 lg:flex-row'>
					<div>
						<img src={User} className='w-24 object-cover' />
					</div>
					<form className='flex w-full flex-col gap-x-7.5 gap-y-6 lg:grid lg:grid-cols-2' onSubmit={handleSubmit}>
						{[
							{ label: 'Your Name', name: 'name', type: 'text', defaultValue: 'Charlene Reed' },
							{ label: 'User Name', name: 'username', type: 'text', defaultValue: 'Charlene Reed' },
							{ label: 'Email', name: 'email', type: 'email', defaultValue: 'charlenereed@gmail.com' },
							{ label: 'Password', name: 'password', type: 'password', defaultValue: '********' },
							{ label: 'Date of Birth', name: 'dob', type: 'date', defaultValue: '1990-01-25' },
							{ label: 'Present Address', name: 'presentAddress', type: 'text', defaultValue: 'San Jose, California, USA' },
							{
								label: 'Permanent Address',
								name: 'permanentAddress',
								type: 'text',
								defaultValue: 'San Jose, California, USA',
							},
							{ label: 'City', name: 'city', type: 'text', defaultValue: 'San Jose' },
							{ label: 'Postal Code', name: 'postalCode', type: 'text', defaultValue: '45962' },
							{ label: 'Country', name: 'country', type: 'text', defaultValue: 'USA' },
						].map(({ label, name, type, defaultValue }) => (
							<div className='flex flex-col gap-2' key={name}>
								<label htmlFor={name} className='block text-sm text-[#232323]'>
									{label}
								</label>
								<input
									id={name}
									name={name}
									type={type}
									className='w-full rounded-md border border-[#DFEAF2] px-3 py-2'
									defaultValue={defaultValue}
									onChange={handleChange}
								/>
							</div>
						))}
						<div className='col-span-2 flex justify-end'>
							<button type='submit' className='cursor-pointer rounded-2xl bg-black px-18 py-2 text-white' disabled={pending}>
								{pending ? 'Saving...' : 'Save'}
							</button>
						</div>
					</form>
				</div>
			</div>
		</section>
	)
}
