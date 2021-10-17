//Task-1: Change the font size p tag to 50 pixels

// let change = document.getElementById("myText");
// change.innerHTML = "Salam dunya";
// change.style.fontSize = "50px";


//Task-2: show value input tag on console on keyup event
//  function showtext(value){
//    let addtext = document.getElementById("myInput").value;  
//    addtext = console.log(value)
//  }


 //Task-3: add TEXT class and title attribute with value (myTitle to p tag)
//  let adding = document.getElementById("myText");
//  adding.className = "text";
//  adding.title = "myTitle to p tag";



//Task-4: Change backgroundcolor of div tag a) with using TOGGLE class. b) wit using style property

//a)
// let togclass = document.getElementById("myStatement");
// togclass.classList.toggle("myStat");
// document.querySelector(".myStat").style.backgroundColor = "yellow";
 
//b)
// document.getElementById("myStatement").style.backgroundColor = "green";
// document.querySelector("#myStatement").style.backgroundColor = "red";



//Task-5 program to set the background color of a paragraph (p tag).

// let paragraph = document.getElementsByTagName("p")[0];
// paragraph.style.backgroundColor = "blue";



//Task-6 To remove items from a drop down list.

//  document.querySelector("#list option").remove();

// function removeitems() {
//     let a = document.getElementById("list"); 
//          a.remove(a.children);
// }



//Task-7 Write function creates a table, accept row, column numbers from the user an input row-column number as content

// function createTable()
// {
//     rnumber = Number (prompt("Input number of rows"));
//     cnumber = Number (prompt("Input number of columns"));
  
//  for(let i=0;i<(rnumber);i++)
//   {
//    let x=document.getElementById('myTable').insertRow(i);
//    for(let j=0;j<(cnumber);j++)  
//     {
//      let y = x.insertCell(j);
//      y.innerHTML="Row-"+i+" Column-"+j; 
//     }
//    }
// }





// Task-8 to get the width height of the window (any time the window is resized)

function showSize()
{
let widthdimension = document.documentElement.clientWidth;
let heightdimension = document.documentElement.clientHeight;
        
// put the result into a h1 tag
 document.getElementById('widthheight').innerHTML = "<h1> Width: " + widthdimension + "  Height: " + heightdimension + "</h1>";
}





//Task-9 create boxes with js
/*
 let divelem = document.createElement ('div');
 document.body.appendChild(divelem);
 let tagp = document.createElement('p');
 divelem.appendChild(tagp);
 let node = document.createTextNode('box1');
 tagp.appendChild(node);
 divelem.style.border= ('solid green');
 divelem.style.width =('250px');
 divelem.style.height =('250px');
 tagp.style.paddingTop = ('15px');
 tagp.style.paddingLeft = ('10px');
 divelem.style.backgroundColor = ('#FFA500');
 divelem.style.marginLeft = ('50px');
 divelem.style.display = ('inline-block');


 let divelem2 = document.createElement ('div');
 document.body.appendChild (divelem2);
 let tagp2 = document.createElement ('p');
 divelem2.appendChild(tagp2);
 let node2 = document.createTextNode('box1s');
 tagp2.appendChild(node2);
 let heading = document.createElement('h2');
 divelem2.appendChild(heading);
  let node22 = document.createTextNode('hi');
 heading.appendChild(node22);
 heading.style.marginLeft = ('30px');
 divelem2.style.border = ('solid red');
 divelem2.style.width = ('250px')
 divelem2.style.height = ('250px')
 divelem2.style.marginLeft = ('20px')
 tagp2.style.paddingTop = ('15px')
 tagp2.style.paddingLeft = ('10px')
 divelem2.style.display = ('inline-block');



let divelem3 = document.createElement('div');
document.body.appendChild(divelem3);
let heading2 = document.createElement('h6');
divelem3.appendChild(heading2);
let text = document.createTextNode('box2');
heading2.appendChild(text);
heading2.style.marginTop = ('15px');
heading2.style.marginLeft = ('10px');
divelem3.style.border = ('solid green');
divelem3.style.width = ('150px');
divelem3.style.height = ('150px');
divelem3.style.marginLeft = ('20px');
divelem3.style.display = ('inline-block');


let divelem4 = document.createElement ('div');
 document.body.appendChild (divelem4);
 divelem4.style.border = ('solid red');
 divelem4.style.width = ('250px');
 divelem4.style.height = ('250px');
 divelem4.style.marginLeft = ('20px');
divelem4.style.display = ('inline-block');
*/

























 





