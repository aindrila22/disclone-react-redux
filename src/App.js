import { auth } from './firebase';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import Chat from './Chat';
import { selectUser } from './features/userSlice';
import Login from './Login';
import Sidebar from './Sidebar';
import { login, logout } from "./features/userSlice";

function App() {
  const user = useSelector(selectUser);
 const dispatch = useDispatch(login);

  useEffect(() => {
auth.onAuthStateChanged((authUser) => {
  
  if (authUser) {

dispatch (
  login ({
  uid: authUser.uid,
  photo: authUser.photoURL,
  email: authUser.email,
  displayName: authUser.displayName,
})


)
console.log("user is", authUser.uid);

  }else{
dispatch(logout());
  }
})
  }, [dispatch])
  return (
    <div className="app">
{user ? (
  <>
 <Sidebar/>
<Chat/>
  </>
) : (
 <Login/>
)}

    </div>
  );
}

export default App;
