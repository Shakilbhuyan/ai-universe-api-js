const loadAiInfo = async()=>{
    const url = `https://openapi.programming-hero.com/api/ai/tools`;
    const res = await fetch(url);
    const data = await res.json();
    displayAiInfo(data.data.tools);
    console.log(data.data.tools);
}
const displayAiInfo = ais =>{
  const aiContainer = document.getElementById('ai-container');
//   display only 6 card
const showAll = document.getElementById('show-all');
if(ais.length > 6){
    ais = ais.slice(0,6);
    showAll.classList.remove('d-none');
}
else{
    showAll.classList.add('d-none')
}
    // display all
  ais.forEach (ai => {
    const aiDiv = document.createElement('div');
    aiDiv.innerHTML = `
    <div class="card">
    <img class="img-fluid" src="${ai.image}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">Features</h5>
          <ol>
               <li>${ai.features[0] ? ai.features[0] : 'No features'}</li>
               <li>${ai.features[1] ? ai.features[1] : 'No features'}</li>
               <li>${ai.features[2] ? ai.features[2] : 'No features'}</li>
         </ol><hr>
      <p class="card-text fs-3 fw-bolder">${ai.name}.</p>
      <p><i class="fa-regular fa-calendar-days"></i> ${ai.published_in}</p>
      <button onclick ="loadAiDetails('${ai.id}')" type="button" class="border border-0 text-danger" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
      <i class="fa-solid fa-arrow-right"></i>
</button>
    </div>
  </div>
    `;
    aiContainer.appendChild(aiDiv);
  });
  toggleSpinner(false)
};

// loader
const toggleSpinner = isLoading => {
    const loaderSection = document.getElementById('loader');
    if(isLoading){
        loaderSection.classList.remove('d-none');
    }
    else{
        loaderSection.classList.add('d-none');
    }
};
toggleSpinner(true);

// details
const loadAiDetails = async(id)=>{
    const url = `https://openapi.programming-hero.com/api/ai/tool/${id}`;
     const res = await fetch(url);
     const data = await res.json();
    displayAiDetail(data.data);
    
}
const displayAiDetail = ai =>{
console.log(ai);
}




loadAiInfo();