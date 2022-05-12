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
  text = '<h1>Gen_YtCoverForMD</h1><div class="cr">©2022 BoszGTec</div>'
  text += ' <button class="btn btn-light" onclick="c_theme_2()">'
  text += '  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-brightness-high" viewBox="0 0 16 16"> '
  text += '   <path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z"/> ' 
  text += '  </svg>'
  text += ' </button>' 
  theme.innerHTML = text
}

function set_button_2(){
  var text = ""  
  var theme = document.getElementById("theme")
  text = '<h1>Gen_YtCoverForMD</h1><div class="cr">©2022 BoszGTec</div>'
  text += ' <button class="btn btn-dark" onclick="c_theme()"> '
  text += '  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-moon-fill" viewBox="0 0 16 16"> '
  text += '    <path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z"/> '
  text += '  </svg>'
  text += ' </button>' 
  theme.innerHTML = text
}
