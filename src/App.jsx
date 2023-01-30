import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero';
import './App.css'


function App() {

    return (
        <div className="App">
            <Navbar />
            <Hero />
            <section className='hi'>
                <h1>Hola soy una seccion</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam beatae doloribus, nostrum suscipit dignissimos nobis cum at nam reiciendis non aut quibusdam. Ab nesciunt nobis consequatur voluptas accusamus odit ipsum.
                </p>
            </section>
        </div>
    )
}

export default App
