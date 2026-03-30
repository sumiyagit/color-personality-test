import { useState } from 'react'
import { useApp } from '../../context/AppContext'
import { quizQuestions } from '../../data/quizQuestions'
import { determineSubSeason } from '../../services/seasonClassifier'
import QuizQuestion from '../quiz/QuizQuestion'

export default function SubSeasonQuiz() {
  const { state, dispatch } = useApp()
  const [currentQ, setCurrentQ] = useState(0)
  const [answers, setAnswers] = useState([])

  const season = state.seasonResult
  const questions = quizQuestions[season] || []

  const handleAnswer = (option) => {
    const newAnswers = [...answers, { subSeason: option.subSeason, score: option.score }]
    setAnswers(newAnswers)

    if (currentQ + 1 < questions.length) {
      setCurrentQ(currentQ + 1)
    } else {
      // All questions answered — determine sub-season
      const subSeason = determineSubSeason(season, newAnswers)
      dispatch({ type: 'SET_SUB_SEASON', payload: subSeason })
      dispatch({ type: 'SET_STEP', payload: 4 })
    }
  }

  if (!season || questions.length === 0) {
    return (
      <div className="flex-1 flex items-center justify-center">
        <p className="text-white/50">Something went wrong. Please start over.</p>
      </div>
    )
  }

  return (
    <div className="flex-1 flex flex-col px-5 py-6 max-w-md mx-auto w-full">
      {/* Season badge */}
      <div className="text-center mb-6">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10">
          <span className="text-sm text-white/60">Your season:</span>
          <span className="text-sm font-semibold text-white capitalize">{season}</span>
        </div>
        <p className="text-white/40 text-xs mt-2">
          Let's narrow it down to your exact sub-season
        </p>
      </div>

      {/* Question */}
      <div className="flex-1 flex flex-col justify-center">
        <QuizQuestion
          key={currentQ}
          question={questions[currentQ]}
          onAnswer={handleAnswer}
          currentIndex={currentQ}
          totalQuestions={questions.length}
        />
      </div>
    </div>
  )
}
