import React from 'react';
import './chat.css';

const Chat = () => {
	return (
		<div className="chat">
			<div className="top">
				<div className="user">
					<img src="./avatar.png" alt="user" />
					<div className="texts">
						<span>Jane Doe</span>
						<p>Lorem ipsum dolor sit, amet.</p>
					</div>
				</div>
				<div className="icons">
					<img src="./phone.png" alt="phone icon" />
					<img src="./video.png" alt="video icon" />
					<img src="./info.png" alt="info icon" />
				</div>
			</div>
			<div className="center"></div>
			<div className="bottom">
				<div className="icons">
					<img src="./img.png" alt="" />
					<img src="./camera.png" alt="" />
					<img src="./mic.png" alt="" />
				</div>
				<input type="text" placeholder="Type a message" />
				<div className="emoji">
					<img src="./emoji.png" alt="emoji icon" />
				</div>
				<button className="sendButton">Send</button>
			</div>
		</div>
	);
};

export default Chat;
