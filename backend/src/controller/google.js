const google = async (req, res) => {
    const { code: googleAccessToken } = req.body;

    const response = await fetch(
        "https://www.googleapis.com/oauth2/v2/userinfo",
        {
            method: "get",
            headers: {
                Authorization: `Bearer ${googleAccessToken}`,
            },
        }
    );
    const result = await response.json();

    res.json(result);
};

module.exports = { google };
