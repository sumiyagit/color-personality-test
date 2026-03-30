import { createContext, useContext, useReducer } from 'react'

const AppContext = createContext()

const initialState = {
  currentStep: 0,
  capturedImage: null,
  detectedColors: {
    skin: null,
    eyes: null,
    hair: null,
  },
  seasonResult: null,
  subSeasonResult: null,
  analysisScores: null,
  quizAnswers: [],
  error: null,
  isAnalyzing: false,
  modelsLoaded: false,
}

function appReducer(state, action) {
  switch (action.type) {
    case 'SET_STEP':
      return { ...state, currentStep: action.payload, error: null }
    case 'SET_CAPTURED_IMAGE':
      return { ...state, capturedImage: action.payload }
    case 'SET_DETECTED_COLORS':
      return { ...state, detectedColors: action.payload }
    case 'SET_SEASON_RESULT':
      return {
        ...state,
        seasonResult: action.payload.season,
        analysisScores: action.payload.scores,
      }
    case 'SET_SUB_SEASON':
      return { ...state, subSeasonResult: action.payload }
    case 'ADD_QUIZ_ANSWER':
      return { ...state, quizAnswers: [...state.quizAnswers, action.payload] }
    case 'SET_ERROR':
      return { ...state, error: action.payload, isAnalyzing: false }
    case 'SET_ANALYZING':
      return { ...state, isAnalyzing: action.payload }
    case 'SET_MODELS_LOADED':
      return { ...state, modelsLoaded: action.payload }
    case 'RESET':
      return { ...initialState }
    default:
      return state
  }
}

export function AppProvider({ children }) {
  const [state, dispatch] = useReducer(appReducer, initialState)
  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  )
}

export function useApp() {
  const context = useContext(AppContext)
  if (!context) throw new Error('useApp must be used within AppProvider')
  return context
}
