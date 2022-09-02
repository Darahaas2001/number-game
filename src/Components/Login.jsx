import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { selectColor, userNumber } from '../Actions';
const Login = (props) => {
	const navigate = useNavigate();

	const loginHandler = (e) => {
		//	e.preventDefault();
		navigate({
			pathname: '/game',
			search: `?username=${document.getElementById('username').value}&room=${
				document.getElementById('room').value
			}`,
		});
	};
	const colorSelectHandler = (e) => {
		props.selectColor(e.target.id);
	};
	const userNumberHandler = (e) => {
		props.userNumber(e.target.value);
	};
	return (
		<div className="ui middle aligned container segment">
			<div className="ui middle aligned center aligned grid">
				<div className="column">
					<h2 className="ui image header">
						<div className="content">Log-in </div>
					</h2>
					<span className="ui large form">
						<div className="ui stacked secondary  segment">
							<div className="field">
								<div className="ui left icon input">
									<i className="user icon"></i>
									<input
										id="username"
										type="text"
										name="name"
										placeholder="Name of the player"
										required
									/>
								</div>
							</div>
							<div className="field">
								<div className="ui left icon input">
									<i className="lock icon"></i>
									<input
										id="room"
										type="text"
										name="room"
										placeholder="room code"
										required
									/>
								</div>
							</div>
							<div className="field">
								<div className="ui inverted input">
									<input
										id="user-num"
										type="number"
										min={1}
										max={100}
										onChange={userNumberHandler}
										placeholder="Enter Desired number between 1-100"
									/>
								</div>
							</div>
						</div>

						<div className="ui error message"></div>

						<div className="ui inverted message">
							Select Your Color : <br></br>
							<br></br>
							<button
								id="red"
								className="circular ui inverted red button"
								onClick={colorSelectHandler}
							>
								Red
							</button>
							<button
								id="orange"
								className="circular ui inverted orange button"
								onClick={colorSelectHandler}
							>
								Orange
							</button>
							<button
								id="yellow"
								className="circular ui inverted yellow button"
								onClick={colorSelectHandler}
							>
								Yellow
							</button>
							<button
								id="olive"
								className="circular ui inverted olive button"
								onClick={colorSelectHandler}
							>
								Olive
							</button>
							<button
								id="green"
								className="circular ui inverted green button"
								onClick={colorSelectHandler}
							>
								Green
							</button>
							<button
								id="teal"
								className="circular ui inverted teal button"
								onClick={colorSelectHandler}
							>
								Teal
							</button>
							<button
								id="blue"
								className="circular ui inverted blue button"
								onClick={colorSelectHandler}
							>
								Blue
							</button>
							<button
								id="violet"
								className="circular ui inverted violet button"
								onClick={colorSelectHandler}
							>
								Violet
							</button>
							<button
								id="purple"
								className="circular ui inverted purple button"
								onClick={colorSelectHandler}
							>
								Purple
							</button>
						</div>
						<button
							className="ui fluid large teal submit button"
							onClick={loginHandler}
						>
							Play !!!
						</button>
					</span>
				</div>
			</div>
		</div>
	);
};
const mapStateToProps = (state) => {
	console.log(state.selectedColor);
	return { color: state.selectedColor, userNumber: state.userNumber };
};
export default connect(mapStateToProps, { selectColor, userNumber })(Login);
