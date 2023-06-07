import React, { useState, useRef, useEffect } from 'react'
import Box from '@mui/material/Box'
import {
  Avatar,
  Stack,
  Tooltip,
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  Button
} from '@mui/material'
import SendIcon from '@mui/icons-material/Send'

const ChatSupport = () => {
  const [open, setOpen] = useState(false)
  const [message, setMessage] = useState('')
  const [chatMessages, setChatMessages] = useState([
    { id: 1, text: 'Hello, how can I assist you?', sender: 'Admin' }
  ])
  const chatContainerRef = useRef(null)

  const handleToggleDialog = () => {
    setOpen(!open)
  }

  const handleSendMessage = () => {
    if (message.trim() === '') {
      return
    }

    const newMessage = {
      id: chatMessages.length + 1,
      text: message,
      sender: 'User'
    }

    setChatMessages((prevMessages) => [...prevMessages, newMessage])
    setMessage('')
  }

  useEffect(() => {
    // Scroll chat container to bottom on new message
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight
    }
  }, [chatMessages])

  return (
    <>
      <Tooltip title="Customer Support">
        <Box
          sx={{
            position: 'fixed',
            bottom: 16,
            right: 16,
            zIndex: 9999
          }}>
          <Stack direction="row" spacing={2}>
            <Avatar
              alt="Remy Sharp"
              src="/assets/team-3.jpg"
              sx={{ width: 48, height: 48, cursor: 'pointer' }}
              onClick={handleToggleDialog}
            />
          </Stack>
        </Box>
      </Tooltip>

      <Dialog
        open={open}
        onClose={handleToggleDialog}
        fullWidth
        maxWidth="sm"
        PaperProps={{
          sx: {
            borderRadius: '0.5rem',
            position: 'fixed',
            bottom: 35,
            right: 1,
            display: 'flex',
            flexDirection: 'column',
            maxWidth: 300,
            marginRight: 4,
            maxHeight: 400
          }
        }}>
        <DialogTitle
          sx={{
            backgroundColor: 'var(--red-color)',
            marginBottom: 2,
            color: 'var(--white-color)'
          }}>
          Chat Support
        </DialogTitle>
        <DialogContent
          sx={{
            display: 'flex',
            flexDirection: 'column',
            height: '400px',
            padding: '0.5rem 1rem',
            overflow: 'hidden'
          }}>
          <div
            ref={chatContainerRef}
            style={{
              flex: 1,
              overflowY: 'auto',
              marginBottom: '1rem'
            }}>
            {chatMessages.map((chat) => (
              <div
                key={chat.id}
                style={{
                  background: chat.sender === 'User' ? 'rgb(188 214 234)' : 'rgb(235 233 234)',
                  padding: '0.5rem 1rem',
                  borderRadius: '0.5rem',
                  marginBottom: '0.5rem',
                  width: 'max-content',
                  maxWidth: '75%',
                  marginLeft: chat.sender !== 'User' ? 'auto' : 0
                }}>
                {chat.text}
              </div>
            ))}
          </div>

          <div style={{ display: 'flex', alignItems: 'center' }}>
            <TextField
              label="Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              variant="outlined"
              size="small"
              fullWidth
            />
            <Button
              variant="contained"
              onClick={handleSendMessage}
              sx={{
                marginLeft: '1rem',
                backgroundColor: 'var(--red-color)',
                '&:hover': { backgroundColor: 'var(--btn-hover)' }
              }}>
              <SendIcon />
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}

export default ChatSupport
