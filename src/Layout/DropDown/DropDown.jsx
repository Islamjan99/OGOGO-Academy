import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import styles from './DropDown.module.scss'

const DropDown = () => {
	const { t } = useTranslation()
	return (
		<div className={styles.dropdown}>
			<div className={styles.dropdown__select}>
				<span className={styles.select}>{t('navBar.courses')}</span>
			</div>
			<div className={styles.dropdown__list}>
				<div className={styles.dropdown__list__item}>
					<Link to='/js'>JavaScript</Link>
				</div>
				<div className={styles.dropdown__list__item}>
					<Link to='/ux'>UX/UI design</Link>
				</div>
				<div className={styles.dropdown__list__item}>
					<Link to='/python'>Python</Link>
				</div>
			</div>
		</div>
	)
}

export default DropDown
