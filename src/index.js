import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import SignIn from './login'
import Comments from "./comment";
import CreateComment from "./createComment";

ReactDOM.render(
	<React.StrictMode>
		<SignIn/>
		<CreateComment/>
		<Comments />
	</React.StrictMode>,
	document.getElementById('root')
);
