import JWT from "jsonwebtoken"
import dotenv from "dotenv"
dotenv.config()


const key = process.env.JWT_SECRET_KEY 

export function generateTokenJWT (payload,expiresIn = '1h'){
   return JWT.sign(payload,key,{expiresIn})
}

export function verifyTokenJWT (token){
  try {
    return JWT.verify(token,key)
  } catch (error) {
    return null
  }
}

export function decodeToken (token){
    return JWT.decode(token)
}