const github = async (req, res) => {
    const { code } = req.body;
    const githubTokenResponse = await fetch(
        "https://github.com/login/oauth/access_token",
        {
            method: "post",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
                Accept: "application/json",
            },
            body: `client_id=${process.env.GITHUB_CLIENT_ID}&client_secret=${process.env.GITHUB_CLIENT_SECRET}&code=${code}`,
        }
    );
    const githubTokenResult = await githubTokenResponse.json();

    const githubAccessToken = githubTokenResult.access_token;
    const response = await fetch("https://api.github.com/user", {
        method: "get",
        headers: {
            Authorization: `Bearer ${githubAccessToken}`,
        },
    });
    const result = await response.json();

    res.json(result);
};

module.exports = { github };
