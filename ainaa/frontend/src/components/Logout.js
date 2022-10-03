import React from 'react'

export default function Logout() {
    localStorage.removeItem('userLoginStatus')
    window.location.href='/login';

  return (
    <div>
      
    </div>
  )
}
