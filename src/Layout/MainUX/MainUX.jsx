import React, { useState } from 'react'
import Header from '../Header/Header'
import icon1 from './icon/cloud-fog-min.png'
import icon2 from './icon/figma-min.png'
import iconf from './icon/figmaa.png'
import icon3 from './icon/pen-close-min.png'
import icon4 from './icon/be-min.png'
import icon5 from './icon/element-4-min.png'
import icon6 from './icon/lamp-on-min.png'
import icon9 from './icon/9-min.png'
import iconB from './icon/pen-close2-min.png'
import styles from './MainUX.module.scss'
import { Link } from 'react-router-dom'
import ContactUs from '../ContactUs/ContactUs'
import { useTranslation } from 'react-i18next'
import '../../i18next'

const MainUX = () => {
	const { t } = useTranslation()
	const [info, setInfo] = useState()
	const [one, setOne] = useState(false)
	const [two, setTwo] = useState(true)

	const click = i => {
		if (i === 'one') {
			if (two === false) {
				setTwo(true)
			}
			setOne(!one)
		} else {
			if (one === false) {
				setOne(true)
			}
			setTwo(!two)
		}
	}

	return (
		<>
			<Header setInfo={setInfo} info={info} />
			<div className={styles.main__block}>
				<div className={styles.main__block__left}>
					<div className={styles.main__block__left__content}>
						<div className={styles.main__block__left__header}>
							<div className={styles.main__block__left__header__span}>
								<span>UX/UI </span>
								<span>{t('UX_UI.ux')}</span>
							</div>
							<button className={styles.sign}>
								<a href='#contact'>{t('UX_UI.contact')}</a>
							</button>
						</div>
					</div>
					<div className={styles.main__block__left__info}>
						<div>
							<p>{t('UX_UI.info.leftOne')}</p>
							<p>{t('UX_UI.info.leftTwo')}</p>
						</div>
						<div>
							<p>{t('UX_UI.info.middleOne')}</p>
							<p>{t('UX_UI.info.middleTwo')}</p>
						</div>
						<div>
							<p>{t('UX_UI.info.rightOne')}</p>
							<p>{t('UX_UI.info.rightTwo')}</p>
						</div>
					</div>
					<div className={styles.main__block__icon}>
						<div className={styles.main__block__icon__block}>
							<div className={styles.main__block__icon__b}>
								<img src={icon2} alt='icon' />
							</div>
							<div className={styles.main__block__icon__i}>
								<img src={icon6} alt='icon' />
							</div>
							<div></div>
						</div>

						<div className={styles.main__block__icon__block}>
							<div></div>
							<div className={styles.main__block__logo}>
								<svg
									width='46'
									height='30'
									viewBox='0 0 46 30'
									fill='none'
									xmlns='http://www.w3.org/2000/svg'
								>
									<path
										d='M27.5044 15.36L23.6805 5.48124C23.637 5.36269 23.5648 5.27714 23.4639 5.2246C23.3773 5.17203 23.2764 5.14584 23.1612 5.14605C22.9019 5.1465 22.7292 5.25884 22.6433 5.48306L18.8609 15.3752L16.3327 15.3797L20.5237 4.55755C20.7242 4.01679 21.0547 3.6142 21.5151 3.34977C21.99 3.08532 22.5371 2.95256 23.1566 2.95147C23.7616 2.95041 24.3021 3.08126 24.778 3.34404C25.254 3.60682 25.5934 4.00823 25.7962 4.54829L30.0326 15.3556L27.5044 15.36Z'
										fill='#009B95'
									/>
									<path
										d='M10.9729 5.45172C11.9662 5.45172 12.9371 5.72122 13.763 6.22614C14.5888 6.73105 15.2325 7.44871 15.6125 8.28833C15.9926 9.12796 16.0919 10.0518 15.8981 10.9432C15.7042 11.8345 15.2258 12.6531 14.5234 13.2957C13.821 13.9382 12.9261 14.3757 11.9519 14.5529C10.9777 14.73 9.96795 14.6389 9.05037 14.291C8.1328 13.943 7.3486 13.3539 6.79696 12.5982C6.24531 11.8425 5.951 10.954 5.95124 10.0452C5.95319 8.82635 6.48377 7.65799 7.42646 6.79673C8.36915 5.93547 9.64689 5.45172 10.9791 5.45172H10.9729ZM10.9791 0.000976625C8.80757 0.000976638 6.68483 0.590158 4.87931 1.69401C3.07378 2.79786 1.66656 4.3668 0.83562 6.20243C0.00467604 8.03805 -0.212675 10.0579 0.211054 12.0065C0.634784 13.9552 1.68056 15.7451 3.21614 17.1499C4.75171 18.5548 6.70811 19.5114 8.83792 19.8989C10.9677 20.2864 13.1753 20.0873 15.1814 19.3268C17.1876 18.5663 18.9022 17.2786 20.1084 15.6265C21.3147 13.9744 21.9584 12.0321 21.9582 10.0452C21.9582 8.72612 21.6742 7.41991 21.1224 6.20121C20.5706 4.98251 19.7619 3.87519 18.7424 2.94248C17.7229 2.00977 16.5125 1.26994 15.1805 0.765231C13.8485 0.260525 12.4208 0.00082927 10.9791 0.000976625Z'
										fill='#FF7A00'
									/>
									<path
										d='M35.0223 5.45074C36.0156 5.45074 36.9865 5.72024 37.8123 6.22516C38.6382 6.73008 39.2818 7.44773 39.6619 8.28735C40.0419 9.12698 40.1413 10.0509 39.9474 10.9422C39.7536 11.8335 39.2752 12.6522 38.5727 13.2947C37.8703 13.9372 36.9754 14.3747 36.0012 14.5519C35.027 14.729 34.0173 14.6379 33.0997 14.29C32.1822 13.942 31.398 13.353 30.8463 12.5972C30.2947 11.8415 30.0004 10.953 30.0006 10.0443C30.0025 8.82634 30.5323 7.65883 31.4736 6.79773C32.415 5.93663 33.6912 5.45223 35.0223 5.45074ZM35.0223 6.26833e-08C32.8507 -0.000221849 30.7279 0.58877 28.9222 1.69249C27.1165 2.7962 25.7091 4.36507 24.878 6.20067C24.0468 8.03627 23.8293 10.0562 24.2529 12.0049C24.6765 13.9536 25.7222 15.7436 27.2577 17.1486C28.7932 18.5535 30.7496 19.5102 32.8795 19.8978C35.0093 20.2854 37.2169 20.0864 39.2231 19.3259C41.2294 18.5655 42.944 17.2777 44.1504 15.6256C45.3567 13.9735 46.0004 12.0312 46.0001 10.0443C46.0001 7.38036 44.8436 4.82556 42.7848 2.9419C40.7261 1.05823 37.9338 6.26833e-08 35.0223 6.26833e-08Z'
										fill='#FF7A00'
									/>
									<path
										fillRule='evenodd'
										clipRule='evenodd'
										d='M29.2442 28.8102C27.4314 28.0246 25.8169 26.8741 24.5249 25.4304L28.5326 21.9973C29.2998 22.8545 30.277 23.5578 31.4016 24.0451C32.5265 24.5326 33.7635 24.7885 35.0215 24.7885C36.2795 24.7885 37.5165 24.5326 38.6414 24.0451C39.766 23.5578 40.7432 22.8545 41.5104 21.9973L45.5181 25.4304C44.2262 26.8741 42.6116 28.0246 40.7988 28.8102C38.9863 29.5956 37.0137 30.0001 35.0215 30.0001C33.0294 30.0001 31.0567 29.5956 29.2442 28.8102Z'
										fill='#FF7A00'
									/>
								</svg>
							</div>
							<div>
								<img src={icon4} alt='icon' />
							</div>
						</div>
						<div className={styles.main__block__icon__block}>
							<div className={styles.main__block__icon__i}>
								<img src={icon3} alt='icon' />
							</div>

							<div>
								<img src={icon1} alt='icon' />
							</div>
							<div className={styles.main__block__icon__one}>
								<img src={icon5} alt='icon' />
							</div>
						</div>
					</div>
				</div>
				<div className={styles.main__block__middle}>
					<div>
						<div className={styles.main__block__middle__left}>
							<h2>{t('UX_UI.infoMiddle.title')}</h2>
							<p>{t('UX_UI.infoMiddle.infoOne')}</p>
							<p>{t('UX_UI.infoMiddle.infoTwo')}</p>
						</div>
						<div className={styles.main__block__middle__right}>
							<p>{t('UX_UI.infoMiddle.infoThree')}</p>
							<p>{t('UX_UI.infoMiddle.infoFour')}</p>
							<p>{t('UX_UI.infoMiddle.infoFive')}</p>
						</div>
						<div className={styles.main__block__middle__icon__one}>
							<svg
								width='287'
								height='287'
								viewBox='0 0 287 287'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'
							>
								<path
									d='M253.398 96.1503L215.37 58.1229C201.02 43.7729 181.289 44.4907 171.603 59.917L150.437 93.4001L218.24 161.204L251.724 140.038C266.193 130.83 267.03 109.663 253.398 96.1503Z'
									stroke='#CDCDCD'
									strokeWidth='9.89655'
									strokeLinecap='round'
									strokeLinejoin='round'
								/>
								<path
									d='M218.235 161.088L221.105 210.357C223.856 237.861 214.289 247.427 188.22 250.536L83.943 262.854C61.9397 265.365 46.1547 249.581 48.7855 227.697L60.5046 128.682'
									stroke='#CDCDCD'
									strokeWidth='9.89655'
									strokeLinecap='round'
									strokeLinejoin='round'
								/>
								<path
									d='M150.437 93.3973L129.51 92.082'
									stroke='#CDCDCD'
									strokeWidth='9.89655'
									strokeLinecap='round'
									strokeLinejoin='round'
								/>
								<path
									d='M63.1318 248.505L101.159 210.357'
									stroke='#CDCDCD'
									strokeWidth='9.89655'
									strokeLinecap='round'
									strokeLinejoin='round'
								/>
								<path
									d='M131.542 77.7295C131.542 82.6324 130.825 87.5355 129.509 92.0796C128.194 96.863 126.28 101.287 123.769 105.473C120.899 110.256 117.312 114.561 113.126 118.149C103.679 126.52 91.362 131.542 77.7295 131.542C71.6307 131.542 65.8907 130.585 60.5095 128.672C48.312 124.606 38.1473 116.235 31.6898 105.473C26.7869 97.3412 23.917 87.7745 23.917 77.7295C23.917 60.7487 31.6899 45.5615 44.1266 35.7556C53.3345 28.3415 65.0537 23.917 77.7295 23.917C107.506 23.917 131.542 47.9532 131.542 77.7295Z'
									stroke='#CDCDCD'
									strokeWidth='9.89655'
									strokeMiterlimit='10'
									strokeLinecap='round'
									strokeLinejoin='round'
								/>
								<path
									d='M92.0711 91.8378L63.6104 63.377'
									stroke='#CDCDCD'
									strokeWidth='9.89655'
									strokeMiterlimit='10'
									strokeLinecap='round'
									strokeLinejoin='round'
								/>
								<path
									d='M91.8377 63.6221L63.377 92.083'
									stroke='#CDCDCD'
									strokeWidth='9.89655'
									strokeMiterlimit='10'
									strokeLinecap='round'
									strokeLinejoin='round'
								/>
							</svg>
						</div>
						<div className={styles.main__block__middle__icon__two}>
							<svg
								width='246'
								height='246'
								viewBox='0 0 246 246'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'
							>
								<path
									d='M122.998 20.5H89.1732C69.6982 20.5 54.3232 35.875 54.3232 54.325C54.3232 72.775 69.6982 88.15 88.1482 88.15H122.998V20.5Z'
									stroke='#FF7A00'
									strokeWidth='8.48276'
									strokeMiterlimit='10'
								/>
								<path
									d='M123.004 89.1768H89.1785C70.7285 89.1768 55.3535 104.552 55.3535 123.002C55.3535 141.452 70.7285 156.827 89.1785 156.827H123.004V89.1768Z'
									stroke='#FF7A00'
									strokeWidth='8.48276'
									strokeMiterlimit='10'
								/>
								<path
									d='M123.004 156.823H89.1785C70.7285 156.823 55.3535 172.198 55.3535 190.648C55.3535 209.098 70.7285 224.473 89.1785 224.473C107.629 224.473 123.004 209.098 123.004 190.648V156.823Z'
									stroke='#FF7A00'
									strokeWidth='8.48276'
									strokeMiterlimit='10'
								/>
								<path
									d='M123 20.5H156.825C175.275 20.5 190.65 35.875 190.65 54.325C190.65 72.775 175.275 88.15 156.825 88.15H123V20.5Z'
									stroke='#FF7A00'
									strokeWidth='8.48276'
									strokeMiterlimit='10'
								/>
								<path
									d='M156.825 89.1768C175.275 89.1768 190.65 104.552 190.65 123.002C190.65 141.452 175.275 156.827 156.825 156.827C138.375 156.827 123 141.452 123 123.002C123 104.552 138.375 89.1768 156.825 89.1768Z'
									stroke='#FF7A00'
									strokeWidth='8.48276'
									strokeMiterlimit='10'
								/>
							</svg>
						</div>
					</div>
				</div>
				<div className={styles.main__block__right}>
					<div className={styles.main__block__right__header}>
						<h2>{t('UX_UI.program.courses')}</h2>
						<div>
							<img src={icon9} alt='' />
						</div>
						<span>{t('UX_UI.program.basis')}</span>
					</div>
					<div className={styles.dropdown} onClick={() => click('one')}>
						<div
							className={one ? styles.dropdown__select : styles.dropdown__sel}
						>
							<span className={styles.select}>{t('UX_UI.program.first')}</span>
							<svg
								width='36'
								height='36'
								viewBox='0 0 36 36'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'
							>
								<path
									d='M29.8791 13.4248L20.0991 23.2048C18.9441 24.3598 17.0541 24.3598 15.8991 23.2048L6.11914 13.4248'
									stroke='#CDCDCD'
									strokeWidth='1.5'
									strokeMiterlimit='10'
									strokeLinecap='round'
									strokeLinejoin='round'
								/>
							</svg>
						</div>
						<div
							className={one ? styles.dropdown__listt : styles.dropdown_none}
						>
							<div className={styles.dropdown__list__item}>
								<a href='#'>{t('UX_UI.program.firstMonth.one')}</a>
							</div>
							<div className={styles.dropdown__list__item}>
								<a href='#'>{t('UX_UI.program.firstMonth.two')}</a>
							</div>
							<div className={styles.dropdown__list__item}>
								<a href='#'>{t('UX_UI.program.firstMonth.three')}</a>
							</div>
						</div>
					</div>
					<div className={styles.dropdown} onClick={() => click('two')}>
						<div
							className={two ? styles.dropdown__select : styles.dropdown__sel}
						>
							<span className={styles.select}>{t('UX_UI.program.second')}</span>
							<svg
								width='36'
								height='36'
								viewBox='0 0 36 36'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'
							>
								<path
									d='M29.8791 13.4248L20.0991 23.2048C18.9441 24.3598 17.0541 24.3598 15.8991 23.2048L6.11914 13.4248'
									stroke='#CDCDCD'
									strokeWidth='1.5'
									strokeMiterlimit='10'
									strokeLinecap='round'
									strokeLinejoin='round'
								/>
							</svg>
						</div>
						<div
							className={two ? styles.dropdown__listt : styles.dropdown_none}
						>
							<div className={styles.dropdown__list__item}>
								<a href='#'>{t('UX_UI.program.secondMonth.one')}</a>
							</div>
							<div className={styles.dropdown__list__item}>
								<a href='#'>{t('UX_UI.program.secondMonth.two')}</a>
							</div>
							<div className={styles.dropdown__list__item}>
								<a href='#'>{t('UX_UI.program.secondMonth.three')}</a>
							</div>
						</div>
					</div>
				</div>
				<div id={styles.contact}></div>
			</div>
			<ContactUs />
		</>
	)
}

export default MainUX
