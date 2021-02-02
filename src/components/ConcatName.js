const personne = {
    prenom:'Allan',
    nom:'DUCHE'
}

function ConcatMoi(moi){
    return(
        moi.prenom + ' ' + moi.nom
    )
}
// Le commentaire en JSX  {/* */}
const ConcatName = () =>{
    return(
        <>
            <p>Yo {ConcatMoi(personne)}</p>
        </>
    )
}
export default ConcatName