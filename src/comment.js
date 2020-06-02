import React from 'react';
import './index.css';
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import CreateComment from "./createComment";

function CommentRow(props) {
	let title = props.comment.user.name
	if (props.comment.city) {
		title = title.concat(' - ',props.comment.city)
	}
	if (props.comment.temperature) {
		title = title.concat(' ',props.comment.temperature, '°C')
	}

	return (
		<div className="comment">
			<TextField
				variant="outlined"
				fullWidth
				id="text"
				label={title}
				name="text"
				value={props.comment.text}
			/>
			<div className="comments-reply">
				{props.comment.replies.map(reply => (
					<CommentRow comment={reply}/>
				))}
			</div>
		</div>
	);
}

class Comments extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			error: null,
			isLoaded: false,
			comments: []
		};
	}

	componentDidMount() {
		const url = "http://localhost:8080/api/v1/comments";
		fetch(url)
			.then(res => res.json())
			.then(
				(result) => {
					this.setState({
						isLoaded: true,
						comments: result.comments
					});
				},
				(error) => {
					this.setState({
						isLoaded: true,
						error
					});
				}
			)
	}

	render() {
		const {error, isLoaded, comments} = this.state;
		if (error) {
			return <div>Error: {error.message}</div>;
		} else if (!isLoaded) {
			return <div>Loading...</div>;
		} else {
			return (
				<Container component="main" maxWidth="xl" className="comments">
					<Typography component="h1" variant="h5">
						Recent Posts
					</Typography>
					<div>
						{comments.map(comment => (
							<CommentRow comment={comment}/>
						))}
					</div>
				</Container>
			);
		}
	}
}

function CommentPage() {
	return (
		<Container component="main" maxWidth="xl">
			<CreateComment/>
			<Comments/>
		</Container>);
}

export default CommentPage;
