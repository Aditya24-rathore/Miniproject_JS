let store=""
let cal=(value)=>{
    let display=document.querySelector("#screen")
    store=store+value
    display.innerHTML=store
}

let res=()=>{
    let display=document.querySelector("#screen")
    store=eval(store).toString()
    display.innerHTML=store
}