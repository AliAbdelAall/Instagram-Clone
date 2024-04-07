const setLocalUser = (token) => {
  localStorage.user = JSON.stringify(token)
}

const getLocalUser = () => {
  const user = localStorage
  if (user) {
    return JSON.parse(user)
  } else {
    return false
  }
}

const removeLocalUser = () => {
  localStorage.removeItem('user')
}


export { setLocalUser, getLocalUser, removeLocalUser }