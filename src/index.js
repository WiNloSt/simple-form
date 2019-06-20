import React from 'react'
import ReactDOM from 'react-dom'
import './styles.css'
import { Form } from './Form'
import { SimpleForm } from './libs/simpleForm/index'
import { defaultFormState } from './survey/reducer'

function App() {
  return (
    <SimpleForm initialValue={defaultFormState}>
      <Form />
    </SimpleForm>
  )
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
