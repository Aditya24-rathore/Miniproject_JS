let formValid=()=>{
    let Name=document.querySelector("#name").value.trim()
    let Num=document.querySelector("#num").value.trim()
    let Email=document.querySelector("#email").value.trim()
    let Pass=document.querySelector("#pass").value.trim()
    let Cpass=document.querySelector("#cpass").value.trim()

    let errName=document.querySelector("#errname")
    let errNum=document.querySelector("#errnum")
    let errMail=document.querySelector("#erremail")
    let errPass=document.querySelector("#errpass")
    let errCpass=document.querySelector("#errcpass")

    if(Name==""){
        errName.innerHTML="Please enter name"
        return false
    }
    else if(isNaN(Num)){
     errNum.innerHTML="Please enter number only"
     return false
    }
    else if(Num.length!=10){
        errNum.innerHTML="Please enter valid number"
        return false
    }
    else if(Pass==""){
        errPass.innerHTML="Please enter password"
        return false
    }
    else if(Cpass==""){
        errCpass.innerHTML="Please enter confirm password"
        return false
        
    }
    else if(!(Pass.match(/[@$&!]/) &&
            Pass.match(/[0123456789]/) &&
            Pass.match(/[A-Z]/) &&
            Pass.match(/[a-z]/))){
                errPass.innerHTML="Please enter strong password"
                return false
             }

    else if(Cpass!=Pass){
        errCpass.innerHTML="Incorrect Confirm Password"
        document.querySelector("#cpass").value=""
        document.querySelector("#cpass").focus()
        return false
    }
    else if(Email==""){
        errMail.innerHTML="Please enter email"
        return false
    }
    else if(!(Email.includes("@") && Email.includes(".com"))){
        errMail.innerHTML="please enter valid email"
        return false
    }
}