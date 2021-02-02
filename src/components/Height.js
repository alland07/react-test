import React, {useState, useEffect} from 'react';
import '../Sass/components/test.scss';
import {Link} from 'react-router-dom';

function ChangeWidth(){

    const [scrolled, setScrolled] = useState(false);
    
    useEffect(() => {
        window.addEventListener("scroll", () => {
            setScrolled(window.scrollY > 200);
        });
    }, []);

    return(
        <>
        <section className={scrolled ? "head" : "head2"}>
        <div>
            <Link to="/">Home</Link>
        </div>
            <h1>Juste du texte qui ressort un peu</h1>
        </section>
        </>
    )
}
export default ChangeWidth