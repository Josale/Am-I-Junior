import { useNavigate } from 'react-router-dom'
import styles from './HomePage.module.css'

function HomePage() {

	const navigate = useNavigate();

  const handleClick = () => {
    navigate('/quiz');
	}

	return (
		<>
		<div className={styles.container}>
			<nav>
				<p>Am I Junior</p>
				<div className={styles.wrapper}>
					<button>Sign Up</button>
					<button>Sign In</button>
				</div>
			</nav>
			<button onClick={handleClick}>Check your knowledge</button>
		</div>
		</>
	);
}

export default HomePage;