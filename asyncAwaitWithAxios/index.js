const axios = require("axios");

const fetchGithubInfo = async (url) => {
  console.log(`Fetching ${url}`);

  const githubInfo = await axios(url);

  return {
    name: githubInfo.data.name,
    bio: githubInfo.data.bio,
    repos_url: githubInfo.data.repos_url,
  };
};

const fetchUserInfo = (names) => {
  const requests = names.map((name) => {
    const url = `http://api.github.com/users/${name}`;
    return fetchGithubInfo(url).then((response) => {
      console.log("response", response);
      return response;
    });
  });

  console.log("requests", requests);

  return Promise.all(requests);
};

const promises = fetchUserInfo(["sindresorhus", "yyx990803", "gaearon"]);

// console.log("promises", promises);
promises
  .then((response) => {
    try {
      console.log(JSON.stringify(response));
      throw new Error();
    } catch (error) {
      console.log("Error ==>>", error);
    }
  })
  .catch((err) => {
    console.log("err =>=>", err);
  });
