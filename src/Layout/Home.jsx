import React, { useEffect, useState } from 'react'
import Footer from './Footer/Footer'
import Header from './Header/Header'
import ContactUs from './ContactUs/ContactUs'
import FAQ from './FAQ/FAQ'
import Slide from './Slide/Slide'
import Works from './Works/Works'
import Installment from './Installment/Installment'
import styles from './Home.module.scss'
import { useTranslation } from 'react-i18next'
import '../i18next'
import image from './mainIllustartion.png'

const Home = () => {
	const { t } = useTranslation()
	const [info, setInfo] = useState()
	useEffect(() => {
		if (localStorage.getItem('i18nextLng') !== '') {
			setInfo(localStorage.getItem('i18nextLng'))
		}
	}, [info])

	return (
		<>
			<Header setInfo={setInfo} info={info} />
			<div className={styles.block}>
				{info === 'ru' ? (
					<div className={styles.home__container}>
						<div className={styles.home__wrapper}>
							<div className={styles.home__block}>
								<span>{t('home.Courses')}</span>
								<span>{t('home.prog')}</span>
							</div>
							<h1>{t('home.academy')}</h1>
							<h2>OGOGO</h2>
						</div>

						<img className={styles.img} src={image} alt='img' />
					</div>
				) : (
					<div className={styles.home__container_en}>
						<div className={styles.home__wrapper_en}>
							<div className={styles.home__block_en}>
								<span>{t('home.Courses')}</span>
								<span>{t('home.prog')}</span>
							</div>
							<h1>{t('home.academy')}</h1>
							<h2>OGOGO</h2>
						</div>

						<img className={styles.img} src={image} alt='img' />
					</div>
				)}
			</div>

			<ContactUs id='contact' />
			<Slide />
			<FAQ setInfo={setInfo} info={info} />
			<Installment />
			<Works />
		</>
	)
}

export default Home
