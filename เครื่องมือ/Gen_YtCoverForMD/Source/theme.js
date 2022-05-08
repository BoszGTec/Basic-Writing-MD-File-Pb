function c_theme() {
  var body = document.getElementsByTagName("body")[0]
  body.style = "background-color : var(--bs-dark) ; \
                color : var(--bs-gray-300) ; "
  
  var inp = document.getElementsByTagName("input")
  for(let i=0;i<inp.lenght;i++){
    inp[i].style = "background-color : var(--bs-dark) ; \
                    color : var(--bs-gray-300) ; "
  }
  
  var texta = document.getElementsByTagName("textarea")
  for(let i=0;i<texta.lenght;i++){
    texta[i].style = "background-color : var(--bs-dark) ; \
                      color : var(--bs-gray-300) ; "
  }
  
}
