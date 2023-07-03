import '@/styles/globals.css'
import Footer from '../app/components/footer'
import Navbar from '../app/components/navbar'

export default function App({ Component, pageProps }) {
  return(
    <div className="bg-white">
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </div>
  )
  
}