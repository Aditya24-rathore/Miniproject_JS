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

let AC=()=>{
    let display=document.querySelector("#screen")
    store=""
    display.innerHTML=store
}

let DEL=()=>{
    let display=document.querySelector("#screen")
    store=store.slice(0,-1)
    display.innerHTML=store
}