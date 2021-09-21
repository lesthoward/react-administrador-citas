import React, { Fragment, useState } from 'react';
import {v4 as uuid } from 'uuid'
import PropTypes from 'prop-types'

const Form = ({addAppointmnet}) => {
    const [appointment, setAppointment] = useState({
        pet: '',
        owner: '',
        date: '',
        time: '',
        symptom: ''
    })
    const [error, setError] = useState(false)

    const handleChange = e => {
        setAppointment({
            ...appointment,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault()
        const valuesArr = Object.values(appointment)
        const notEmpty = valuesArr.every(value => value.trim() !== '')
        setError(!notEmpty)
        if(!notEmpty) return

        appointment.id = uuid()

        addAppointmnet(appointment)
        setAppointment({
            pet: '',
            owner: '',
            date: '',
            time: '',
            symptom: ''
        })
        e.target.reset()
    }
    return ( 
        <Fragment>
            <h2>Create Appointment</h2>
            {error ?  <p className="alerta-error">Todos Los Campos Son Obligatorios</p> : null}
            <form
                onSubmit={handleSubmit}
            >
                <label>Pet Name</label>
                <input
                    type="text"
                    name="pet"
                    className="u-full-width"
                    placeholder="Pinky"
                    onChange={handleChange}
                />
                <label>Owner</label>
                <input
                    type="text"
                    name="owner"
                    className="u-full-width"
                    placeholder="Xinia Abarca Nuñez"
                    onChange={handleChange}
                />
                <label>Date</label>
                <input
                    type="date"
                    name="date"
                    className="u-full-width"
                    onChange={handleChange}
                /><label>Time</label>
                <input
                    type="time"
                    name="time"
                    className="u-full-width"
                    onChange={handleChange}
                />
                <label>Symptom</label>
                <textarea
                    className="u-full-width"
                    name="symptom"
                    onChange={handleChange}
                ></textarea>
                <button 
                    type="submit"
                    className="u-full-width button-primary"
                >Send</button>
            </form>
        </Fragment>
    );
}

// I think is no longer available
Form.proTypes = {
    handleSubmit: PropTypes.object.isRequired
}

export default Form;