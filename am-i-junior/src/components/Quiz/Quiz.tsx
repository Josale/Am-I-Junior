import { useRef, useState } from 'react'
import styles from './Quiz.module.css'
 

type QuizProps = {
	questions: any[]
}

const Quiz = ({ questions }: QuizProps) => {
	const [index, setIndex] = useState<number>(0)
	const [score, setScore] = useState<number>(1)
  const questionDb = questions[index]
	const progressLineRef = useRef<HTMLDivElement>(null)


  console.log(questionDb)
	function checkAnswer(
		e: React.MouseEvent<HTMLInputElement>,
		isCorrect: boolean
	) {
		const target = e.target as HTMLInputElement
		const label = target.closest('label')
		console.log(target)
		if (label) {
			if (isCorrect) {
				setScore(score + 1)
				label.classList.add(styles.correct)
				console.log(score)
			} else {
				label.classList.add(styles.wrong)
			}
			disableAnswers()
		}
	}

	function disableAnswers() {
		const labels = document.querySelectorAll(`.${styles.labelWrapper}`)
		labels.forEach(label => {
			const input = label.querySelector('input')
			if (input) {
				input.disabled = true
			}
		})
	}

	function resetOptions() {
		const labels = document.querySelectorAll(`.${styles.labelWrapper}`)
		labels.forEach(label => {
			label.classList.remove(styles.correct)
			label.classList.remove(styles.wrong)
			const input = label.querySelector('input')
			if (input) {
				input.disabled = false
				input.checked = false
			}
		})
	}

	function nextQuestion() {
		resetOptions()
		if (index >= 9) {
			setIndex(0)
		} else {
			setIndex(index + 1)
		}

		if (progressLineRef.current) {
			const newWidth = progressLineRef.current.offsetWidth + 73
			if (newWidth > 730) {
				progressLineRef.current.style.width = '73px'
			} else {
				progressLineRef.current.style.width = `${newWidth}px`
			}
		}
	}

	console.log(questions)

	return (
		<div className={styles.container}>
			<div className={styles.progressWrapper}>
				<div className={styles.progressLine} ref={progressLineRef}></div>
			</div>
			 <h1>{questionDb.question_text}</h1> 
			<div className={styles.options}>
				{questionDb.options.map((option : any, index : number) => (
					<label key={index} className={styles.labelWrapper}>
						<input
							type='radio'
							name='question'
							onClick={e => checkAnswer(e, option.is_correct)}
						/>
						<span className={styles.radio}></span>
						{option.option_text}
					</label>
				))}
			</div>
			<button onClick={nextQuestion}>Next</button>
		</div>
	)
}

export default Quiz
