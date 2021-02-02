import React, {useState} from 'react';

function useStateTest(){
    const [moi, setMoi] = useState("Moi");

    return(
        <div>
            <p>Yo {moi}</p>
            <button onClick={()=>setMoi(moi + "!")} >
                CLique ici pour ajouter "!"
            </button>
            <button onClick={()=>setMoi("Moi")} >
                CLique ici pour ajouter reset Moi
            </button>
        </div>
    )
}

export default useStateTest