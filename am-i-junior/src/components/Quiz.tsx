import { useState } from 'react'
import Question from './Question'

function quiz() {
  let [index, setIndex] = useState<number>(0);

	return (
		<>
		<div className='wrapper'>
			<h1 className='title'>Simple test</h1>
			<p className='version'>v. 1.0.0</p>
      <Question />
    </div>
		</>
	);
}

export default quiz;