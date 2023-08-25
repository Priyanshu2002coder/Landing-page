function dropdownMenu() 
      { var x = document.getElementById("dropdownClick");
        if (x.className === "topnav") {
            x.className += " responsive"; /* Adding a space before "responsive" */
        } else {
            x.className = "topnav";
        }
    
      }  
