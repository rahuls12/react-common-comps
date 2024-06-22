const dropdown = document.querySelector('.w-48');

const handleClick = (event) =>{
    if(dropdown.contains(event.target)){
        console.log('inside')
    } else console.log('outside')
}

document.addEventListener('click', handleClick, true)

// will not work if capturing is off
// reason - bubbling takes longer than react's rendering