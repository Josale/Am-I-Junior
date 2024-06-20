import { useRef, useState } from 'react'
import { data } from '../../assets/data'
import styles from './Quiz.module.css'

function Quiz() {
  const [index, setIndex] = useState<number>(0);
	const [score, setScore] = useState<number>(1);
  const question = data[index];
	const progressLineRef = useRef<HTMLDivElement>(null);
	
  function checkAnswer(e: React.MouseEvent<HTMLInputElement>, answerIndex: number) {
    const target = e.target as HTMLInputElement;
    const label = target.closest('label');
		console.log(target)
    if (label) {
      if (question.answer === answerIndex) {
				setScore(score + 1);
        label.classList.add(styles.correct);
				console.log(score)
      } else {
        label.classList.add(styles.wrong);
      }
      disableAnswers();
    }
  }

  function disableAnswers() {
    const labels = document.querySelectorAll(`.${styles.labelWrapper}`);
    labels.forEach(label => {
      const input = label.querySelector('input');
      if (input) {
        input.disabled = true;
      }
    });
  }

  function resetOptions() {
    const labels = document.querySelectorAll(`.${styles.labelWrapper}`);
    labels.forEach(label => {
      label.classList.remove(styles.correct);
      label.classList.remove(styles.wrong);
      const input = label.querySelector('input');
      if (input) {
        input.disabled = false;
        input.checked = false;
      }
    });
  }

  function nextQuestion() {
    resetOptions();
		if (index >= 9) {
			setIndex(0);
		} else {
			setIndex(index + 1);
		}
		
		if (progressLineRef.current) {
      const newWidth = progressLineRef.current.offsetWidth + 73;
      if (newWidth > 730) {
        progressLineRef.current.style.width = '73px';
      } else {
        progressLineRef.current.style.width = `${newWidth}px`;
      }
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.progressWrapper}>
        <div className={styles.progressLine} ref={progressLineRef}></div>
      </div>
      <h1>{question.question}</h1>
      <div className={styles.options}>
        {question.options.map((option, index) => (
          <label key={index} className={styles.labelWrapper}>
            <input
              type='radio'
              name='question'
              onClick={(e) => checkAnswer(e, index)}
            />
            <span className={styles.radio}></span>
            {option}
          </label>
        ))}
      </div>
      <button onClick={nextQuestion}>Next</button>
    </div>
  );
}

export default Quiz;
