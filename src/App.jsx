import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero';
import './App.css'
import SectionAds from './components/secciones/SectionAds';
import SectionIA from './components/secciones/SectionIA';


function App() {

    return (
        <div className="App">
            {/* este componente contiene todo lo que estará a primera vista*/}
            <div className='header'>
                <Navbar />
                <Hero />
            </div>
            <div className='main'>
                <SectionAds />
                <SectionIA />
            </div>
            <footer>

            </footer>
        </div>
    )
}

export default App
