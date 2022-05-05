Gen()
function Gen(){
 var yt_link = document.getElementById("Yt_link")
 var Outp = document.getElementById("Output")
 var yt_cover = document.getElementById("Yt_cover")

 //Link type1 : https://www.youtube.com/watch?v=UUtZNjkFnlk
 //Link type2 : https://youtu.be/UUtZNjkFnlk
 //Cover link : https://img.youtube.com/vi/idytvdo

 var yt_link_type1=yt_link.value.split("v=")
 var yt_link_type2=yt_link.value.split("youtu.be/")
 var cover_link="https://img.youtube.com/vi/"
 var sum=""

 //[![ปกคลิปยูทูป](https://img.youtube.com/vi/idyt)(Linkyt)
 if(yt_link_type1.length>1){
  sum="[![ปกคลิปยูทูป](https://img.youtube.com/vi/"
  sum+=yt_link_type1[yt_link_type1.length-1]+"/0.jpg)]"
  sum+="("+yt_link.value+")"

  cover_link+=yt_link_type1[yt_link_type1.length-1]+"/0.jpg"
 }
 else {
  sum="[![ปกคลิปยูทูป](https://img.youtube.com/vi/"
  sum+=yt_link_type2[yt_link_type2.length-1]+"/0.jpg)]"
  sum+="("+yt_link.value+")"

  cover_link+=yt_link_type2[yt_link_type2.length-1]+"/0.jpg"
 }
 Outp.innerText=sum
 yt_cover.src=cover_link
}


