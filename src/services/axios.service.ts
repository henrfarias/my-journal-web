import axios from 'axios'

export const instance = axios.create({
  baseURL: 'http://localhost:3003',
})

export const TOKEN =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjBiNGFiMDY4LTI2ODUtNDRlMC05OGU2LTY5Y2ZkNjIyYjVkOCIsIm5pY2tuYW1lIjoiaGVucmZhcmlhcyIsImlhdCI6MTY3NTU2ODY0MiwiZXhwIjoxNzA3MTI2MjQyfQ.Q9ijjktcKIqyC6OmgWkf6-St9tZb3QaaGO_QSB_9HWo'
