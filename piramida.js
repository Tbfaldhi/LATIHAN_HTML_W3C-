function bintang(){
    var height = document.myform.masukan.value;
    inputValidation(height)
    document.getElementById('hasil').innerHTML= piramidaAtas(height) + piramidBawah(height)  ;
    //document.getElementById('hasil').innerHTML= piramidBawah(height);
    }

function piramidaAtas(height){
    var tmp="";
    //alert("masukkan angka dari 1 -40")
    for(var i=1;i<=height;i++){
        for(var j=1;j<=height-i;j++)
            tmp+=" ";
        for(var k=1;k<=(i*2-1);k++)
            tmp+="<img src='http://emojis.slackmojis.com/emojis/images/1471119458/990/party_parrot.gif?1471119458'/>";
        tmp+="<br>";
    }
    return '<center>'+tmp+'</center>'
}

function piramidBawah(height){
  var tmp="";
  for(var i=height;i>0;i--){
      for(var j=1;j<=height-i;j++)
          tmp+=" ";
      for(var k=1;k<=(i*2-1);k++)
          tmp+="<img src='http://emojis.slackmojis.com/emojis/images/1471119458/990/party_parrot.gif?1471119458'/>";;
      tmp+="<br>";;
  }

    return '<center>'+tmp+'</center>';
}

function inputValidation (height,event){
  if(height < 1 || height > 10){
   alert("masukkan angka dari 1 sampai 10 aja yah");
   event.preventDefault();
  }
}
