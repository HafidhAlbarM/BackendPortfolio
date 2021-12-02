const { Model } = require("objection");
const knex = require("../Config/DatabaseConfig");

Model.knex(knex);

class UsersModel extends Model {
  static get tableName() {
    return "users";
  }
  static get idColumn() {
    return "userid";
  }
}

module.exports = UsersModel;
