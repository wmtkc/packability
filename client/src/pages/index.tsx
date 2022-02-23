import Header from '@components/header'
import ExtLink from '@components/rich-text/ext-link'
import Features from '@components/features'
import sharedStyles from '@styles/shared.module.css'
import Image from 'next/image'
import Login from '@components/forms/Login'
import Register from '@components/forms/Register'

export default function Index() {
  return (
    <>
      <Header titlePre="Home" />
      <div className={sharedStyles.layout}>
        <Register />
        <Login />
      </div>
    </>
  )
}
