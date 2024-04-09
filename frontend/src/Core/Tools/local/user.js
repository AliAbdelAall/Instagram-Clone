const setLocalUser = (token) => {
  localStorage.token = token
}

const getLocalUser = () => {
  const token = localStorage.token
  if (token) {
    return token
  } else {
    return false
  }
}

const removeLocalUser = () => {
  localStorage.removeItem('token')
}


export { setLocalUser, getLocalUser, removeLocalUser }
