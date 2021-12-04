var badRequestUrl = 'https://api.github.com/orgs/nodejddd/repad'

fetch(badRequestUrl)
.then(function(response){
  if (response.status !== 200) {
    //console.log(response.status)
  document.location.replace('./404.html')
  } else {
    return response.json();
   }
 })


