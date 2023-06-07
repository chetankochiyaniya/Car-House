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
import { useDispatch, useSelector } from 'react-redux'
import { HandleModel } from '../../../redux/actions'
import { toast } from 'react-toastify'
import axios from 'axios'

const ChatSupport = () => {
  const { loggedInUser } = useSelector((state) => state.userManagementReducer)
  const [open, setOpen] = useState(false)
  const [message, setMessage] = useState('')
  const [chatMessages, setChatMessages] = useState([
    { id: 1, text: 'Hello, how can I assist you?', sender: 'Admin' }
  ])
  const chatContainerRef = useRef(null)
  const dispatch = useDispatch()

  const showErrorToast = () =>
    toast.error('For any inquiry..sign-in/sign-up!', {
      position: 'top-center',
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'light'
    })

  const handleToggleDialog = () => {
    if (loggedInUser !== null) {
      setOpen(!open)
    } else {
      showErrorToast()
      dispatch(HandleModel(true))
    }
  }

  const handleSendMessage = () => {
    event?.preventDefault
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

    sendChatMessage(user?.id, message, user?.username) // Pass the message as an argument
  }

  useEffect(() => {
    // Scroll chat container to bottom on new message
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight
    }
  }, [chatMessages])

  function getOrCreateUser(callback) {
    axios
      .put(
        'https://api.chatengine.io/users/',
        {
          username: loggedInUser[0]?.values.email,
          email: loggedInUser[0]?.values.email,
          secret: loggedInUser[0]?.values.email
        },
        { headers: { 'Private-Key': process.env.REACT_APP_PRIVATE_KEY } }
      )
      .then((r) => callback(r.data))
      .catch((e) => console.log('Get or create user error', e))
  }

  function getOrCreateChat(callback) {
    axios
      .put(
        'https://api.chatengine.io/chats/',
        { usernames: [loggedInUser[0]?.values.email, 'Chetan_Kochiyaniya'], is_direct_chat: true },
        {
          headers: {
            'Project-ID': process.env.REACT_APP_PROJECT_ID,
            'User-Name': loggedInUser[0]?.values.email,
            'User-Secret': loggedInUser[0]?.values.email
          }
        }
      )
      .then((r) => callback(r.data))
      .catch((e) => console.log('Get or create chat error', e))
  }

  const [user, setUser] = useState()
  const [chat, setChat] = useState()
  function handleData() {
    console.log('Sending Email', loggedInUser[0]?.values.email, 'user===', user, 'chat-===', chat)

    getOrCreateUser((user) => {
      setUser(user)
      console.log('user', user)
      getOrCreateChat((chat) => {
        setChat(chat)
        console.log('chat', chat)
      })
    })
  }

  // const sendChatMessage = async (chatId, message, senderUsername) => {
  //   try {
  //     const payload = {
  //       "text": message
  //     }

  //     await axios.post(`https://api.chatengine.io/chats/179025/messages/`, {
  //       headers: {
  //         'Project-ID': process.env.REACT_APP_PROJECT_ID,
  //         'User-Name': senderUsername,
  //         'User-Secret': senderUsername
  //       },
  //       body: JSON.stringify(payload)
  //     })
  //     console.log('Message sent successfully!')
  //   } catch (error) {
  //     console.log('Error sending message:', error)
  //   }
  // }

  const sendChatMessage = async (chatId, message, senderUsername) => {
    try {
      const payload = {
        text: 'Hello world!'
      }

      const requestOptions = {
        method: 'POST',
        headers: {
          'Project-ID': process.env.REACT_APP_PROJECT_ID,
          'User-Name': senderUsername,
          'User-Secret': senderUsername
        },
        body: JSON.stringify(payload),
        redirect: 'follow'
      }

      const response = await axios.post(
        `https://api.chatengine.io/chats/${chatId}/messages/`,
        requestOptions
      )
      console.log('Message sent successfully!', response.data)
    } catch (error) {
      console.log('Error sending message:', error)
    }
  }

  // Function to retrieve messages
  const retrieveChatMessages = async () => {
    try {
      const response = await axios.get(`https://api.chatengine.io/chats/${chat.id}/messages/`, {
        headers: {
          'Project-ID': process.env.REACT_APP_PROJECT_ID,
          'User-Name': loggedInUser[0]?.values.email,
          'User-Secret': loggedInUser[0]?.values.email
        }
      })
      const messages = response.data
      console.log('Retrieved messages:', messages)
      // Process and use the retrieved messages as needed
      // Update the chatMessages state with the retrieved messages
      setChatMessages(messages)
    } catch (error) {
      console.log('Error retrieving messages:', error)
    }
  }

  useEffect(() => {
    handleData()
  }, [])

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
              onClick={() => handleSendMessage(event)}
              sx={{
                marginLeft: '1rem',
                backgroundColor: 'var(--red-color)',
                '&:hover': { backgroundColor: 'var(--btn-hover)' }
              }}>
              <SendIcon />
            </Button>
            <Button
              variant="contained"
              onClick={retrieveChatMessages}
              sx={{
                marginLeft: '1rem',
                backgroundColor: 'var(--red-color)',
                '&:hover': { backgroundColor: 'var(--btn-hover)' }
              }}>
              get
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}

export default ChatSupport
