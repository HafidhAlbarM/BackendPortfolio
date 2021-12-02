const UsersModel = require("../Models/Users");
const bcrypt = require("bcrypt");
const SALT = 10;

module.exports = {
  cekEmail: (email) => {
    return new Promise((resolve, reject) => {
      UsersModel.query()
        .where("email", email)
        .then((result) => {
          if (result.length > 0) {
            resolve(true);
          } else {
            resolve(false);
          }
        })
        .catch((error) => {
          reject(error.message);
        });
    });
  },
  createUser: async (data) => {
    let hashedPassword = await bcrypt.hash(data.password, SALT);
    data.password = hashedPassword;

    const insertUser = new Promise((resolve, reject) => {
      UsersModel.query()
        .insert(data)
        .then((result) => {
          console.log(result);
        })
        .catch((error) => {
          reject(error.message);
        });
    });

    const resultInsertUser = await insertUser;
    return resultInsertUser;
  },
};
