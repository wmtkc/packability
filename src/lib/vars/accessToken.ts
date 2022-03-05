/**
 * Access Token
 */
import { makeVar } from '@apollo/client'

let accessToken: string = null

export const accessTokenVar = makeVar<string>(accessToken)
