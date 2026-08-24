'use client'
import { questions } from "@/data/questions";
import Header from "@/components/Header";
import Question from "@/components/Question";
import Answers from "@/components/Answers";
import StartScreen from "@/components/StartScreen";
import Progress from "@/components/Progress";
import Result from "@/components/Results";
import { useState } from "react";

export default function Home() {
  const [isStarted, setIsStarted] = useState(false)
  const [questionIndex, setQuestionIndex] = useState(0)
  const [score, setScore] = useState(0)
  const [username, setUsername] = useState("")

  const handleStart = (name: string) => {
    setIsStarted(true)
    setUsername(name)
  }

  const handleAnswer = (answer: number) => {
    if (answer === questions[questionIndex].correctAnswer) {
      setScore(score + 1)
    }
    setQuestionIndex(questionIndex + 1)
  }

  const handleReset = () => {
    setIsStarted(true)
    setScore(0)
    setQuestionIndex(0)
  }

  const isFinished = questionIndex >= questions.length

  return (
    <div className="">
      <Header />

      {!isStarted && <StartScreen handleStart={handleStart} />}

      {isStarted && !isFinished &&
        <div>
          <Progress questionIndex={questionIndex} totalQuestions={questions.length} />
          <Question question={questions[questionIndex].question} />
          <Answers answers={questions[questionIndex].answers} handleAnswer={handleAnswer} />
        </div>}

      {isStarted && isFinished &&
        <Result score={score} totalQuestions={questions.length} handleReset={handleReset} username={username} />}

    </div>
  );
}
