interface QuestionProps {
  question: string
}

const Question = ({ question }: QuestionProps) => {
  return (
    <div data-testid="question" className="w-full max-w-md mx-auto my-4 p-6 bg-white/90 backdrop-blur-md rounded-2xl shadow-xl border border-white/50 text-center">
      <h2 className="text-xl sm:text-2xl font-bold text-slate-800">{question}</h2>
    </div>
  )
}

export default Question