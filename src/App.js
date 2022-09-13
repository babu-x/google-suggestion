import GoogleSuggestions from './components/GoogleSuggestions'

import './App.css'

const suggestionsList = [
  {id: 1, suggestion: 'Price of BMW'},
  {id: 2, suggestion: 'Oculus Quest 2 specs'},
  {id: 3, suggestion: 'Tesla Share Price'},
  {id: 4, suggestion: 'Price of Ethereum today'},
  {id: 5, suggestion: 'Latest trends in AI'},
  {id: 6, suggestion: 'Latest trends in ML'},
  {id: 7, suggestion: 'How to learn Fullstack'},
  {id: 8, suggestion: 'Best protein food'},
  {id: 9, suggestion: 'Nearest temples'},
  {id: 10, suggestion: 'Price of Ethereum'},
]

const App = () => <GoogleSuggestions suggestionsList={suggestionsList} />

export default App
