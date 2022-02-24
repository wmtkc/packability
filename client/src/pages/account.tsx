import Header from '@components/header'
import sharedStyles from '@styles/shared.module.css'

export default function Account() {
    return (
        <>
            <Header titlePre="Account" />
            <div className={sharedStyles.layout}></div>
        </>
    )
}
