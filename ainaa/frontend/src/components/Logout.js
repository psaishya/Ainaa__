import React from 'react'

export default function Logout() {
    localStorage.removeItem('userLoginStatus')
    localStorage.removeItem('loggeduser')
    window.location.href='/login';

  return (
    <div>
      
    </div>
  )
}
