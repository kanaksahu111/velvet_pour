import React from 'react'
import gsap from "gsap";
import {ScrollTrigger , SplitText} from "gsap/all";
import NavBar from './components/navBar.jsx';
import Hero from './components/Hero.jsx';

gsap.registerPlugin(ScrollTrigger,SplitText);
const App = ()=>{
    return (
        <main>
            <NavBar/>
            <Hero/>
        </main> 
    )
}
export default App;