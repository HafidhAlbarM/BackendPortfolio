const AuthService = require("../Services/Auth");
const response = require("../Helpers/Response");

module.exports = {
  signup: async (req, res) => {
    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;

    const data = { username, email, password };

    const cekEmail = await AuthService.cekEmail(email);

    if (cekEmail) {
      res.json(response.failed("Email sudah terdaftar"));
    } else {
      const createUser = await AuthService.createUser(data)
        .then((result) => {
          res.json(response.success("Registrasi berhasil", result));
        })
        .catch((error) => {
          res.json(response.failed("Registrasi gagal", error));
        });
    }
  },
};
