import React from 'react';
import './index.css';


function CommentRow(props) {
	return (
		<div className="comment">
			<label>{props.comment.user.name}</label>
			<span>{props.comment.text}</span>
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
					console.log(result)
					this.setState({
						isLoaded: true,
						comments: result.comments
					});
				},
				(error) => {
					console.log(error)
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
				<div id="comments">
					{comments.map(comment => (
						<div>
							<CommentRow comment={comment}/>

							<div className="comments-reply">
								{comment.replies.map(reply => (
									<div>
										<CommentRow comment={reply}/>

										<div className="comments-reply-reply">
											{reply.replies.map(reply2 => (
												<CommentRow comment={reply2}/>
											))}
										</div>
									</div>
								))}

							</div>
						</div>
					))}
				</div>
			);
		}
	}
}

export default Comments;
