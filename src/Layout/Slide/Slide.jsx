import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import styles from './Slide.module.scss'
import { useTranslation } from 'react-i18next'
import '../../i18next.js'

const Slide = () => {
	const { t } = useTranslation()
	const [isActive, setIsActive] = useState(false)
	const [data, setData] = useState([])

	useEffect(() => {
		componentDidMount()
		setIsActive(false)
	}, [isActive])

	const active = last => {
		data.map(item => {
			if (item.bool === true) {
				item.bool = false
			}
			if (last === item.name) {
				setIsActive(true)
				item.bool = !isActive
			}
		})
	}
	const componentDidMount = () => {
		if (data.length < 1) {
			axios
				.get(`https://62176bfc71e7672e537e0afe.mockapi.io/tests`)
				.then(res => {
					const dat = res.data
					setData(dat)
				})
		}
	}

	return (
		<div className={styles.slider}>
			<div className={styles.slide__block}>
				{data.map(({ image, name, bool, id }, index) => {
					return (
						<div key={index}>
							{name === 'intensive' ? (
								<div key={id} className={styles.slide__bar}>
									<div
										onClick={() => active(name)}
										style={{ backgroundImage: `url(${image})` }}
										className={
											bool
												? styles.slide__bar__img__active
												: styles.slide__bar__img
										}
									></div>
								</div>
							) : (
								<Link key={id} to={bool ? `/${name}` : '/'}>
									<div className={styles.slide__bar}>
										<div
											onClick={() => active(name)}
											style={{ backgroundImage: `url(${image})` }}
											className={
												bool
													? styles.slide__bar__img__active
													: styles.slide__bar__img
											}
										></div>
									</div>
								</Link>
							)}
						</div>
					)
				})}
			</div>
			<div className={styles.slide__img_none}></div>
			<ul className={styles.slide__info}>
				<li>{t('slide.think')}</li>
				<li>{t('slide.learn')}.</li>
				<li>{t('slide.create')}</li>
			</ul>

			<div className={styles.slide__info__none}>
				<span>Курсы</span>
				<svg
					width='18'
					height='9'
					viewBox='0 0 18 9'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
				>
					<path
						d='M16.9201 0.949997L10.4001 7.47C9.63008 8.24 8.37008 8.24 7.60008 7.47L1.08008 0.949997'
						stroke='#292D32'
						strokeWidth='1.5'
						strokeMiterlimit='10'
						strokeLinecap='round'
						strokeLinejoin='round'
					/>
				</svg>
			</div>
			<div className={styles.slide__none}>
				{data.map(({ image, name, id, uu }, index) => {
					return name == 'intensive' ? (
						<div className={styles.slide__bar__none}>
							<div
								style={{ backgroundImage: `url(${image})` }}
								className={styles.slide__bar__img__none}
								key={name}
							></div>
						</div>
					) : (
						<Link key={id} to={`/${name}`}>
							<div className={styles.slide__bar__none}>
								<div
									style={{ backgroundImage: `url(${image})` }}
									className={styles.slide__bar__img__none}
									key={name}
								></div>
							</div>
						</Link>
					)
				})}
			</div>
		</div>
	)
}

export default Slide
