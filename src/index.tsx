import { Form as FinalForm, useField } from 'react-final-form'
import React, { ComponentProps } from 'react'
import {
    Form as MobiForm,
    FormGroup,
    FormGroupTitle,
    Input,
    Checkbox,
    Dropdown,
    Label,
    InputComponent,
    DropdownComponent,
} from '@mobiscroll/react-lite'
import { BaseProps } from './types'
import '@mobiscroll/react-lite/dist/css/mobiscroll.min.css'

export type TextInputProps = BaseProps & ComponentProps<InputComponent>

export const TextInput = ({ name, children = '', ...rest }: TextInputProps) => {
    const { input, meta } = useField(name)

    return (
        <Input
            type='text'
            name={name}
            {...baseProps}
            valid={!meta.touched || !meta.error}
            errorMessage={meta.error}
            theme='ios'
            {...input}
            {...rest}
        >
            {children || name}
        </Input>
    )
}

export type SelectProps = BaseProps & ComponentProps<DropdownComponent>

const baseProps = {
    labelStyle: 'floating',
    inputStyle: 'box',
}

export const Select = ({ name, children = '', ...rest }: SelectProps) => {
    const { input, meta } = useField(name, {})
    return (
        <Dropdown
            type='text'
            name={name}
            {...baseProps}
            valid={!meta.touched || !meta.error}
            errorMessage={meta.error}
            theme='ios'
            {...input}
            {...rest}
        >
            {children}
        </Dropdown>
    )
}
