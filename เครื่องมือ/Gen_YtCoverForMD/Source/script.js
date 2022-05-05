var Outp=document.getElementById("Output")
Outp.value="Connect js"
function Gen(){
 var yt_link=document.getElementById("Yt_link")
 var Outp=document.getElementById("Output")

 //Link type1 : https://www.youtube.com/watch?v=UUtZNjkFnlk
 //Link type2 : https://youtu.be/UUtZNjkFnlk
 //Cover link : https://img.youtube.com/vi/idytvdo

 var yt_link_type1=yt_link.value.split("v=")
 var yt_link_type2=yt_link.value.split("youtu.be/")
 //var cover_link="https://img.youtube.com/vi/"
 var sum=""

 //[![ปกคลิปยูทูป](https://img.youtube.com/vi/idyt)(Linkyt)
 if(yt_link_type1.length>1){
  sum="[![ปกคลิปยูทูป](https://img.youtube.com/vi/"
  sum+=yt_link_type1[yt_link_type1.length-1]+")"
  sum+="("+yt_link.value+")"
 }
 else {
  sum="[![ปกคลิปยูทูป](https://img.youtube.com/vi/"
  sum+=yt_link_type2[yt_link_type2.length-1]+")"
  sum+="("+yt_link.value+")"
 }
 Outp.value=sum
}


