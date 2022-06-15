import styles from './Works.module.scss'
import img__burul from './Бурул.png'
import img__faruh from './Фарух.png'
import img__ratmir from './Ратмир.png'
import img__firuza from './Фируза.png'
import img__alex from './Алекс.png'
import img__arrow from './arrow-down.png'
import ContactUs from '../ContactUs/ContactUs'
import { useEffect, useState } from 'react'

import { useTranslation } from 'react-i18next'
import '../../i18next.js'

const Works = () => {
	const { t } = useTranslation()
	const [data, setData] = useState()
	useEffect(() => {
		setData(localStorage.getItem('i18nextLng'))
	}, [data])

	return (
		<div className={styles.works} id='works'>
			<div className={styles.works__title}>
				<h2>{t('Work.title')}</h2>
				<div className={styles.pointer}>
					<img src={img__arrow} alt='Указатель'></img>
				</div>
			</div>
			<div className={styles.works__block}>
				<div className={styles.works__block__left}>
					<div className={styles.burul__block}>
						<div className={styles.burul__img}>
							<img src={img__burul} alt='Работа Бурул' />
						</div>
						<div className={styles.burul__text}>
							<h4>{t('Work.worksBurul.one')}</h4>
							<h3>{t('Work.worksBurul.two')}</h3>
							<p>{t('Work.worksBurul.three')}</p>
							<p className={styles.burul__text__none}>
								{t('Work.worksBurul.threeNone')}
							</p>
						</div>
					</div>
					<div className={styles.faruh__block}>
						<div className={styles.faruh__img}>
							<img src={img__faruh} alt='Работа Фаруха' />
						</div>
						<div className={styles.faruh__text}>
							<h4>{t('Work.worksFaruh.one')}</h4>
							<h3>{t('Work.worksFaruh.two')}</h3>
							<p>{t('Work.worksFaruh.three')}</p>
						</div>
					</div>
				</div>
				<div className={styles.works__middle}>
					<div className={styles.works__middle__none}>
						<div className={styles.ratmir__block}>
							<div className={styles.ratmir__img}>
								<img src={img__ratmir} alt='Работа Ратмира' />
							</div>
							<div className={styles.ratmir__text}>
								<h4>{t('Work.worksRatmir.one')}</h4>
								<h3>{t('Work.worksRatmir.two')}</h3>
								<p>{t('Work.worksRatmir.three')}</p>
								<p className={styles.ratmir__text__none}>
									{t('Work.worksRatmir.threeNone')}
								</p>
							</div>
						</div>
						<div className={styles.faruh__block__none}>
							<div className={styles.faruh__img__none}>
								<img src={img__faruh} alt='Работа Фаруха' />
							</div>
							<div className={styles.faruh__text__none}>
								<h4>{t('Work.worksFaruh.one')}</h4>
								<h3>{t('Work.worksFaruh.two')}</h3>
								<p>{t('Work.worksFaruh.three')}</p>
							</div>
						</div>
					</div>
					<div className={styles.firuza__block}>
						<div className={styles.firuza__img}>
							<img src={img__firuza} alt='Работа Фирузы' />
						</div>
						<div className={styles.firuza__text}>
							<h4>{t('Work.worksFiruza.one')}</h4>
							<h3>{t('Work.worksFiruza.two')}</h3>
							<p>{t('Work.worksFiruza.three')}</p>
						</div>
					</div>
				</div>
				<div className={styles.as}>
					<div className={styles.alex__block}>
						<div className={styles.alex__text}>
							<h4>{t('Work.worksAlex.one')}</h4>
							<h3>{t('Work.worksFiruza.two')}</h3>
							<p>{t('Work.worksFiruza.three')}</p>
						</div>
						<div className={styles.alex__img}>
							<img className={styles.as} src={img__alex} alt='Работа Алекса' />
						</div>
					</div>
				</div>
			</div>
			<ContactUs />
		</div>
	)
}

export default Works
