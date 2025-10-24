let allpost=document.querySelector(".allpost")
let name=document.querySelector("#exampleFormControlInput1")
let caption=document.querySelector("#exampleFormControlTextarea1")
let postBtn=document.querySelector(".postBtn")
let error1=document.querySelector(".error1")
let error2=document.querySelector(".error2")


let arr=[]




postBtn.addEventListener("click", ()=>{
    if(!name.value){
       error1.innerHTML="please enter your name..!";

    }else if(!caption.value){
          error2.innerHTML="please enter your caption..!";

    }else{
         error1.innerHTML=""
         error2.innerHTML=""
  
        arr.push({
            Name: name.value,

            caption: caption.value
        })
        allpost.innerHTML="";

        display();
        name.value="";
        caption.value="";


    }

    })


function display(){
    arr.map(item =>{
        allpost.innerHTML += `<div class="card mt-3" style="width: 18rem;">

                <div class="card-body">
                    <h5 class="card-title">${item.Name}</h5>
                    <p class="card-text">${item.caption}</p>
                    <a href="#" class="btn btn-primary"><i class="fa-solid fa-file-pen fa-lg"
                            style="color: #f9f9f9;"></i></a>
                    <a href="#" class="btn btn-danger deletebtn"><i class="fa-solid fa-trash fa-lg"></i></a>
                </div>
            </div>`
    })


    let deletebtn=document.querySelectorAll(".deletebtn")
    let cvtdeletebtn=Array.from(deletebtn)
    cvtdeletebtn.map((item,index)=>{
        item.addEventListener("click",()=>{
            arr.splice(index,1)
             allpost.innerHTML="";

            display();
        })
    })

    



}