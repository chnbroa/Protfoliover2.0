const { User } = require("../models/User");

let auth = (req, res, next) => {
  //인증 처리를 하는 곳

  //클라이언트 쿠키에서 토큰을 가져온다.

  let token = req.cookies.x_auth;

  //토큰을 복호화 한후 유저를 찾는다.
  User.findByToken(token, (err, user) => {
    if (err) throw err;
    if (!user) return res.json({ isAuth: false, error: true })

    //user가 있다면 넣어주기..
    //이런식으로 넣어줘야 index.js에서 token과useer 사용 가능
    req.token = token;
    req.user = user;
    //꼭 미들웨어 에서 넘어갈수 있도록 next 해주기
    next();

  })
  //유저가 있으면 인증 OK

  //유저가 없으면 인증 NO!
}

module.exports = { auth };