/**
 * App Configuration State
 */
import { makeVar } from '@apollo/client'

let accessToken: string = null
let refreshToken: string = null

export const accessTokenVar = makeVar<string>(accessToken)
export const refreshTokenVar = makeVar<string>(refreshToken)
