import { Container } from '@mui/system'
import React from 'react'
import { ChatEngine } from 'react-chat-engine'

const AdminChatSupport = () => {
  return (
    <>
      <Container sx={{ marginTop: '50px' }}>
        <ChatEngine
          height="80vh"
          projectID="08b634e6-f6e7-479c-a9b2-730d5ddb76cd"
          userName="Chetan_Kochiyaniya"
          userSecret="Chetan@2020"
        />
      </Container>
    </>
  )
}

export default AdminChatSupport
