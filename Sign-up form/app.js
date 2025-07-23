let fun=()=>{
    let Name=document.querySelector("#name").value.trim()
    let Num=document.querySelector("#num").value.trim()
    let Email=document.querySelector("#email").value.trim()
    let Pass=document.querySelector("#pass").value.trim()
    let Cpass=document.querySelector("#cpass").value.trim()

    let errname=document.querySelector("#name")
    let errnum=document.querySelector("#num")
    let erremail=document.querySelector("#email")
    let errpass=document.querySelector("#pass")
    let errcpass=document.querySelector("#cpass")

    if(Name==""){
           errname.style.border="1px solid red"
           return false
    }
}