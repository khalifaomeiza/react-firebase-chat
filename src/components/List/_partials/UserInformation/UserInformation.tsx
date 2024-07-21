import React from 'react'
import './UserInformation.css'

const UserInformation = () => {
  return (
		<div className="userInformation">
          <div className="user">
              <img src="./avatar.png" alt="" />
              <h2 className='userName'>John Doe</h2>
            </div>
			<div className="icons">
				<img src="./more.png" alt="more icon" />
				<img src="./video.png" alt="video icon" />
				<img src="./edit.png" alt="edit icon" />
			</div>
		</div>
	);
}

export default UserInformation
