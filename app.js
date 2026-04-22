 const style ={

    "limit-flex":{ flex: "1",display: "grid", justifyContent: "center", alignItems: "center",},



    "limit-hdvh":{
        height:"100dvh",
        display: "flex"

    },

    "limit-red":{color:"#f72424"},

    "limit-blue":{color:" #3392ff"},

    "limit-pink":{color:" #f418c5"},

    "limit-fs4":{fontSize: "1.5rem"},

    "limit-family-mono":{fontFamily:"monospace"},

    "limit-bg-org":{
         backgroundColor: "#f19941"
    },

    "limit-radius-sm":{
        borderRadius: "10px"
    },

   
    
 "limit-btn":{padding: "10px 20px",
    border: "none",
    borderRadius:" 6px",
    cursor:" pointer",
    ransition:" 0.3s ease",}

 }



  function nodeList(params) {
    const nodeList =document.querySelectorAll("*")

    // console.log(nodeList[10]);

    nodeList.forEach((cd)=>{

        // console.log(cd.classList);

        cd.classList.forEach((className)=>{
            // console.log(className);



            if (style[className]) {
                Object.assign(cd.style,style[className])
                
            } else {
                console.log(className, "invalid className");
                
                
            }

           

            
        })
        
        
    })



    
  }
 

 nodeList()
 


