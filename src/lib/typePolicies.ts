import { concatPagination } from '@apollo/client/utilities'

import { appConfigVar } from './vars/initialAppConfig'

export const typePolicies = {
    Query: {
        fields: {
            appConfig: {
                read() {
                    return appConfigVar()
                },
            },
            bags: concatPagination(),
            items: concatPagination(),
            kits: concatPagination(),
        },
    },
}
