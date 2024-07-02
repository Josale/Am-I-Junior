import { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage/HomePage'
import QuizPage from './pages/QuizPage/QuizPage'
import { supabase } from './supabase'

function App() {
  const [questions, setQuestions] = useState<any[]>([])

  useEffect(() => {
    async function getQuestionsAndOptions() {
      // Get a questions
      const { data: questionsData, error: questionsError } = await supabase
        .from('questions')
        .select('*')
      if (questionsError) {
        console.error('Questions error:', questionsError)
        return
      }

      // Get a response options
      const { data: optionsData, error: optionsError } = await supabase
        .from('options')
        .select('*')
      if (optionsError) {
        console.error('Response error:', optionsError)
        return
      }

      // Create an object to storage questions with options
      const questionsWithOptions = questionsData.map((question: any) => {
        // The filter of question options
        const questionOptions = optionsData.filter(
          (option: any) => option.question_id === question.id
        )
        return { ...question, options: questionOptions }
      })

      // Install states
      setQuestions(questionsWithOptions)
      console.log(questions)
    }

    getQuestionsAndOptions()
  }, [])
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={<HomePage />}
        />
        <Route
          path="/quiz"
          element={<QuizPage questions={questions} />}
        />
      </Routes>
    </>
  )
}

export default App
