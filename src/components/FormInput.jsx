import React from 'react'
import { useForm } from 'react-hook-form'
import "./FormInput.css"

const FormInput = ({ setInputSearch }) => {

    const { register, handleSubmit, reset } = useForm()

    const defaultValues = {
        name: ""
    }

    const submit = data => {
        setInputSearch(data.name)
        reset(defaultValues)
    }

    return (
        <form className='form__input' onSubmit={handleSubmit(submit)} >
            <input className='input' {...register("name")} type="text" placeholder='Type a location id' id='name' />
            <button className='btn'>Search</button>
        </form>
    )
}

export default FormInput