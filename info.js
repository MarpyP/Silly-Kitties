poga1=document.getElementById("poga1");

function act(){
  const element = document.querySelector('#code');
  const storage = document.createElement('textarea');
  storage.value = element.innerHTML;
  element.appendChild(storage);
  storage.select();
  storage.setSelectionRange(0, 99999);
  document.execCommand('copy');
  element.removeChild(storage);
}
function fetchKantoPokemon(){
  fetch('https://cat-fact.herokuapp.com/facts/random')
  .then(response => response.json())
  .then(app => console.log(app))
}
console.log('https://cat-fact.herokuapp.com/facts/random');

document.addEventListener("DOMContentLoaded", () => {
  console.log("Hello!")
})
function fetchCatFacts(){
  fetch('https://catfact.ninja/facts')
  .then(resp => resp.json())
  .then(json =>
    renderCatFact(json.data)
  )
}
function renderCatFact(facts){
  let catFact = document.getElementById("fact-text")
  facts.map(fact =>{
    const p=document.createElement('p')
    p.setAttribute("id","actual-fact")
    p.innerHTML = fact.fact
    catFact.appendChild(p)
  })
}
document.addEventListener("DOMContentLoaded",() =>{
  fetchCatFacts();
})