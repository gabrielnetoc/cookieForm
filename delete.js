//Da forma q a home foi construida qualquer um pode acessar ela, logo precisamos empedir usuarios que não tenham cookie
// do noobMaster69 sejam proibidos de entrar

//Se tentar acessar a pagina home diretamente sem cookie o usuário será mandado de volta para a de login
if(!(getCookie())){
  document.location = 'index.html';
}

window.addEventListener('load', init);
/**
 * Não tem formularrio na pagina home, n precisa dessa variavel recebendo null
 */
// let form = null;
function init(){
//Aqui ao iniciar a pagina ele esta deletado o cookie  
  // deleteCookie();

  //Aqui vamos adionar o evento no js, como o marcel recomendou pra n perder nota por bobeira :)
  document.querySelector('#sair').addEventListener('click', sair); 
  //Ao deletar o cookie, que é quando aperta no botão de sair é necessário voltar para a pagina de login    
}


/**
 * Explicação: vamos criar uma função sair que vai devolver o usuário para a tela de login 
 */
function sair(){
  document.location = 'index.html';
  deleteCookie();
}

function deleteCookie() {
  let nomeCookie = 'NoobMaster69'; //Aqui vc precisa do nome do cookie criado, ele vai ter um nome padrão, o seu cookie sempre vai ter esse nome, logo n preciasa pegar de algum lugar como vc tava fazendo antes
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




