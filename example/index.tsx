import React from 'react'
import { render } from 'react-dom'
import { Form } from 'react-final-form'
import { TextInput, Select } from '../src'

const Components = ({ values }) => {
    return (
        <>
            <div className='bg-gray-400 p-12'>
                <TextInput name='text' placeholder='text' />
                <Select name='sel'>
                    <option value='dsfg'>sele</option>
                    <option value='dsfg'>2</option>
                    <option value='dfsg'>3</option>
                </Select>
            </div>
            <pre>{JSON.stringify(values, null, 4)}</pre>
        </>
    )
}

const App = () => {
    return <Form validate={() => ({text: 'aia'})} onSubmit={alert} component={Components} />
}

render(<App />, document.getElementById('root'))

// @ts-ignore
if (module.hot) {
    // @ts-ignore
    module.hot.accept()
}
