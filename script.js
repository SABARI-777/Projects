document.addEventListener('DOMContentLoaded',function(){

    const list = document.querySelector("#movie-list ul");
    const forms = document.forms;

// DELETE MOVIES
    list.addEventListener('click',(e)=>{
        if(e.target.className==='delete'){
            const li  = e.target.parentElement;
            li.parentNode.removeChild(li);
        }
    });

    //ADD MOVIES
    const addForm = forms['add-movie'];
    addForm.addEventListener('submit',(e)=>{
        e.preventDefault();

        //creating the elements
        const value = addForm.querySelector('input[type="text"]').value;
        const li = document.createElement('li');
        const moviename= document.createElement('span'); 
        const deletebtn = document.createElement('span');
        
        //adding content
          moviename.textContent = value;
          deletebtn.textContent ='delete';

        //adding classes
        moviename.classList.add('name');
        deletebtn.classList.add('delete');

        //appending to DOM
        li.appendChild(moviename);
        li.appendChild(deletebtn);
        list.appendChild(li);

    });

});


