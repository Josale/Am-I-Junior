import { useState } from 'react'
import { data } from '../assets/data'

function question() {

	let [index, setIndex] = useState<number>(0);
  let [question, setQuestion] = useState(data[index])

	return (

		<>
		<h3 className='question'>{index + 1}. {question.question}</h3>
        <ul className='question-list'>
          {question.map(e => {})}
        </ul>
        <button className='prev-button'>Prev</button>
        <button className='next-button'>Next</button>
		</>
	);
}

export default question;