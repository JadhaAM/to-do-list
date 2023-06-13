

let item = document.querySelector("#item");
let box = document.querySelector("#to-do-box");
let button = document.querySelector("#btn")

button.addEventListener("click", () => {
   //  "keyup",
   //  function(event){
   //  if (event.key=="click") {

   //    addtodo(item.value);
   //   item.value="";

   //  }


   //  }
   const listitem = document.createElement("li");
   listitem.innerHTML = item.value + '<button> delete </button> ';
   listitem.querySelector("button").addEventListener(
      'click',
      function () {
         listitem.remove();

      }
   )


   box.appendChild(listitem);
}

);