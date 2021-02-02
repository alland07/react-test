import React, {useState} from 'react';

function useStateExemple(){
    //déclarons une nouvelle variable d'état, que nous appellerons count

    const [count, setCount] = useState(0);

    return(
        <div>
            <p>Total: {count} fois</p>
            <button onClick={()=>setCount(count + 1)}>
                Clique ici pour ajouter 1
            </button>
            <button onClick={()=>setCount(count - 1)}>
                Clique ici pour enlever 1
            </button>
            <button onClick={()=>setCount(0)}>
                Clique ici pour reset
            </button>
        </div>   
    );
}

export default useStateExemple