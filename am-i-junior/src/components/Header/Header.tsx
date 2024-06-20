import styles from './Header.module.css'

function header() {
	return (
		<div className={styles.container}>
			<div className={styles.wrapper}>
				<h2>React Entry Level</h2>
				<p>Initial practice</p>
			</div>
			<div className={styles.actionContainer}>
				<div className={styles.timerContainer}>
					<img src="/src/assets/images/Vector.svg" alt="Clocks" />
					<p>Timeout after 3:42</p>
				</div>
				<button><img src="/src/assets/images/Union.svg" alt="" /></button>
			</div>
		</div>
	);
}

export default header;