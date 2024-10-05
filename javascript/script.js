// navdiv dropdown menu javascript code starts here//

function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // Close the dropdown if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }

// navdiv dropdown menu javascript code ends here//

let cellContainer = document.querySelector('.cell-container');

for(col = 0 ; col<=26 ; col++){
  
    let newcol = document.createElement('div');
    if(col!==0){
    newcol.innerText = String.fromCharCode(64+col);
    }
  
    newcol.className = 'cell header rowstyle';
    cellContainer.append(newcol);
    
}



for (let row = 1; row <= 100; row++) {
  let id = 1
  let rowid = 'row'+row;
  let header = document.createElement('div');
  header.innerText = row;
  header.className = ' cell header rowstyle';
  header.id = rowid;
  cellContainer.append(header);
// let newrow = document.createElement('div');
  for (let col = 1; col<=26; col++) {
    let newcol = document.createElement('div');
    newcol.contentEditable = true;
    newcol.className = 'cell fontstyle';
    newcol.id = id;
    cellContainer.append(newcol);
    id++;
    
  }


}


let lastActiveCell = null;

document.addEventListener('focusin', (event) => {
    if (event.target.classList.contains('cell')) {
        lastActiveCell = event.target;
    }
});

// boldtext function starts here//

function boldtext() {
    if (lastActiveCell) {
        lastActiveCell.style.fontWeight = 'bold';
    } else {
        console.log('No cell selected');
    }
}
// end

// italictext function starts here//

function italictext() {
    if (lastActiveCell) {
        lastActiveCell.style.fontStyle = 'italic';
    } else {
        console.log('No cell selected');
    }
}
// end

// underline function starts here//

function underline() {
    if (lastActiveCell) {
        lastActiveCell.style.textDecoration = 'underline';
    } else {
        console.log('No cell selected');
    }
}
// end

// strikethrough function starts here//

function strikethrough() {
    if (lastActiveCell) {
        lastActiveCell.style.textDecoration = 'line-through';
    } else {
        console.log('No cell selected');
    }
}
// end

// color function starts here//

function color() {
    if (lastActiveCell) {
        lastActiveCell.style.color = 'yellow';
    } else {
        console.log('No cell selected');
    }
} 
// end  

// highlight function starts here//

function highlight() {
    if (lastActiveCell) {
        lastActiveCell.style.backgroundColor = 'lightblue';
    } else {
        console.log('No cell selected');
    }
} 
// end 

// alignleft function starts here// 

function alignleft() {
    if (lastActiveCell) {
        lastActiveCell.style.justifyContent = 'left';
    } else {
        console.log('No cell selected');
    }
} 
// end 

// aligncenter function starts here// 

function aligncenter() {
    if (lastActiveCell) {
        lastActiveCell.style.justifyContent = 'center';
    } else {
        console.log('No cell selected');
    }
} 
// end 

// alignright function starts here// 

function alignright() {
    if (lastActiveCell) {
        lastActiveCell.style.justifyContent = 'right';
    } else {
        console.log('No cell selected');
    }
} 
// end 

// alignjustify function starts here// 

function alignjustify() {
    if (lastActiveCell) {
        lastActiveCell.style.textAlign = 'justify';
    } else {
        console.log('No cell selected');
    }
} 
// end 

