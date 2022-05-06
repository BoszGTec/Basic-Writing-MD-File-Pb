//
Render()
function Render (){
 var inp = document.getElementById("Input")

 document.getElementById('content').innerHTML =
      marked.parse(inp.value);
}


