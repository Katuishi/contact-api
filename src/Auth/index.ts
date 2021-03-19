import passport from "passport";
import { Strategy as LocalStrategy } from "passport-local";

import { Strategy as JWTstrategy } from "passport-jwt";
import { ExtractJwt as ExtractJWT } from "passport-jwt";
import createToken from "./Tokenization";
import { SECRET_PASS } from "../Config";
import User from "../Models/user";


passport.use(
  "login",
  new LocalStrategy(async (username: string, password: string, done: any) => {
    try {
      const currentUser = await User.findOne({ username: username }).exec();
      if (!currentUser) {
        return done(null, "username or password is invalid");
      }
      
      const validate = User.comparePassword(password,currentUser.password);
     
      if (!validate) {
        return done(null, false, "username or password is invalid");
      }
     
      return done(null,{ token:createToken(currentUser)});
    } catch (error) {
      return done(null,false,"Error database");
    }
  })
);


passport.use(
  new JWTstrategy(
    {
      secretOrKey: `${SECRET_PASS}`,
      jwtFromRequest: ExtractJWT.fromHeader('auth-token'),
    },
    async (payload, done) => {
      try {
        const _user = await User.findOne({_id:payload.id}).exec()
        if(_user){
          return done(null,_user)
        }
        return done(null,false);
      } catch (error) {
        done(error);
      }
    }
  )
);
