import React, {useState, useEffect} from 'react';

function Example(){
    const [count, setCount] = useState(0);

    //Similaire à componentDidMount et componentDidupdate :

    useEffect(() =>{
        //Met à jour le titre du doc via l'api du navigateur
        document.title = `Vous avez cliqué ${count} fois`;
    });

    return(
        <div>
            <p>Total: {count} fois</p>
            <button onClick={()=>setCount(count + 1)}>
                Clique ici pour ajouter 1
            </button>
        </div>
    )
}
export default Example