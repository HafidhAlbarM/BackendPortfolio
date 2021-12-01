const BarangModel = require("../Models/Barang");
const response = require("../Helpers/Response");
const Redis = require("redis");
const redisClient = Redis.createClient();
redisClient.connect();

module.exports = {
  getAllBarang: async () => {
    const redisData = await redisClient.get("barang");

    if (redisData != null) {
      console.log("data from redis cache");
      return JSON.parse(redisData);
    } else {
      console.log("data from database");
      const dataBarang = await BarangModel.query();
      redisClient.set("barang", JSON.stringify(dataBarang));
      return dataBarang;
    }
  },
  getBarangById: (id) => {
    return new Promise((resolve, reject) => {
      BarangModel.query()
        .findById(id)
        .then((result) => {
          resolve(result);
        })
        .catch((error) => {
          response.failed("Gagal mendapatkan data barang", error);
        });
    });
  },
  insertBarang: (data) => {
    return new Promise((resolve, reject) => {
      BarangModel.query()
        .insertAndFetch(data)
        .then((result) => {
          resolve(result);
        })
        .reject((error) => {
          response.failed("Gagal menambahkan data barang", error);
        });
    });
  },
  updateBarang: async (data, where) => {
    return new Promise(async (resolve, reject) => {
      const getBarang = await BarangModel.query().findById(where.id_barang);
      await getBarang
        .$query()
        .updateAndFetch(data)
        .then((result) => {
          resolve(result);
        })
        .catch((error) => {
          response.failed("Gagal mengubah data barang", error);
        });
    });
  },
  deleteBarang: (id_barang) => {
    return new Promise((resolve, reject) => {
      BarangModel.query()
        .deleteById(id_barang)
        .then((result) => {
          resolve(result);
        })
        .catch((error) => {
          response.failed("Gagal menghapus data barang", error);
        });
    });
  },
};
