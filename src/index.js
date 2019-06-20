import React from 'react'
import ReactDOM from 'react-dom'
import { SimpleForm } from './SimpleForm'
import './styles.css'

function App() {
  return <SimpleForm />
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
