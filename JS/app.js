// mondalCodeHub - Arup Mondal (2021)
//Date : 27th july 2021

console.log("MCX NOTE WEBAPP VERSION == 01");
showNotes();



// If user adds a note, add it to the localStorage
let addButton = document.getElementById("addButton");

addButton.addEventListener("click", function (e) {
    let addText = document.getElementById("addText");
    let addTitle = document.getElementById("addTitle");  

    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    } else {
        notesObj = JSON.parse(notes);
    }

    let myObj = {                                  
        title: addTitle.value,
        text: addText.value
    }
    notesObj.push(myObj);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    addText.value = "";
    addTitle.value = "";


    console.log(notesObj);
    showNotes();

});


//showNotes()  function :
function showNotes() {
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes)
    }
    let html = " ";
    notesObj.forEach(function (element, index) {
        html += `
        <div class="noteCard my-2 mx-2 card" style="width: 18rem;">
                <div class="card-body">
                    <h5 class="card-title">${element.title} </h5>
                    <p class="card-text">${element.text}</p>
                    
                    <button id="${index}"onclick="deleteNote(this.id)" class="btn btn-primary">Delete Note</button>
                </div>
        </div>`;
    });

    // <button href="#" class="btn btn-primary">Delete Note</button>
    //  <h5 class="card-title">Note  ${index + 1} </h5>

    let notesElm = document.getElementById("notes");
    if (notesObj.length != 0) {
        notesElm.innerHTML = html;
    }
    else {
        notesElm.innerHTML = `Write some note`
    }

}

// deleteNote() function 
function deleteNote(index) {
    console.log("deleting ", index);
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes)
    }

    notesObj.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    showNotes();
}




// Search - design : searchText():
let search = document.getElementById("searchText");
search.addEventListener("input", function () {

    inputVal = search.value.toLowerCase();
    console.log("Input event fired :xd", inputVal);

    let noteCards = document.getElementsByClassName("noteCard");
    Array.from(noteCards).forEach(function (element) {
        let cardText = element.getElementsByTagName("p")[0].innerText;

        if (cardText.includes(inputVal)) {
            element.style.display = "block";
        }
        else {
            element.style.display = "none";
        }
    })

})




