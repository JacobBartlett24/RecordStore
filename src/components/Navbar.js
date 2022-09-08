import {useState} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRecordVinyl } from '@fortawesome/free-solid-svg-icons';

function Navbar(){
  const [sidebar, setSidebar] = useState(false);

  return(
    <div>
      <ul>
        <li><FontAwesomeIcon icon={faRecordVinyl} />Store</li>
        <li>About Us</li>
        <li>FAQ</li>
        <li>Shipping Info</li>
      </ul>
    </div>
  )

}

export default Navbar;