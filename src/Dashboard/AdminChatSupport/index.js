import React from 'react'
import { ChatEngine } from 'react-chat-engine'
import SideBar from '../SideBar'
import './index.css'

const AdminChatSupport = () => {
  return (
    <>
      <SideBar>
        <ChatEngine
          height="75vh"
          projectID="08b634e6-f6e7-479c-a9b2-730d5ddb76cd"
          userName="Chetan_Kochiyaniya"
          userSecret="Chetan@2020"
        />
      </SideBar>
    </>
  )
}

export default AdminChatSupport
