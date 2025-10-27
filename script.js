let allpost=document.querySelector(".allpost")
let name=document.querySelector("#exampleFormControlInput1")
let caption=document.querySelector("#exampleFormControlTextarea1")
let postBtn=document.querySelector(".postBtn")
let updateBtn=document.querySelector(".updateBtn")
let error1=document.querySelector(".error1")
let error2=document.querySelector(".error2")


let arr=[]
let store;



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
updateBtn.addEventListener("click", ()=>{
    
          arr[store].Name = name.value,

         arr[store].caption= caption.value
   
        allpost.innerHTML="";

        display();
        name.value=""
        caption.value=""
          postBtn.style.display="inline-block"
            updateBtn.style.display="none"
             let allDeleteBtn=document.querySelectorAll(".deletebtn");
            allDeleteBtn.forEach(btn =>{
                btn.disabled = false;
                btn.style.opacity="1";
                btn.style.cursor="pointer";
                 btn.style.pointerEvents="auto";

            })


    })




function display(){
    arr.map(item =>{
        allpost.innerHTML += `<div class="card mt-3" style="width: 18rem;">

                <div class="card-body">
                    <h5 class="card-title">${item.Name}</h5>
                    <p class="card-text">${item.caption}</p>
                    <a href="#" class="btn btn-primary editbtn"><i class="fa-solid fa-file-pen fa-lg"
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

      let editbtn=document.querySelectorAll(".editbtn")
    let cvtebtn=Array.from(editbtn)
    cvtebtn.map((item,index)=>{
        item.addEventListener("click",()=>{
            name.value=arr[index].Name
            caption.value=arr[index].caption
            store=index
            postBtn.style.display="none"
            updateBtn.style.display="inline-block"
            let allDeleteBtn=document.querySelectorAll(".deletebtn");
            allDeleteBtn.forEach(btn =>{
                btn.disabled = true;
                btn.style.opacity="0.5";
                btn.style.cursor="not-allowed";
                btn.style.pointerEvents="none";

            })

    })
  })



}