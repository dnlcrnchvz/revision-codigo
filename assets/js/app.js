const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;
const $n = document.querySelector('#name'); /* id de p incorrecto*/
const $b = document.querySelector('#blog'); /* id de p incorrecto*/
const $l = document.querySelector('#location');

async function displayUser (userName){
  try{
  $n.textContent = 'cargando...';
  const response = await fetch(`${usersEndpoint}/${userName}`);
  const data = await response.json(); /* promesa en json */
  $n.textContent = data.name; /* quite el template literals */
  $b.textContent = data.blog; /* quite el template literals */
  $l.textContent = data.location; /* quite el template literals */
  }catch(err){ /* aqui esta el catch */
    handleError(err)
  }
}

function handleError(err) {
  console.log('OH NO!');
  console.log(err);
  $n.textContent = `Algo salió mal: ${err}`
}

displayUser('stolinski'); /* el catch lo pase al try */