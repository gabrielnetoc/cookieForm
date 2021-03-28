
if(!(getCookie())){
  document.location = 'index.html';
}

window.addEventListener('load', init);

function init(){


  document.querySelector('#sair').addEventListener('click', sair); 

}


function sair(){
  document.location = 'index.html';
  deleteCookie();
}

function deleteCookie() {
  let nomeCookie = 'NoobMaster69'; 
  let data = new Date('2020-01-25');
  let deleteCookie = `${nomeCookie}=; expires=${data.toUTCString()}`
  document.cookie = deleteCookie;
  
}

function getCookie() {
  let nomeCookie = 'NoobMaster69';
  let cookies = document.cookie
  let vetorCookie = cookies.split(": ")

  for(i=0; i <vetorCookie.length; i++){
    let cookie = vetorCookie[i].split('=');
    if(cookie[0] == nomeCookie){
      return true;
    }
  }
  return false;
}




