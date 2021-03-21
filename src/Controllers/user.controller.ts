import { RequestHandler, Request, Response } from 'express'

import user from '../Models/user'

export const login: RequestHandler = async (req: Request, res: Response) => {
  res.json({ data: req.user })
}

export const signUp: RequestHandler = async (req: Request, res: Response) => {
  try {
    const { username, email, password } = req.body

    if (!username || !email || !password) {
      res.status(400).json({ data: 'error', msg: 'missing data' })
    }

    const existUsername = await user.findOne({ username: username }).exec()
    const existEmail = await user.findOne({ email: username }).exec()

    if (!existUsername && !existEmail) {
      console.log(req.body)
      const result = await user.create(req.body)

      res.status(400).json({ data: 'success', msg: result })
    }

    res.status(400).json({ data: 'error', msg: 'check your data' })
  } catch (error) {
    res.status(400).json({ data: 'error', msg: 'Problem in database' })
  }
}
