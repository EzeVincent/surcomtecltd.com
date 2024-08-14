/*MENU OPEN AND CLOSE*/ 
function showSidebar(){
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'flex';
}
function hideSidebar(){
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'none';
}



/*SECTION SHOW */
function showSection(sectionId) {
    // Hide all sections
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.classList.remove('active');
    });

    // Hide all buttons
    const buttons = document.querySelectorAll('nav button');
    buttons.forEach(button => {
        button.classList.remove('active');
    });

    // Show the selected section
    const selectedSection = document.getElementById(sectionId);
    if (selectedSection) {
        selectedSection.classList.add('active');
    }

    // Set the corresponding button as active
    const selectedButton = document.querySelector(`nav button[onclick="showSection('${sectionId}')"]`);
    if (selectedButton) {
        selectedButton.classList.add('active');
    }
}

// Optionally, show the first section by default
document.addEventListener('DOMContentLoaded', () => {
    showSection('section1');
});



  

/*WORD CHANGE*/
window.onload = function() {
    var changingWord = document.getElementById("changingWord");
    var words = ["Secuity Equipment", "Security Personnel", "Access Control Equipment"]; // Add your words here
    var index = 0;

    function changeWord() {
        changingWord.textContent = words[index];
        index = (index + 1) % words.length;
    }

    setInterval(changeWord, 5000); // Change word every 2 seconds
};

  /*LOADER*/

  window.addEventListener("load", () => {
    const loader = document.querySelector(".loader");

    loader.classList.add("disapear");
    loader.addEventListener("transitionend", () => {
        document.body.removeChild("loader");
    })
  })

