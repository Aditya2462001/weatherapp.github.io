 var api='https://api.openweathermap.org/data/2.5/weather?q=';
 var key='&appid=846d06d288c7d16bbff2ecf88df26e8d&Units=matric';
 var input;
function weather(){  
    input= document.querySelector('.inp').value;
    fetch(api+ input +key).then((Res)=>
        Res.json()).then((data)=>{
        var nam=data['name'];
        var dis=data['weather']['0']['description'];
        var temp=data['main']['temp'];
        var min=data['main']['temp_min'];
        var max=data['main']['temp_max'];
        var spd=data['wind']['speed'];
        var hum=data['main']['humidity'];
        var suns=data['sys']['sunset'];
        var sunr=data['sys']['sunrise'];
        var lan=data['coord']['lat'];
        var lat=data['coord']['lon'];
        
        document.querySelector('.city').innerHTML=nam;
        document.querySelector('.des').innerHTML=dis;
        document.querySelector('.tempval').innerHTML=parseInt(temp-273);
        document.querySelector('.min_val').innerHTML=parseInt(min-273);
        document.querySelector('.max_val').innerHTML=parseInt(max-273);
        document.querySelector('.speedval').innerHTML=spd;
        document.querySelector('.suns').innerHTML=suns;
        document.querySelector('.sunr').innerHTML=sunr;
        document.querySelector('.lan').innerHTML=lan;
        document.querySelector('.lat').innerHTML=lat;

    }).catch((err) =>{
        document.querySelector('.error').innerHTML="Please enter valid city name!";
    })
}
weather();
function hideerr(){
    document.querySelector('.error').innerHTML="";
}
function valdate(){ 
 const dat=new Date();
 var day=dat.getDate();
 var month=dat.getMonth();
 var year=dat.getFullYear();
 if (month<10)
 {
document.querySelector('.dateval').innerHTML=day+"/"+"0"+(month+1)+"/"+year;
}
else
{
    document.querySelector('.dateval').innerHTML=day+"/"+(month+1)+"/"+year;
}
var dayname=dat.getDay();
switch(dayname)
{
    case 0:
        document.querySelector('.dayval').innerHTML="Sunday";
        break;
    case 1:
        document.querySelector('.dayval').innerHTML="Monday";
        break;
    case 2:
        document.querySelector('.dayval').innerHTML="Tuesday";
        break;
    case 3:
        document.querySelector('.dayval').innerHTML="Wednesday";
        break;
    case 4:
        document.querySelector('.dayval').innerHTML="Thursday";
        break;
    case 5:
        document.querySelector('.dayval').innerHTML="Friday";
        break;
    case 6:
        document.querySelector('.dayval').innerHTML="Saturday";
        break;
}
var tim=dat.getHours();
var min=dat.getMinutes();
var sec=dat.getSeconds();

if (tim==13)
{
document.querySelector('.timeval').innerHTML="01"+":"+min+":"+sec;
}
else if (tim==14)
{
document.querySelector('.timeval').innerHTML="02"+":"+min+":"+sec;
}
else if (tim==15)
{
document.querySelector('.timeval').innerHTML="03"+":"+min+":"+sec;
}
else if (tim==16)
{
document.querySelector('.timeval').innerHTML="04"+":"+min+":"+sec;
}
else if (tim==17)
{
document.querySelector('.timeval').innerHTML="05"+":"+min+":"+sec;
}
else if (tim==18)
{
document.querySelector('.timeval').innerHTML="06"+":"+min+":"+sec;
}
else if (tim==19)
{
document.querySelector('.timeval').innerHTML="07"+":"+min+":"+sec;
}
else if (tim==20)
{
document.querySelector('.timeval').innerHTML="08"+":"+min+":"+sec;
}
else if (tim==21)
{
document.querySelector('.timeval').innerHTML="09"+":"+min+":"+sec;
}
else if (tim==22)
{
document.querySelector('.timeval').innerHTML="10"+":"+min+":"+sec;
}
else if (tim==23)
{
document.querySelector('.timeval').innerHTML="11"+":"+min+":"+sec;
}
else
{
    document.querySelector('.timeval').innerHTML="11"+":"+min+":"+sec;
}
}
valdate();



function firstpage()
{
    var p1=document.querySelector('.firstpage');
    var p2=document.querySelector('.secondpage');
    var p3=document.querySelector('.thirdpage');
    var p4=document.querySelector('.fourthpage');
    var p5=document.querySelector('.fifthpage');
  
    p1.style.height="390px";
    p2.style.height="0px";
    p3.style.height="0px";
    p4.style.height="0px";
    p5.style.height="0px";
    p2.style.overflow="hidden";
    p3.style.overflow="hidden";
    p4.style.overflow="hidden";
    p5.style.overflow="hidden";
  

}
function secondpage()
{
    var p1=document.querySelector('.secondpage');
    var p2=document.querySelector('.thirdpage');
    var p3=document.querySelector('.fourthpage');
    var p4=document.querySelector('.fifthpage');
    var p5=document.querySelector('.firstpage');
    p1.style.height="390px";
    p2.style.height="0px";
    p3.style.height="0px";
    p4.style.height="0px";
    p5.style.height="0px";
    p2.style.overflow="hidden";
    p3.style.overflow="hidden";
    p4.style.overflow="hidden";
    p5.style.overflow="hidden";
  

}
function thirdpage()
{
    var p1=document.querySelector('.thirdpage');
    var p2=document.querySelector('.fourthpage');
    var p3=document.querySelector('.fifthpage');
    var p4=document.querySelector('.firstpage');
    var p5=document.querySelector('.secondpage');
    p1.style.height="390px";
    p2.style.height="0px";
    p3.style.height="0px";
    p4.style.height="0px";
    p5.style.height="0px";
    p2.style.overflow="hidden";
    p3.style.overflow="hidden";
    p4.style.overflow="hidden";
    p5.style.overflow="hidden";
  

}
function fourthpage()
{
    var p1=document.querySelector('.fourthpage'); 
    var p2=document.querySelector('.fifthpage');
    var p3=document.querySelector('.firstpage');
    var p4=document.querySelector('.secondpage');
    var p5=document.querySelector('.thirdpage');
    p1.style.height="390px";
    p2.style.height="0px";
    p3.style.height="0px";
    p4.style.height="0px";
    p5.style.height="0px";
    p2.style.overflow="hidden";
    p3.style.overflow="hidden";
    p4.style.overflow="hidden";
    p5.style.overflow="hidden";
}
function fifthpage()
{
    var p1=document.querySelector('.fifthpage');  
    var p2=document.querySelector('.firstpage');
    var p3=document.querySelector('.secondpage');
    var p4=document.querySelector('.thirdpage');
    var p5=document.querySelector('.fourthpage');
    p1.style.height="390px";
    p2.style.height="0px";
    p3.style.height="0px";
    p4.style.height="0px";
    p5.style.height="0px";
    p2.style.overflow="hidden";
    p3.style.overflow="hidden";
    p4.style.overflow="hidden";
    p5.style.overflow="hidden";
  

}

setTimeout(() => {
  document.querySelector('.startlogo').style.opacity="0"; 
  document.querySelector('.startlogo').style.pointerEvents="none"; 
  document.querySelector('.website').style.opacity="1";
 
}, 6000);
