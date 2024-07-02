import { useNavigate } from 'react-router-dom'
import styles from './Modal.module.css'

function Modal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
	const navigate = useNavigate()

	const returnToHome = () => {
		navigate('/')
	}

	return (
		<>
			{isOpen && (
				<div className={styles.modal}>
					<div className={styles.modalWrapper}>
						<div className={styles.modalContent}>
							<p>
								Are you sure you want to leave this test with no way to return?
							</p>
							<div className={styles.btnWrapper}>
								<button onClick={returnToHome}>Accept</button>
								<button onClick={onClose}>Cancel</button>
							</div>
						</div>
					</div>
				</div>
			)}
		</>
	)
}

export default Modal
