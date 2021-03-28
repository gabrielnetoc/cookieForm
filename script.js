

if(getCookie()){
  document.location = 'home.html';
}
window.addEventListener('load', init);

let form = null;
function init(){

    form = document.forms["login-form"];
    form.addEventListener("submit", function(evento) {
      evento.preventDefault();
      if (form.user.value=='NoobMaster69' && form.pass.value=='vingadormaisforte') {
        adicionarCookie();
        document.location = 'home.html';
        
      }else{
        document.location = 'epa.html'  
      } 
      

    }); 
}

function adicionarCookie(){

  let user = form.user.value
  let pass = form.pass.value

  criarCookie(user , pass, 5)

}

function criarCookie(user, pass, days) {
  let data = new Date();
  data.setDate(data.getDate()+days);
  let cookieUser = `${user}=${pass}; expires=${data.toUTCString()}`
  document.cookie = cookieUser;
  
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

function validarNoob() {
  let user = form.user.value;
  if(user == 'NoobMaster69'){
    document.location = 'home.html'
  }else{
    document.location = 'index.html'
  }
  
}


function deleteCookie() {
  let user = form.user.value
  let data = new Date('2020-01-25');
  let deleteCookie = `${user}=; expires=${data.toUTCString()}`
  document.cookie = deleteCookie;
  
}




