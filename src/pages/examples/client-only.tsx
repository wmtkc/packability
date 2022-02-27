import { NextPage } from 'next'

import App from '@components/App'
import BookList from '@components/BookList'
import InfoBox from '@components/InfoBox'
import Header from '@components/OldHeader'
import Submit from '@components/forms/BookSubmit'

const ClientOnlyPage: NextPage = props => (
    <App>
        <Header />
        <InfoBox>
            ℹ️ This page shows how to use Apollo only in the client. If you
            <a href="/client-only">reload</a> this page, you will see a loader
            since Apollo didnt fetch any data on the server. This is useful when
            the page doesnt have SEO requirements or blocking data fetching
            requirements.
        </InfoBox>
        <Submit />
        <BookList />
    </App>
)

export default ClientOnlyPage
