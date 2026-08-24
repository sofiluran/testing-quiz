
interface AnswersProps {
  answers: string[]
  handleAnswer: (index: number) => void
}


const Answers = ({ answers, handleAnswer }: AnswersProps) => {
  return (
    <div className="w-full max-w-md mx-auto flex gap-4 my-4">
      {answers.map((answer, index) => (
          <button data-testid="answer-btn" key={index} onClick={() => handleAnswer(index)}
          className="w-full py-3.5 px-5 bg-white/90 hover:bg-amber-400 backdrop-blur-md border border-white/60 text-slate-800 hover:text-slate-900 font-semibold text-base sm:text-lg rounded-xl shadow-md  cursor-pointer text-center">
            {answer}
          </button>))
      }
    </div>
  )
}

export default Answers