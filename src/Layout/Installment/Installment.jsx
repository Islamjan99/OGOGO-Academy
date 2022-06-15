import styles from './Installment.module.scss'

import { useTranslation } from 'react-i18next'
import '../../i18next.js'
import { t } from 'i18next'

const Installment = () => {
	return (
		<div className={styles.installment} id='installment'>
			<div className={styles.wrapper}>
				<div className={styles.installment__block}>
					<h2>{t('installment.installments')}</h2>
					<p>{t('installment.down')}</p>
					<button>
						<a href='#contact'>{t('installment.req')}</a>{' '}
					</button>
				</div>
				<div className={styles.icon__block}>
					<svg
						width='80'
						height='80'
						viewBox='0 0 64 64'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
						className={styles.dollar}
					>
						<path
							d='M24.75 37.6418C24.75 40.5614 27.025 42.9501 29.7929 42.9501H35.4804C37.9071 42.9501 39.8787 40.8647 39.8787 38.3243C39.8787 35.5564 38.6654 34.5705 36.8833 33.926L27.7833 30.741C25.9633 30.0964 24.75 29.1105 24.75 26.3426C24.75 23.8022 26.7217 21.7168 29.1483 21.7168H34.8358C37.6417 21.7547 39.9167 24.1055 39.9167 27.0251'
							stroke='#c2c2c2'
							strokeWidth='2.5'
							strokeLinecap='round'
							strokeLinejoin='round'
						/>
						<path
							d='M32.334 43.1396V45.9455'
							stroke='#c2c2c2'
							strokeWidth='2.5'
							strokeLinecap='round'
							strokeLinejoin='round'
						/>
						<path
							d='M32.334 18.7217V21.6792'
							stroke='#c2c2c2'
							strokeWidth='2.5'
							strokeLinecap='round'
							strokeLinejoin='round'
						/>
						<path
							d='M32.2954 62.5908C49.0271 62.5908 62.5908 49.0271 62.5908 32.2954C62.5908 15.5637 49.0271 2 32.2954 2C15.5637 2 2 15.5637 2 32.2954C2 49.0271 15.5637 62.5908 32.2954 62.5908Z'
							stroke='#c2c2c2'
							strokeWidth='2.5'
							strokeLinecap='round'
							strokeLinejoin='round'
						/>
					</svg>

					<svg
						width='107'
						height='107'
						viewBox='0 0 107 107'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
						className={styles.percent}
					>
						<path
							d='M38.2083 68.0783L67.3657 38.9209'
							stroke='#DEDEDE'
							strokeWidth='2.5'
							strokeLinecap='round'
							strokeLinejoin='round'
						/>
						<path
							d='M40.0358 46.2331C43.0644 46.2331 45.5195 43.778 45.5195 40.7494C45.5195 37.7208 43.0644 35.2656 40.0358 35.2656C37.0072 35.2656 34.552 37.7208 34.552 40.7494C34.552 43.778 37.0072 46.2331 40.0358 46.2331Z'
							stroke='#DEDEDE'
							strokeWidth='2.5'
							strokeLinecap='round'
							strokeLinejoin='round'
						/>
						<path
							d='M69.1934 71.735C72.222 71.735 74.6772 69.2798 74.6772 66.2512C74.6772 63.2226 72.222 60.7676 69.1934 60.7676C66.1648 60.7676 63.7097 63.2226 63.7097 66.2512C63.7097 69.2798 66.1648 71.735 69.1934 71.735Z'
							stroke='#DEDEDE'
							strokeWidth='2.5'
							strokeLinecap='round'
							strokeLinejoin='round'
						/>
						<path
							d='M53.5001 98.0837C78.1228 98.0837 98.0834 78.123 98.0834 53.5003C98.0834 28.8776 78.1228 8.91699 53.5001 8.91699C28.8774 8.91699 8.91675 28.8776 8.91675 53.5003C8.91675 78.123 28.8774 98.0837 53.5001 98.0837Z'
							stroke='#DEDEDE'
							strokeWidth='3'
							strokeLinecap='round'
							strokeLinejoin='round'
						/>
					</svg>
				</div>
			</div>
		</div>
	)
}

export default Installment
