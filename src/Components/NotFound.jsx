import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/notFound.scss'
const NotFound = () => {
	const urlChange = useNavigate()
	return (
		<div className='notFound'>
			<div className="mainText">Not found!</div>
			<div className="goBack"><button onClick={() => urlChange(-1)}>← Go back</button></div>
		</div>
	);
};

export default NotFound;