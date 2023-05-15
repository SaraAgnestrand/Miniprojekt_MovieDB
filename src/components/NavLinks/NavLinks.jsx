import "./NavLinks.css"
import { NavLink } from "react-router-dom"

 function NavLinks() {
  return (
    <ul>
      <li>
        <NavLink style={({isActive}) => {
                  return isActive ? { color: "orange" } : {} 
                }}
                to="../MyMovies"
            >
             Movies
        </NavLink>
      
      </li>
      <li>
        <NavLink style={({isActive}) => {
                  return isActive ? { color: "orange" } : {} 
                }}
                to="../About"
            >
             About
        </NavLink>
      
      </li>
      <li>
        <NavLink style={({isActive}) => {
                  return isActive ? { color: "orange" } : {} 
                }}
                to="../Contact"
            >
             Contact
        </NavLink>
      
      </li>
    </ul>
   
  );
}

export default NavLinks;
