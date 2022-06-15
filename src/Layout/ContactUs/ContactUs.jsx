import { useTranslation } from 'react-i18next'
import styles from './ContactUs.module.scss'
import '../../i18next.js'

const ContactUs = () => {
	const { t } = useTranslation()
	return (
		<div className={styles.contact__wrapper} id='contact'>
			<div className={styles.contact__left}>
				<h3>{t('contacts.contact')}</h3>
				<p>{t('contacts.info')}</p>
			</div>
			<form
				target='_blank'
				action='https://formsubmit.co/ogogoacademy@gmail.com'
				method='POST'
				className={styles.contact__right}
			>
				<input type='hidden' name='_next' value='https://ogogoacademy.kg' />
				<input type='hidden' name='_captcha' value='false' />
				<input
					type='number'
					className={styles.input}
					placeholder={t('contacts.inp')}
					required
					name='phone'
				></input>
				<button className={styles.send} type='submit'>
					{t('contacts.btn')}
				</button>
			</form>
		</div>
	)
}

export default ContactUs
