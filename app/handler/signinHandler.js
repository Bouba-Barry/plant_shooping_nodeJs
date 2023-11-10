const signinHandler = (req, res) => {
  const sessions = {};
  const { email, password } = req.body;
  if (!email) {
    res.status(401).end();
    return;
  }

  const expectedPassword = users[email];
  if (!expectedPassword || expectedPassword !== password) {
    res.status(401).end();
    return;
  } else {
    const sessionToken = uuid.v4();

    const now = new Date();
    const expiresAt = new Date(+now + 120 * 1000);

    // create a session containg infor to the session
    const session = new Session(email, expiresAt);
    sessions[sessionToken] = session;
    res.cookie("session_token", sessionToken, { expires: expiresAt });
    res.end();
  }
};
