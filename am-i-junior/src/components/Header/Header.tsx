import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './Header.module.css'

function Header({ isOpenWarning }: { isOpenWarning: () => void }) {
	const [seconds, setSeconds] = useState<number>(600)
	const [isActive, setIsActive] = useState<boolean>(true)
	const navigate = useNavigate()

	useEffect(() => {
		let interval = null
		if (isActive) {
			interval = setInterval(() => {
				setSeconds(seconds => seconds - 1)
			}, 1000)
		} else if (!isActive && seconds !== 0) {
			clearInterval(interval!)
		}
		return () => clearInterval(interval!)
	}, [isActive, seconds])

	const convertToMinutes = () => {
		if (seconds <= 0) {
			navigate('/')
		} else {
			let secondsChange = seconds % 60
			let minutes = Math.floor(seconds / 60)
			let formattedSeconds = secondsChange.toString().padStart(2, '0')
			return `${minutes}:${formattedSeconds}`
		}
	}

	return (
		<div className={styles.container}>
			<div className={styles.wrapper}>
				<h2>React Entry Level</h2>
				<p>Initial practice</p>
			</div>
			<div className={styles.actionContainer}>
				<div className={styles.timerContainer}>
					<img src='/src/assets/images/Vector.svg' alt='Clocks' />
					<p>Timeout after {convertToMinutes()}</p>
				</div>
				<button onClick={isOpenWarning}>
					<img src='/src/assets/images/Union.svg' alt='' />
				</button>
			</div>
		</div>
	)
}

export default Header
