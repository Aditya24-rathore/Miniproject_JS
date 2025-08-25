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
           document.querySelector("#name").value=""
        document.querySelector("#name").placeholder="Enter valid name"
       //  document.querySelector("#name").focus()
           return false
    }
    else if(isNaN(Num)){
           errnum.style.border="1px solid red"
           document.querySelector("#num").value=""
           document.querySelector("#num").placeholder="Enter valid number"
           return false
    }
    else if(Num.length!=10){
        errnum.style.border="1px solid red"
        document.querySelector("#num").value=""
           document.querySelector("#num").placeholder="Enter valid number"
           document.querySelector("#num").focus()
           return false
    }
    else if(!(Email.includes("@") && Email.includes(".com"))){
        erremail.style.border="1px solid red"
        document.querySelector("#email").value=""
        document.querySelector("#email").placeholder="Enter valid email"
        document.querySelector("#email").focus()
           return false
    }
   else if(Pass==""){
       errpass.style.border="1px solid red"
       return false
   }
   else if(Cpass!=Pass){
       errcpass.style.border="1px solid red"
       document.querySelector("#cpass").value=""
        document.querySelector("#cpass").placeholder="Confirm password not match"
        return false
   }
}