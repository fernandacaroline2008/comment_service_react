import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import LogIn from "./login";
import CommentPage from "./comment";

ReactDOM.render(
	<React.StrictMode>
		<Router>
			<Route exact path="/" component={LogIn}/>
			<Route path="/comment" component={CommentPage}/>
		</Router>
	</React.StrictMode>,
	document.getElementById('root')
);
