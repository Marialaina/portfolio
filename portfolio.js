$(() => {
  if (typeof $ == 'undefined'){
    console.log('oops! I still have to link my jQuery properly!');
  } else {console.log('I did it! I linked jQuery and this js file properly!')};

  console.log('app.js')

  let sheetUrl = "https://docs.google.com/spreadsheets/d/1QHRCoLjGvakXjF665KhdFsBuGYuhRS_6POGI-olPViE/edit?usp=sharing"

  let sheetID = "1QHRCoLjGvakXjF665KhdFsBuGYuhRS_6POGI-olPViE"

  //let sheetAsJSON = `https://spreadsheets.google.com/feeds/list/${sheetID}/od6/public/values?alt=json`

  let sheetAsJSON = "https://spreadsheets.google.com/feeds/list/1QHRCoLjGvakXjF665KhdFsBuGYuhRS_6POGI-olPViE/od6/public/values?alt=json"

  const render = (projectsArr) => {
    console.log('this is projectsArr', projectsArr)
}


  
  //This is to make the api call
  $.ajax({url:sheetAsJSON})
    .then( data => {
      //return a new array of data..best way to do that is....map()
      const projects = data.feed.entry.map(project => {
          return {
            title: project.gsx$title.$t,
            image: project.gsx$image.$t,
            description: project.gsx$description.$t,
            link: project.gsx$link.$t,
          }
      
      })
      console.log(projects);
      projects.forEach(project => {
        //it might have to be const my_projects and not article.
    const $article = $("<article>").html(
        
      `<div class="card" style="width: 18rem">
      <img src="${project.image}" class="card-img-top" alt="${project.title} picture">
      <div class="card-body">
      <h5 class="card-title">${project.title}</h5>
      <p class="card-text">${project.description}</p>
      <a href="${project.link}" class="btn btn-primary"> View Project </a>
      </div>
    </div>`
    );
    $('.projects-main').append($article);
    console.log('all projects rendered...');
  });

  
 

    })
  })







  const modalBtns = [...document.querySelectorAll(".button")];
  modalBtns.forEach(function(btn){
  btn.onclick = function() {
  const modal = btn.getAttribute('data-modal');
  console.log(modal);
  document.getElementById(modal).style.display = "block";
}
});


const closeBtns = [...document.querySelectorAll(".close-button")];
  closeBtns.forEach(function(btn){
  btn.onclick = function(){
  const modal = btn.closest('.modal');
  modal.style.display = "none";
}
});



window.onclick = function(event){
if (event.target.className === "modal"){
  event.target.style.display = "none";
}
}

