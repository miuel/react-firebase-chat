import React from 'react'
import { render } from 'react-dom'
import firebase from 'firebase'

firebase.initializeApp({
  apiKey: "AIzaSyD4nD6amyidonknmoehow71g-m7pPA8OyEs-8",
  authDomain: "react-firebase-chat-d63b7.firebaseapp.com",
  databaseURL: "https://react-firebase-chat-d63b7.firebaseio.com",
  storageBucket: "react-firebase-chat-amyb7.appspot.com"
})

import App from './components/App'

render(<App />, document.getElementById('app'))
