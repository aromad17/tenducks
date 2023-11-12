import Footer from "@/components/Footer"
import NavBar from "@/components/NavBar"
import "../styles/globals.css"

export default function App({ Component, pageProps }) {

    return (
        <div className="bg">
            <NavBar />
            <Component {...pageProps} />
            <Footer />
        </div>
    )
}
