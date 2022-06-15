import React, { useEffect, useState } from 'react'
import styles from './FAQ.module.scss'
import coolicon from './coolicon.png'
import axios from 'axios'
import { useTranslation } from 'react-i18next'
import '../../i18next.js'

const FAQ = ({ setInfo, info }) => {
	const { t } = useTranslation()
	const [data, setData] = useState([])
	const [handleData, setHandleData] = useState([])
	const [handleInfo, setHandleInfo] = useState([])
	const [isActive, setIsActive] = useState(false)
	const [count, setCount] = useState([])

	useEffect(() => {
		getData()
		setIsActive(false)
	}, [isActive, info])

	const getData = () => {
		if (data.length < 1) {
			axios
				.get('https://62176bfc71e7672e537e0afe.mockapi.io/slide-V2')
				.then(res => {
					const dat = res.data
					if (data.length === 0) {
						dat.map(item => {
							if (item.id == 1) {
								data.push(item)
							}
						})
					}
					setHandleData(dat)
					setHandleInfo(dat)
				})
		}
		if (count.length < 1) {
			axios
				.get('https://62176bfc71e7672e537e0afe.mockapi.io/slide-v2-bool')
				.then(res => {
					const dat = res.data
					setCount(dat)
				})
		}
	}

	const addData = (index, id) => {
		handleData.map(item => {
			let i = 0
			if (item.id == id) {
				data[i] = item
			}
		})
	}

	const changeItem = (index, id) => {
		count.map(item => {
			if (item.bool === true) {
				item.bool = false
			}
			if (item.name === index) {
				setIsActive(true)
				item.bool = true
			}
		})
		addData(index, id)
	}

	const changeItemBlock = (index, id, name) => {
		let uuid = 0
		let lem = 0
		data.map(e => {
			uuid = e.id
			lem = e.id
		})

		uuid++
		handleData.map(item => {
			if (uuid < 6) {
				if (uuid === item.id) {
					data.shift()
					data.push(item)
					lem = item.id
					lem--
				}
			} else {
				handleInfo.map(i => {
					if (i.id === 1) {
						data[0] = i
						lem--
					}
				})
			}
		})
		che(lem)
	}

	const che = i => {
		count.map((item, index) => {
			if (item.bool === true) {
				item.bool = false
			}
			if (item.name === i) {
				setIsActive(true)
				item.bool = true
			}
		})
	} 
	return (
		<div className={styles.faq__block} id='faq'>
			<div className={styles.faq__left}>
				<div className={styles.faq__left__imgOne}>
					<img src={coolicon} alt='icon' />
				</div>
				<span>{t('FAQ.faq')}</span>
				<div className={styles.faq__left__imgTwo}>
					<img src={coolicon} alt='icon' />
				</div>
				<div className={styles.faq__left__imgThree}>
					<img src={coolicon} alt='icon' />
				</div>
			</div>
			<div className={styles.faq__block__two}>
				<div className={styles.faq__middle}>
					{count.map(({ bool, id, idd }, index) => {
						return (
							<div
								key={id}
								className={
									bool ? styles.faq__middle__item : styles.faq__middle__none
								}
							></div>
						)
					})}
				</div>
				<div className={styles.faq__middle_none}>
					{count.map(({ bool, id }, index) => {
						return (
							<div
								key={id}
								className={
									bool ? styles.faq__middle__item : styles.faq__middle__none
								}
								onClick={bool ? undefined : () => changeItem(index, id)}
							></div>
						)
					})}
				</div>
				<div className={styles.faq__right}>
					{data.map(
						(
							{ name, nameEn, image, description, descriptionEn, id },
							index
						) => {
							return (
								<div
									key={index}
									className={styles.faq__right__item}
									onClick={() => changeItemBlock(index, id, name)}
								>
									<img src={image} alt='icon' />
									<h2>{info === 'ru' ? name : nameEn}</h2>
									<p>{info === 'ru' ? description : descriptionEn}</p>
								</div>
							)
						}
					)}
				</div>
				<div className={styles.faq__right_none}>
					{handleData.map(
						({ name, nameEn, image, description, descriptionEn, id }) => {
							return (
								<div key={id} className={styles.faq__right__item}>
									<img src={image} alt='icon' />
									<h2>{info === 'ru' ? name : nameEn}</h2>
									<p>{info === 'ru' ? description : descriptionEn}</p>
								</div>
							)
						}
					)}
				</div>
			</div>
		</div>
	)
}

export default FAQ
