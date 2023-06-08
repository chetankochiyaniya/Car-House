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
  Button,
  CircularProgress,
  Typography
} from '@mui/material'
import SendIcon from '@mui/icons-material/Send'
import { useDispatch, useSelector } from 'react-redux'
import { HandleModel } from '../../../redux/actions'
import { toast } from 'react-toastify'
import axios from 'axios'
import HistoryIcon from '@mui/icons-material/History'

const ChatSupport = () => {
  const { loggedInUser } = useSelector((state) => state.userManagementReducer)
  const [open, setOpen] = useState(false)
  const [message, setMessage] = useState('')
  const [chatMessages, setChatMessages] = useState([])
  const chatContainerRef = useRef(null)
  const dispatch = useDispatch()
  const [loading, setLoading] = useState(false)

  const showErrorToast = (msg) =>
    toast.error(msg, {
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
      handleData()
      setOpen(!open)
    } else {
      showErrorToast('For any inquiry..! sign-in/sign-up')
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
      sender: user?.username
    }

    setChatMessages((prevMessages) => [...prevMessages, newMessage])
    setMessage('')

    sendChatMessage(chat?.id, message, user?.username) // Pass the message as an argument
  }

  useEffect(() => {
    // Scroll chat container to bottom on new message
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight
    }
  }, [chatMessages])

  function getOrCreateUser(callback) {
    loggedInUser &&
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
        .catch(() => showErrorToast('API Error : Create user error'))
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
      .catch(() => showErrorToast('API Error : Create chat error'))
  }

  const [user, setUser] = useState()
  const [chat, setChat] = useState()

  function handleData() {
    getOrCreateUser((user) => {
      setUser(user)
      console.log('user', user)
      getOrCreateChat((chat) => {
        setChat(chat)
        retrieveChatMessages()
        console.log('chat', chat)
      })
    })
  }

  const sendChatMessage = async (chatId, message) => {
    try {
      setLoading(true)
      const data = JSON.stringify({
        text: message
      })

      const config = {
        method: 'post',
        url: `https://api.chatengine.io/chats/${chatId}/messages/`,
        headers: {
          'Project-ID': '08b634e6-f6e7-479c-a9b2-730d5ddb76cd',
          'User-Name': user.username,
          'User-Secret': user.username,
          'Content-Type': 'application/json'
        },
        data: data
      }

      axios(config)
        .then(function (response) {
          console.log(JSON.stringify(response.data))
          setLoading(false)
        })
        .catch(function () {
          setLoading(false)
          showErrorToast('API Error : send message error')
        })
    } catch (error) {
      showErrorToast('Error sending message')
      setLoading(false)
    }
  }
  console.log(chat)
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
      setChatMessages(messages)
    } catch (error) {
      setLoading(false)
    }
  }

  useEffect(() => {
    handleData()
    // Retrieve messages initially
    retrieveChatMessages()
    // Retrieve messages at regular intervals (every 1 seconds in this example)
    const interval = setInterval(retrieveChatMessages, 1000)
    // Clean up the interval when the component unmounts
    return () => clearInterval(interval)
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
          {loading && ( // Show CircularProgress if loading state is true
            <CircularProgress
              size={40}
              sx={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)'
              }}
            />
          )}
          <div
            ref={chatContainerRef}
            style={{
              flex: 1,
              overflowY: 'auto',
              marginBottom: '1rem'
            }}>
            {chatMessages.length > 0 ? (
              chatMessages.map((chat) => {
                let res = chat.text
                let msg = res.replace(/<[^>]+>/g, '')

                return (
                  <div
                    key={chat.id}
                    style={{
                      background:
                        chat.sender_username !== 'Chetan_Kochiyaniya'
                          ? 'rgb(188 214 234)'
                          : 'rgb(235 233 234)',
                      padding: '0.5rem 1rem',
                      borderRadius: '0.5rem',
                      marginBottom: '0.5rem',
                      width: 'max-content',
                      maxWidth: '75%',
                      marginLeft: chat.sender_username !== 'Chetan_Kochiyaniya' ? 'auto' : 0
                    }}>
                    {msg}
                  </div>
                )
              })
            ) : (
              <Typography sx={{ display: 'flex', justifyContent: 'center' }}>
                Welcome to Car House
              </Typography>
            )}
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
              disabled={user && chat ? false : true}
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
              disabled={user && chat ? false : true}
              variant="contained"
              onClick={retrieveChatMessages}
              sx={{
                minWidth: '36px',
                marginLeft: '1rem',
                backgroundColor: '#aa9c99',
                '&:hover': { backgroundColor: '#aa9c997d' }
              }}>
              <HistoryIcon />
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}

export default ChatSupport
