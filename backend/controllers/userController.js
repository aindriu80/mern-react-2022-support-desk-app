const registerUser = (req, res) => {
  res.send('Register Route')
}

const loginUser = (req, res) => {
  res.send('LOGIN Route')
}

module.exports = {
  registerUser,
  loginUser,
}
