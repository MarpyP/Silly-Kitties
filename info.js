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