
interface ResultProps {
  score: number,
  totalQuestions: number,
  handleReset: () => void,
  username: string
}

const Result = ({ score, totalQuestions, handleReset, username }: ResultProps) => {
  return (
    <div className="w-full max-w-md mx-auto my-4 p-8 bg-white/90 backdrop-blur-md rounded-2xl shadow-xl border border-white/50 text-center flex flex-col items-center gap-6">
      <p className="text-xl font-black text-slate-800 tracking-wide uppercase">
        Game over! Your score is {score}/{totalQuestions}
      </p>

      <div className="p-4 bg-slate-50/80 rounded-xl border w-full sm:text-lg font-bold text-slate-700 capitalize">
        {score <= 2 ? <p>{username}, that was disappointing.</p>
          : score <= 4 ? <p>not too shabby, {username}.</p>
            : <p>Impressive, {username}!</p>}
      </div>
      <button onClick={handleReset} className="w-full py-3.5 px-6 bg-amber-400 hover:bg-amber-500 text-slate-900 font-bold text-lg rounded-xl shadow-md  cursor-pointer">
        Play Again
      </button>
    </div>
  )
}

export default Result