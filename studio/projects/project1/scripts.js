function showVerse(id) {

    console.log(id);

    // hide all the existing elements
    var elements = document.querySelectorAll('.verse');
    elements.forEach(element => {
        element.style.display = 'none';
    });

    // get the element
    var element = document.getElementById(id);
   

    // show the element
    element.style.display = 'block';
}

