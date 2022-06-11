function getGitHubProfileInfos(){
  const url = 'https://api.github.com/users/alexfferro'

  fetch(url).then( response => response.json())
  .then( data => {
    document.querySelector('h1').textContent = data.name;
    userBio.textContent = data.bio;
    githubAvatar.src = data.avatar_url;
    userGitHub.href = data.html_url;
    userLogin.textContent = data.login;
  })
}

getGitHubProfileInfos()