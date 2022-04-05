class GithubView {
  constructor(model, api) {
    this.model = model;
    this.api = api;

    const submitButtonEl = document.querySelector('#submit-button');
    const repoInputEl = document.querySelector('#repo-name-input');

    submitButtonEl.addEventListener('click', () => {
      const repoName = repoInputEl.value;

      this.api.getRepoInfo(repoName, repoData => {
        this.display(repoName, repoData)
      });
    });
  }

  display(repoName, repoData) {
    const thisRepoName = document.querySelector('#repo-name')
    console.log(repoName)
    console.log(repoData)
    thisRepoName.innerText = repoData.full_name
    const thisRepoDescription = document.querySelector('#repo-description')
    thisRepoDescription.innerText = repoData.description
    const img = document.createElement("img")
    img.src = repoData.organization.avatar_url
    thisRepoDescription.after(img)



  }
}

module.exports = GithubView;