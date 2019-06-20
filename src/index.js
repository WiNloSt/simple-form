import React from 'react'
import ReactDOM from 'react-dom'
import './styles.css'
import { Form } from './Form'
import { SimpleForm } from './libs/simpleForm/index'
import { useServeyData } from './survey/dataProvider'
import { sortChoices } from './survey/adapter'

function App() {
  const { loading, data } = useServeyData()

  return loading ? (
    'loading'
  ) : (
    <SimpleForm initialValue={sortChoices(data)}>
      <Form />
    </SimpleForm>
  )
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
