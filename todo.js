let inputs=document.getElementById("inp");
// targeting the class : text by using query selector
let text=document.querySelector(".text");
function Add()
{
    if(inputs.value=="")
    {
        alert("please enter the task then try to add")
    }
    else{
        let newEle=document.createElement("ul") ;
        newEle.innerHTML=`${inputs.value}      <i class="fa-solid fa-trash"></i>`;
        // <i class="fa-solid fa-trash"></i>

        // is text ke andar ham child(new_  element) ko dal rhe hai 
        text.appendChild(newEle);

        inputs.value="";
        newEle.querySelector("i").addEventListener("click",remove);
        function remove()
        {
            newEle.remove();
        }

    }
}