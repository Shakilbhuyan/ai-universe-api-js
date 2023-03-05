const loadAiInfo = async()=>{
    const url = `https://openapi.programming-hero.com/api/ai/tools`;
    const res = await fetch(url);
    const data = await res.json();
    displayAiInfo(data.data.tools);
    console.log(data.data.tools);
}
const displayAiInfo = ais =>{
  const aiContainer = document.getElementById('ai-container');
    
  ais.forEach(ai => {
    const aiDiv = document.createElement('div');
    aiDiv.innerHTML = `
    <div class="card">
    <img src="${ai.image}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">Features</h5>
          <ol>
               <li>${ai.features[0] ? ai.features[0] : ''}</li>
               <li>${ai.features[1] ? ai.features[1] : ''}</li>
               <li>${ai.features[2] ? ai.features[2] : ''}</li>
         </ol>
      <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
    </div>
  </div>
    `;
    aiContainer.appendChild(aiDiv);
  });
 
}
loadAiInfo();