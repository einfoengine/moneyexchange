import MainNav from '@/components/MainNav'
import Footer from '@/components/Footer'

const Client = ({children}:{children: React.ReactNode}) => {
    return(
        <>
            <MainNav/>
            {children}
            <Footer/>
        </>
    )
}

export default Client