import { Link, useLocation } from 'react-router-dom'
import styles from './NavBar.module.scss'
import { useTranslation } from 'react-i18next'
import '../../i18next.js'

const NavBar = () => {
	let location = useLocation()
	const { t } = useTranslation()
	return (
		<div>
			{location.pathname === '/' ? (
				<ul className={styles.nav__active}>
					<li>
						<a href='#works'>{t('navBar.work')}</a>
					</li>
					<li>
						<a href='#installment'>{t('navBar.installment')}</a>
					</li>
					<li>
						<a href='#faq'>{t('navBar.faq')}</a>
					</li>
					<li>
						<a href='#footer'>{t('navBar.contacts')}</a>
					</li>
				</ul>
			) : (
				<ul className={styles.nav}>
					<li>
						<Link to='/#works'>{t('navBar.work')}</Link>
					</li>
					<li>
						<Link to='/#installment'>{t('navBar.installment')}</Link>
					</li>
					<li>
						<Link to='/#faq'>{t('navBar.faq')}</Link>
					</li>
					<li>
						<Link to='/#footer'>{t('navBar.contacts')}</Link>
					</li>
				</ul>
			)}
		</div>
	)
}

export default NavBar
