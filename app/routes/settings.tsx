import SettingsForm from 'components/SettingsForm/SettingsForm'
import TopBar from 'components/TopBar/TopBar'

export default function Profile() {
	return (
		<main className='w-full bg-[#F5F7FA]'>
			<TopBar title='Edit Profile' />
			<SettingsForm />
		</main>
	)
}
