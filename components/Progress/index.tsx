interface ProgressProps {
  questionIndex: number,
  totalQuestions: number
}

const Progress = ({ questionIndex, totalQuestions }: ProgressProps) => {
  return (
    <div className="w-full max-w-md mx-auto my-4 p-4 bg-white/90 backdrop-blur-md rounded-2xl shadow-md border border-white/50">
      <div className="text-sm font-extrabold text-slate-800">Question {questionIndex + 1}/{totalQuestions}</div>
    </div>
  )
}

export default Progress