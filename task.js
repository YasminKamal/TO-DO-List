input=document.getElementById('input')
button=document.getElementsByTagName('button')
div=document.getElementById('div')
task=document.getElementById('notask')

let add=()=>{x= input.value
  var dvc=document.createElement("div") 
   var element =div
   element.appendChild(dvc)
dvc.setAttribute("class","container")

console.log(dvc) //og 


var dvr=document.createElement("div") 
dvr.setAttribute("class","row")
dvc.appendChild(dvr)

var dvcol=document.createElement("div") 
dvcol.setAttribute("class","col-9")
dvr.appendChild(dvcol)
dvr.classList.add("color")

    var h =document.createElement("h3") // h task
    let text= document.createTextNode(x)
    h.appendChild(text)
   dvcol.appendChild(h)
   function line( ){h.classList.add("line") 
  dvr.classList.remove("color")
dvr.classList.add("done")}; // functionline for task
    h.setAttribute('onclick','')
    h.addEventListener('click',line)

  var dvcol1=document.createElement("div") 
dvcol1.setAttribute("class","col-1")
dvr.appendChild(dvcol1)

 let btn1=document.createElement("button") //btn
 var txb= document.createTextNode("Delete")

  function display( ){dvc.classList.add("disply")}; //function disply for delete btn
 btn1.setAttribute('onclick','')
 btn1.addEventListener('click',display)
btn1.appendChild(txb)
dvcol1.appendChild(btn1)

let color=document.createAttribute("style")
color.value = "background-color:#fdffb6; ";
btn1.setAttributeNode(color); 
let br=document.createElement("br")
dvc.appendChild(br)

function show(){
  task.classList.remove("disply");
}

button[1].addEventListener('click',()=>{ display(); show();})
}

function hide(){
  task.classList.add("disply") 
}
button[0].addEventListener('click',()=> {add(); hide();})
console.log(task)