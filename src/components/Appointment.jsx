import React from 'react';
const Appointment = ({singleAppointment, deleteAppointment}) => {
	return (
		<div className="cita">
			<p>Pet: <span>{singleAppointment.pet}</span></p>
			<p>Owner: <span>{singleAppointment.owner}</span></p>
			<p>Date: <span>{singleAppointment.date}</span></p>
			<p>Time: <span>{singleAppointment.time}</span></p>
			<p>Symptoms: <span>{singleAppointment.symptoms}</span></p>

			<button
				className="button eliminar u-full-width"
				onClick={() => deleteAppointment(singleAppointment.id)}
			>Eliminar &times;</button>
		</div>
	);
};

export default Appointment;
