import { Outlet } from "react-router-dom"
import Header from "../components/Header"
import Footer from "../components/Footer"
import useFetch from '../utils/hooks/useFetch'

export default function Home() {
    const { loading, data, error } = useFetch();

    if (error) {
        console.log(error)
    }

    return (
        <>
            {loading && <div>...Loading...</div>}
            {data && (
                <>
                    <Header />
                    <Outlet context={{data}}/>
                    <Footer />
                </>
            )}
        </>
    )
}