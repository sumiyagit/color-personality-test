import { AppProvider, useApp } from './context/AppContext'
import Header from './components/layout/Header'
import StepIndicator from './components/layout/StepIndicator'
import WelcomeScreen from './components/steps/WelcomeScreen'
import CameraCapture from './components/steps/CameraCapture'
import AnalyzingScreen from './components/steps/AnalyzingScreen'
import SubSeasonQuiz from './components/steps/SubSeasonQuiz'
import ResultsScreen from './components/steps/ResultsScreen'
import RecommendationsScreen from './components/steps/RecommendationsScreen'

const STEPS = [
  WelcomeScreen,
  CameraCapture,
  AnalyzingScreen,
  SubSeasonQuiz,
  ResultsScreen,
  RecommendationsScreen,
]

function AppContent() {
  const { state } = useApp()
  const StepComponent = STEPS[state.currentStep]

  return (
    <div className="min-h-dvh flex flex-col bg-gradient-to-br from-[#0f0f1a] via-[#1a1025] to-[#0f0f1a]">
      <Header />
      {state.currentStep > 0 && state.currentStep < 5 && (
        <StepIndicator current={state.currentStep} total={5} />
      )}
      <main className="flex-1 flex flex-col">
        <StepComponent />
      </main>
    </div>
  )
}

export default function App() {
  return (
    <AppProvider>
      <AppContent />
    </AppProvider>
  )
}
