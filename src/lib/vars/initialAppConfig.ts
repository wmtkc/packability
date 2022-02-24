/**
 * App Configuration State
 */
import { makeVar } from '@apollo/client'

interface AppConfig {
    nightMode: boolean
}

const defaultConfig = {
    nightMode: false,
}

let initialAppConfig: AppConfig = defaultConfig

if (typeof window !== 'undefined') {
    initialAppConfig =
        JSON.parse(window.localStorage.getItem('packability.appConfig')) ??
        defaultConfig
}

export const appConfigVar = makeVar<AppConfig>(initialAppConfig)
