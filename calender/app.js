setInterval(()=>{
    let time=new Date()
    let month=["Jan","Feb","Mar","apr","may","jun","jul","aug","sep","oct","nov","dec"]
    let date=time.getDate()
    let year=time.getFullYear()

    let display=document.querySelector("#cal")
    display.innerHTML=`${month[time.getMonth()]}:${date}:${year}`
})