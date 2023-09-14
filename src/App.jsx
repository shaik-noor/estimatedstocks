import './App.css'
import HeroSection from './components/HeroSection/HeroSection'
import BannerBox from './components/BannerBox'
import NavBar from './components/NavBar'
import LinksSection from './components/LinksSection'
import AboveFooter from './components/AboveFooter'
import FooterSection from './components/FooterSection'
import InBriefSection from './components/InBriefSection'
import CopyrightSection from './components/CopyrightSection'


function App() {
  return (
    <>
      <NavBar />
      <HeroSection />
      <BannerBox />
      <InBriefSection />
      <LinksSection />
      <AboveFooter />
      <FooterSection />
      <CopyrightSection />
    </>
  )
}

export default App
