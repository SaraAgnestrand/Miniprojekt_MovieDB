import NavLinks from "../NavLinks/NavLinks";
import MyMovies from "../MyMovies/MyMovies";
import "./Header.css";


function Header() {
  return (
    <header>
        <h1>Movie<span>DB</span></h1>
       
          <NavLinks />
          <MyMovies />
      
      
    </header>
  );
}

export default Header;