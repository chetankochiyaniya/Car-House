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
          projectID="e063e62e-9429-4735-9b55-18fe21b973f5"
          userName="Chetan_Kochiyaniya"
          userSecret="Chetan@2020"
        />
      </SideBar>
    </>
  )
}

export default AdminChatSupport
