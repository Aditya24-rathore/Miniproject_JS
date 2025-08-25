setInterval(()=>{
let time=new Date()
let min=time.getMinutes()
let hour=time.getHours()
let sec=time.getSeconds()

let c=document.querySelector("#clock")
c.innerHTML=`${hour}:${min}:${sec}`
},1000)