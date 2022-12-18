
import jwt from 'jsonwebtoken'

export default function refresh(req, res) {
  const { token } = JSON.parse(req.body)
  try {
    const { username } = jwt.verify(token, 'designer')
    const new_token = jwt.sign({ username }, 'designer', { expiresIn: '1h' })
    return res.status(200).json({ token: new_token })
  } catch(error) {
    console.log(error)
    return res.status(400).json({ success: false })
  }
}
