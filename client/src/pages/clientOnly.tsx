import App from 'src/components/App'
import InfoBox from 'src/components/InfoBox'
import Header from 'src/components/Header'
import Submit from 'src/components/Forms/BookSubmit'
import BookList from 'src/components/BookList'
import { NextPage } from 'next'

const ClientOnlyPage: NextPage = (props) => (
  <App>
    <Header />
    <InfoBox>
      ℹ️ This page shows how to use Apollo only in the client. If you 
      <a href="/client-only">reload</a> this page, you will see a loader since
      Apollo didnt fetch any data on the server. This is useful when the page
      doesnt have SEO requirements or blocking data fetching requirements.
    </InfoBox>
    <Submit />
    <BookList />
  </App>
)

export default ClientOnlyPage