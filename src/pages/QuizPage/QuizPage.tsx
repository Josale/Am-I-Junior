import { useState } from 'react'

import Header from '../../components/Header/Header'
import Modal from '../../components/Modal/Modal'
import Quiz from '../../components/Quiz/Quiz'

type QuizPageProps = {
  questions: any[]
}

function QuizPage({ questions }: QuizPageProps) {
  const [modalInfoIsOpen, setModalInfoIsOpen] = useState(false)

  const setFalse = () => {
    setModalInfoIsOpen(false)
  }

  const setTrue = () => {
    setModalInfoIsOpen(true)
  }

  return (
    <>
      {modalInfoIsOpen && (
        <Modal
          isOpen={modalInfoIsOpen}
          onClose={setFalse}
        />
      )}
      <Header isOpenWarning={setTrue} />
      <Quiz questions={questions} />
    </>
  )
}

export default QuizPage
