import jwt from 'jsonwebtoken'

export default function login(req, res) {
  const { username, password } = JSON.parse(req.body)
  if (username === process.env.USERNAME && password === process.env.PASSWORD) {
    const token = jwt.sign({ username }, 'designer', { expiresIn: '1h' })
    res.status(200).json({ token })
  } else {
    res.status(400).json({ success: false })
  }
}
