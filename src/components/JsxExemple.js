const user = {
    firstName: 'Lorem',
    lastName: 'Ipsum'
}
function FormatName(user){
    return user.firstName + ' ' + user.lastName
}

const JsxExemple = () =>{
    return(
        <>
        <p>Bonjour {FormatName(user)} !</p>
        </>
    )
}

export default JsxExemple