import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import SignIn from './login'
import Comments from "./comment";

ReactDOM.render(
	<React.StrictMode>
		<SignIn/>
		<Comments />
	</React.StrictMode>,
	document.getElementById('root')
);
