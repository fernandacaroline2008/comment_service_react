import React from 'react';
import './index.css';
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import CommentPage from "./comment";

class CreateComment extends React.Component {
	constructor(props) {
		super(props);
	}

	handleSubmit(event) {
		event.preventDefault();
		const url = "http://localhost:8080/api/v1/comments";
		const data = {
			userId: 1,
			text: event.target.elements.text.value,
			city: event.target.elements.city.value
		}
		fetch(url, {
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
			method: "POST",
			body: JSON.stringify(data)
		});
	}

	render() {
		return (
			<Container component="main" maxWidth="lg">
				<Typography component="h1" variant="h5">
					New Post
				</Typography>
				<form className="form" onSubmit={this.handleSubmit}>
					<TextField
						variant="outlined"
						required
						fullWidth
						id="text"
						label="What are you thinking?"
						name="text"
					/>
					<TextField
						variant="outlined"
						fullWidth
						id="city"
						label="City"
						name="city"
					/>
					<Button
						type="submit"
						fullWidth
						variant="contained"
						color="primary"
					>
						Post
					</Button>
				</form>
			</Container>
		);
	}
}

export default CreateComment;
