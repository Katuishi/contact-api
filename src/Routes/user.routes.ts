import { Router } from 'express'
import { login, signUp } from '../Controllers/user.controller'
import passport from 'passport'

// eslint-disable-next-line new-cap
const route = Router()

route.post(
  '/login',
  passport.authenticate('login', {
    session: false
  }),
  login
)

route.post('/signup', signUp)

export default route
