import React from "react";

export function CountriesToShow({countrie}) {
    
    const handleShow = () => {
        window.open(countrie.maps.googleMaps,
            'popUpWindow',
            'height=400,width=600,left=10,top=10,,scrollbars=yes,menubar=no'); 
        return false;
    }


    return (
        <React.Fragment>
        <li>{countrie.name.common} <button onClick={handleShow} >Show Map</button></li>
        </React.Fragment>
    );
  }
  