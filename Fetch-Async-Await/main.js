const URL = `https://api.github.com/users/LuisMario10`

async function getDataFromMyGitHub() {
    return result = await fetch(URL).then(res => res.json());
}

getDataFromMyGitHub().then(e => console.log(e));