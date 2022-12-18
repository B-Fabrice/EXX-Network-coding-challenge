export async function login({ username, password }) {
  const res = await fetch('/api/login', {
    method: 'POST',
    body: JSON.stringify({ username, password })
  })
  return res.json()
}

export async function refresh(token) {
  const res = await fetch('/api/refresh', {
    method: 'POST',
    body: JSON.stringify({ token })
  })
  return res.json()
}