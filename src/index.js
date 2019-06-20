import React from 'react'
import ReactDOM from 'react-dom'
import './styles.css'
import { Form } from './Form'
import { SimpleForm } from './simpleForm/index'

function App() {
  return (
    <SimpleForm
      initialValue={{
        numberOfChoices: 3,
        choices: [
          { value: 5, label: 'Very good' },
          { value: 4, label: 'Good' },
          { value: 3, label: 'So So' },
          { value: 2, label: 'Bad' },
          { value: 1, label: 'Very bad' }
        ]
      }}
    >
      <Form />
    </SimpleForm>
  )
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
