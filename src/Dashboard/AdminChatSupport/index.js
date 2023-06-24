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
          projectID="fed9d145-8d8f-44c1-977a-18339e9a5e89"
          userName="Chetan_Kochiyaniya"
          userSecret="Chetan@2020"
        />
      </SideBar>
    </>
  )
}

export default AdminChatSupport
