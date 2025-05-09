// get the entries
var request = await fetch('assets/entries.json');
var entries = await request.json();

console.log(entries);

// get the input elements 
var emotionSelect = document.querySelector('select[name="emotion"]');
var intensitySelect = document.querySelector('input[name="intensity"]');

console.log(emotionSelect, intensitySelect);

// get the submit button 
var submitButton = document.querySelector('button[name="submit"]');

console.log(submitButton);

// get the output element 
var output = document.querySelector('.output');
var input = document.querySelector('.input');

console.log(output);

// add event listener to the button 
submitButton.addEventListener('click', () => {

    // get the active settings
    var emotion = emotionSelect.value;
    var intensity = intensitySelect.value;

    console.log(emotion, intensity);

    // get the matching entry 
    var matchingEntry = entries.find((entry) => {
        return entry.emotion == emotion
            && entry.intensity == intensity 
    });

    console.log(matchingEntry);

    if (matchingEntry) {
        input.style.display = 'none';
        output.innerHTML = `
          <nav class="nav">
		      <a class="nav-link" href="input.html">Different Feel - Reset</a>
              <a class="nav-link" href="index.html">Home</a>
	        </nav>

          <div class="book-spread">
          <div class="left-page">
          <div class="quote">“${matchingEntry.quote}”</div>
          <img src="assets/fingers.png" alt="illustration"/>
          </div>

          <div class="right-page">
          <div class="title">${matchingEntry.title}</div>
          <div class="description">${matchingEntry.description}</div>
          </div>
        `;
    } else {
        input.style.display = 'none';
        output.innerHTML = `
        <nav class="nav">
		      <a class="nav-link" href="input.html">Different Feel - Reset</a>
              <a class="nav-link" href="index.html">Home</a>
	    </nav>
        
        <div class="book-spread">
          
        <div class="left-page">
          <div class="dots"> • • • • • </div>
        </div>
          
        <div class="right-page">
          <div class="error"> er • r • or </div>

        <div class="message"> 
          every emotion deserves to be detected 
          <br>
          <br>
          your page is still blank 
          <br>
          — try again and let your feelings be heard </div>
        </div>
        `;
    }
})
