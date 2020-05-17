var addbttn=document.getElementById("add-task");
var taskList=document.getElementById("task-list");
var deletebttns=document.querySelectorAll("#task-list li button");
var totaltask=deletebttns.length;
addbttn.addEventListener("click",function(){
    console.log("jkl;");
    var input=document.getElementById("task").value;
    console.log(input);
    if(input=="")
      return ;
     var li=document.createElement("li");
     var label=document.createElement("label");
     var checkbox=document.createElement("input");
     var deletebttn=document.createElement("button");
     var icon=document.createElement("i");
     icon.setAttribute("class","fa fa-times-circle");
     deletebttn.setAttribute("class","bttn");
     deletebttn.appendChild(icon);


     checkbox.setAttribute("type","checkbox");
     li.appendChild(checkbox);
     li.appendChild(label);
     li.appendChild(deletebttn);
     label.appendChild(document.createTextNode(input));
     taskList.appendChild(li);
     document.getElementById("task").innerHTML='';
     totaltask+=1;
     updatedelete();
})
var updatedelete=function(){
    // console.log(deletebttns);
    document.getElementById("total-task").innerHTML=""+totaltask;
    deletebttns=document.querySelectorAll("#task-list li button");
     totaltask=deletebttns.length;
    for(var i=0; i<totaltask; i++){
        if(deletebttns[i]==null){
            return;
        }
        deletebttns[i].addEventListener("click",function(){
            console.log("i",i);
            var listItem=this.parentNode;
            var ul=listItem.parentNode;
            ul.removeChild(listItem);
            totaltask-=1;
            document.getElementById("total-task").innerHTML=""+totaltask;
        })
    }
}
updatedelete(); 
var checkall=function(){
    console.log("tyuiop");
    var inputchecks=document.querySelectorAll("#task-list li input");
   for(var i=0; i<inputchecks.length; i++){
       inputchecks[i].setAttribute("checked","true");
   }
}   
var deleteCompletedtask=function(){
  
    var inputchecks=document.querySelectorAll("#task-list li input");
    for(var i=0; i<inputchecks.length; i++){
        if(inputchecks[i].checked){
            console.log("ouuu");
            var listItem=inputchecks[i].parentNode;
            var ul=listItem.parentNode;
            ul.removeChild(listItem);
            totaltask-=1;
            document.getElementById("total-task").innerHTML=""+totaltask;
          
        }
    }
}
var showbttn=function(){
    console.log("jklqqq");
        addbttn.style.opacity=1;
}