import { useState } from 'react'
import Header from './Header/Header'
import Modal from './Modal/Modal'
import Quiz from './Quiz/Quiz'

type QuizpageProps = {
	questions: any[];
}

function quizApp({ questions }: QuizpageProps) {
	const [modalInfoIsOpen, setModalInfoIsOpen] = useState(false);

	const setFalse = () => {
		setModalInfoIsOpen(false);
	}

	const setTrue = () => {
		setModalInfoIsOpen(true);
	}

	return (
		<>
		{modalInfoIsOpen &&
			<Modal 
			isOpen={modalInfoIsOpen}
			onClose={setFalse}
			/>
		}
		<Header isOpenWarning={setTrue}/>
		<Quiz questions={ questions }/>
		</>
	);
}

export default quizApp;