const BarangService = require("../Services/Barang");
const response = require("../Helpers/Response");

module.exports = {
  get: async (req, res) => {
    let getDataBarang = await BarangService.getAllBarang();

    res.json(
      response.success("Berhasil Menampilkan Data Barang", getDataBarang)
    );
  },
  add: async (req, res) => {
    const nama = req.body.nama || "";
    const kode = req.body.kode || null;
    const harga = req.body.harga || 0;
    const satuan = req.body.satuan || "";
    const created_at = new Date();
    const created_by = req.body.created_by;

    const dataInsert = { nama, kode, harga, satuan, created_at, created_by };

    const cekKodeExists = await BarangService.getBarangByKode(kode);

    if (cekKodeExists) {
      res.json(response.failed("Kode harus unik"));
    } else {
      const insertBarang = await BarangService.insertBarang(dataInsert)
        .then((result) => {
          res.json(
            response.success("Berhasil Menambahkan Data Barang", result)
          );
        })
        .catch((error) => {
          res.json(response.failed("Gagal Menambahkan Data Barang", error));
        });
    }
  },
  update: async (req, res) => {
    const id_barang = req.params.id_barang;
    const nama = req.body.nama || "";
    const harga = req.body.harga || 0;
    const satuan = req.body.satuan || "";
    const updated_at = new Date();
    const updated_by = req.body.updated_by;

    const dataUpdate = { nama, harga, satuan, updated_at, updated_by };
    const where = { id_barang };

    const getBarangById = await BarangService.getBarangById(id_barang);

    if (getBarangById != undefined) {
      const updateBarang = await BarangService.updateBarang(dataUpdate, where)
        .then((result) => {
          res.json(response.success("Berhasil Mengubah Data Barang", result));
        })
        .catch((error) => {
          res.json(response.failed("Gagal Mengubah Data Barang", error));
        });
    } else {
      res.json(response.failed("Data Barang tidak ditemukan"));
    }
  },
  delete: async (req, res) => {
    const id_barang = req.params.id_barang;

    const getBarangById = await BarangService.getBarangById(id_barang);

    if (getBarangById != undefined) {
      const deleteBarang = await BarangService.deleteBarang(id_barang)
        .then((result) => {
          res.json(response.success("Berhasil Menghapus Data Barang", result));
        })
        .catch((error) => {
          res.json(response.failed("Gagal Menghapus Data Barang", error));
        });
    } else {
      res.json(response.failed("Dat Barang tidak ditemukan", error));
    }
  },
};
