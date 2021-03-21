import * as dotenv from 'dotenv'

dotenv.config()

export const MONGO_STRING: string = process.env.MONGO_HOST
  ? `${process.env.MONGO_HOST}:${process.env.MONGO_PORT}`
  : 'mongodb://127.0.0.1:27017'
export const PORT: number = Number.parseInt(`${process.env.PORT}`) || 3000
export const MONGO_USER: string = process.env.MONGO_USER || ''
export const MONGO_PASS: string = process.env.MONGO_PASS || ''
export const MONGO_DB: string = process.env.MONGO_DB || ''
export const SECRET_PASS: string = process.env.SECRET_PASS || 'secret_word'
