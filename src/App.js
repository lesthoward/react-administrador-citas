import React, { Fragment, useState, useEffect } from 'react';
import Appointment from './components/Appointment';
import Form from './components/Form';

const App = () => {
	const initialAppointment = JSON.parse(localStorage.getItem('appointments')) || []

	const [appointmentArr, setAppointmentArr] = useState(initialAppointment);

	useEffect(() => {
		localStorage.setItem('appointments', JSON.stringify(appointmentArr))
	}, [appointmentArr])
	
	const addAppointmnet = (uniqAppoinment) => {
		setAppointmentArr([...appointmentArr, uniqAppoinment]);
	};

	const deleteAppointment = id => {
		const newAppointmentArr = appointmentArr.filter(apointment => apointment.id !== id)
		setAppointmentArr(newAppointmentArr)
	}

	const title = appointmentArr.length ? 'Manage your appointments' : 'There aren\'t appointments'
	return (
		<Fragment>
			<h1>Administración de Pacientes</h1>
			<div className="container">
				<div className="row">
					<div className="one-half column">
						<Form addAppointmnet={addAppointmnet} />
					</div>
					<div className="one-half column">
						<h2>{title}</h2>
						{appointmentArr.map((singleAppointment) => (
							<Appointment
								key={singleAppointment.id}
								singleAppointment={singleAppointment}
								deleteAppointment={deleteAppointment}
							/>
						))}
					</div>
				</div>
			</div>
		</Fragment>
	);
};

export default App;
