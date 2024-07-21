import React from 'react'
import "./list.css"
import UserInformation from './_partials/UserInformation/UserInformation'
import ChatList from './_partials/ChatList/ChatList'

const List = () => {
  return (
    <div className='list'>
      <UserInformation />
      <ChatList />
    </div>
  )
}
export default List
