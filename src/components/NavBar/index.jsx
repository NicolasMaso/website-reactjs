import { CompanyContainer, NavBarContainer, NavBarItem } from "./style";
import logo from '../../assets/logo.png'

export default function NavBar() {
    return  (
        <NavBarContainer>
          <CompanyContainer>
          <img src={logo} alt="logo"/>
          <div className="company"> <strong>ALS Security</strong> </div>
          </CompanyContainer>
          <ul>
            <NavBarItem className="header" to="/home">Home</NavBarItem>
              <div className="dropdown">
              <NavBarItem className="header" to="/home">Modules</NavBarItem>
                <div className="dropdown-content">
                    <NavBarItem to="/home">Monitoring</NavBarItem>
                    <NavBarItem to="/home">Videos</NavBarItem>
                    <NavBarItem to="/home">Images</NavBarItem>
                    <NavBarItem to="/home">Users</NavBarItem>
                </div>
              </div>
              <NavBarItem className="header" to="/home">Blog</NavBarItem>
              <NavBarItem className="header" to="/home">Settings</NavBarItem>
              <NavBarItem className="header" to="/home">Contact</NavBarItem>
              <NavBarItem className="exit" to="/">Exit</NavBarItem>
          </ul>
        </NavBarContainer>
    )
  }