import React,{useEffect,useState} from 'react'
import '../Navbar.css'
function Navbar() {

const [show,setShow] = useState(false)

useEffect(() => {
    window.addEventListener("scroll" , () => {
        if(window.scrollY > 100){
            setShow(true)
        }else setShow(false)
    })

    return () => {
        window.removeEventListener("scroll" , () => {})
    }
},[])




  return (
    <div className={`nav ${show && "nav__black"}`}>
<img
className='nav_logo'
src='https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg'
alt='netflix logo'
/>
    </div>
  )
}

export default Navbar