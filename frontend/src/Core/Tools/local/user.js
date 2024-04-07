const setLocalUser = (token) => {
  localStorage.token = JSON.stringify(token)
}

const getLocalUser = () => {
  const token = localStorage.token
  if (token) {
    return JSON.parse(token)
  } else {
    return false
  }
}

const removeLocalUser = () => {
  localStorage.removeItem('token')
}


export { setLocalUser, getLocalUser, removeLocalUser }
