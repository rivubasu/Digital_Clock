let time=function(e){
  let hr=document.getElementById("hr");
  let min=document.getElementById("min");
  let sec=document.getElementById("sec");
  let date=document.getElementById("dt");
  let am_pm=document.getElementById("am_pm");
  let a= new Date();
  //hr.innerHTML=a.getHours();
  min.innerHTML=a.getMinutes();
  sec.innerHTML=a.getSeconds();
  let month=a.getMonth()+1;
  date.innerHTML=a.getDate()+"/"+month+"/"+a.getFullYear();
  let z=a.getHours();
  if(z>12){
    console.log(typeof(z));
    am_pm.innerHTML="PM"
    let hour=z-12;
    hr.innerHTML=hour;
  }
  else{
    hr.innerHTML=z;
    am_pm.innerHTML="AM"
  }
}



setInterval(time,1000);


  