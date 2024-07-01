import { createClient } from "@supabase/supabase-js"
import { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Homepage from './components/Homepage/Homepage'
import Quizpage from './components/Quizpage'
import './reset.css'

const supabase = createClient("https://fnesatyujdskubwgffwt.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZuZXNhdHl1amRza3Vid2dmZnd0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTk1ODU4NzgsImV4cCI6MjAzNTE2MTg3OH0.UKHV3UwE07af5FVRn4KoRfiL__oAgy2xCQJ5scWacoc")

function App() {
  const [questions, setQuestions] = useState<any[]>([]);

useEffect(() => {
  async function getQuestionsAndOptions() {

    // Get a questions
    const { data: questionsData, error: questionsError } = await supabase.from("questions").select('*');
    if (questionsError) {
      console.error("Questions error:", questionsError);
      return;
    }

    // Get a response options
    const { data: optionsData, error: optionsError } = await supabase.from("options").select('*');
    if (optionsError) {
      console.error("Response error:", optionsError);
      return;
    }

    // Create an object to storage questions with options
    const questionsWithOptions = questionsData.map((question: any) => {
      // The filter of question options
      const questionOptions = optionsData.filter((option: any) => option.question_id === question.id);
      return { ...question, options: questionOptions };
    });

    // Install states
    setQuestions(questionsWithOptions);
    console.log(questions)
  }

  getQuestionsAndOptions();
}, []);
console.log(questions)
  return (
    <>
    <Routes>
      <Route path="/" element={<Homepage />}/>
      <Route path="/quiz" element={<Quizpage questions={questions} />}/>
    </Routes>
    </>
  );
}

export default App
