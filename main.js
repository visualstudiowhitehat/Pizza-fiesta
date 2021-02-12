pizzalist=["Margretta","Pepei paneer",">Double cheese margretta","Chicken Pizza","Nacho Pizza"];
  function add(){
      var htmldata;
     var item=document.getElementById("addsomething").value;
    pizzaadding=pizzalist.push(item);
    htmldata="<div class='çards'>";
    
    for(i=0;i<pizzalist.length;i++){
        htmldata=htmldata+" "+pizzalist[i];
   
    }

  htmldata=htmldata+"</div>";
    document.getElementById("displaymenu").innerHTML=htmldata
 }
