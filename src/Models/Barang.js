const { Model } = require("objection");
const knex = require("../Config/DatabaseConfig");

Model.knex(knex);

class BarangModel extends Model {
  static get tableName() {
    return "barang";
  }
}

module.exports = BarangModel;
