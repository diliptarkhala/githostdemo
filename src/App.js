import React from 'react'
import Io from 'socket.io-client'
export default function App() {
  const socket = Io(
    // 'https://us-central1-pacdocv2-api.cloudfunctions.net/orders',
    'http://localhost:8080',
  )
  socket.on('broadcast', (msg) => {
    console.log('broadCast', msg)
  })
  socket.on('newPing', (msg) => {
    console.log('newPing', 'Someone is trying to ping')
  })

  const ping = () => {
    console.log('sent ping')
    socket.emit('ping', { msg: 'I want to test' })
  }

  return (
    <div>
      <h1>Socket Demo</h1>
      <button onClick={ping}>Ping</button>
    </div>
  )
}
