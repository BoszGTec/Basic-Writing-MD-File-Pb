c_theme()
function c_theme() {
  var body = document.getElementsByTagName("body")[0]
  body.style = "background-color : var(--bs-dark) ; \
                color : var(--bs-gray-300) ; "
  
  var inp = document.getElementsByTagName("input")
  for(let i=0;i<inp.length;i++){
    inp[i].style = "background-color : var(--bs-dark) ; \
                    color : var(--bs-gray-300) ; "
  }
  
  var texta = document.getElementsByTagName("textarea")
  for(let i=0;i<texta.length;i++){
    texta[i].style = "background-color : var(--bs-dark) ; \
                      color : var(--bs-gray-300) ; "
  }
  
  set_button()
}

function c_theme_2() {
  var body = document.getElementsByTagName("body")[0]
  body.style = ""
  
  var inp = document.getElementsByTagName("input")
  for(let i=0;i<inp.length;i++){
    inp[i].style = ""
  }
  
  var texta = document.getElementsByTagName("textarea")
  for(let i=0;i<texta.length;i++){
    texta[i].style = ""
  }
  set_button_2()
}  


function set_button(){
  var text = ""
  var theme = document.getElementById("theme")
  text = '<h1>Gen_YtCoverForMD</h1>'
  text += ' <button class="btn btn-light" onclick="c_theme()">'
  text += '  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-lightbulb-fill" viewBox="0 0 16 16"> '
  text += '   <path d="M2 6a6 6 0 1 1 10.174 4.31c-.203.196-.359.4-.453.619l-.762 1.769A.5.5 0 0 1 10.5 13h-5a.5.5 0 0 1-.46-.302l-.761-1.77a1.964 1.964 0 0 0-.453-.618A5.984 5.984 0 0 1 2 6zm3 8.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1l-.224.447a1 1 0 0 1-.894.553H6.618a1 1 0 0 1-.894-.553L5.5 15a.5.5 0 0 1-.5-.5z"/> '
  text += '  </svg>  '                   
  text += ' </button>' 
  theme.innerHTML = text
}

function set_button_2(){
  var text = ""  
  var theme = document.getElementById("theme")
  text = '<h1>Gen_YtCoverForMD</h1>'
  text += ' <button class="btn btn-dark" onclick="c_theme_2()"> '
  text += '  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-lightbulb" viewBox="0 0 16 16"> '
  text += '   <path d="M2 6a6 6 0 1 1 10.174 4.31c-.203.196-.359.4-.453.619l-.762 1.769A.5.5 0 0 1 10.5 13a.5.5 0 0 1 0 1 .5.5 0 0 1 0 1l-.224.447a1 1 0 0 1-.894.553H6.618a1 1 0 0 1-.894-.553L5.5 15a.5.5 0 0 1 0-1 .5.5 0 0 1 0-1 .5.5 0 0 1-.46-.302l-.761-1.77a1.964 1.964 0 0 0-.453-.618A5.984 5.984 0 0 1 2 6zm6-5a5 5 0 0 0-3.479 8.592c.263.254.514.564.676.941L5.83 12h4.342l.632-1.467c.162-.377.413-.687.676-.941A5 5 0 0 0 8 1z"/> '
  text += '  </svg>' 
  text += ' </button>' 
  theme.innerHTML = text
}
