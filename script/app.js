const loadAiInfo = async()=>{
    const url = `https://openapi.programming-hero.com/api/ai/tools`;
    const res = await fetch(url);
    const data = await res.json();
    displayAiInfo(data.data.tools.slice(0,6));
   const showAllBtn = document.getElementById('show-all');
   showAllBtn.addEventListener('click',function(){
        displayAiInfo(data.data.tools);

        showAllBtn.style.display ='none';
    });
    console.log(data.data.tools);
};
 
const displayAiInfo = ais =>{
    const aiContainer = document.getElementById('ai-container');
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
const modalBody =document.getElementById('ai-details');
   modalBody.innerHTML = `
   <div class="d-flex justify-content-around gap-2">
   <div class ="border border-danger-subtle bg-warning-subtle w-75">
       <h6>${ai.description}</h6>
       <div class="d-flex justify-content-around gap-2 ">
           <p class="border border-danger-subtle">${ai.pricing[0].price ? ai.pricing[0].price : 'free of cost'} per ${ai.pricing[0].plan}</p>
           <p class="border border-danger-subtle">${ai.pricing[1].price ? ai.pricing[1].price : 'free of cost'} per ${ai.pricing[1].plan}</p>
           <p class="border border-danger-subtle">${ai.pricing[2].price ? ai.pricing[2].price : 'free of cost'} per ${ai.pricing[2].plan}</p>
       </div>
       <div class="d-flex justify-content-around">
          <div>
           <h4>Features</h4>
           <ul>
               <li>${ai.features[1].feature_name ? ai.features[1].feature_name : 'no features'}</li>
               <li>${ai.features[2].feature_name ? ai.features[2].feature_name : 'no features'}</li>
               <li>${ai.features[3].feature_name ? ai.features[3].feature_name : 'no features'}</li>
           </ul>
           </div>
          <div>
           <h4>Integrations</h4>
           <ul>
               <li>${ai.integrations[0] ?ai.integrations[0] : 'no intregations'}</li>
               <li>${ai.integrations[1] ?ai.integrations[1] : 'no intregations'}</li>
               <li>${ai.integrations[2] ?ai.integrations[2] : 'no intregations'}</li>
           </ul>
          </div>
       </div>
   </div>
   <div>
       <img class="img-fluid" src="${ai.image_link[0]}" alt="">
       <button class="bg-danger">Accuracy: ${ai.accuracy.score*100 ? ai.accuracy.score*100 : 'no accuarcy'}%</button>
       <p>${ai.input_output_examples[0].input ? ai.input_output_examples[0].input : 'no text'}</p>
       <p>${ai.input_output_examples[0].output ? ai.input_output_examples[0].output : 'no reply'}</p>
   </div>
</div>
   `;
}




loadAiInfo();