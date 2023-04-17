interface FormValues {
  nama?: string;
  email?: string;
  telepon?: string;
  gender?: string;
  ttl?: string;
  walletAddress?: any;
  status?: any;
  namaDokter?: string;
  pendidikan?: string;
  strNumber?: string;
  category?: string;
  img?: string;
  address?: any;
  sesi?: string;
  tanggal?: any;
  keluhan?: string;
  diagnosa?: string
  tensi?: string;
  gula?: string;
}

interface Errors {
  nama?: string;
  email?: string;
  telepon?: string;
  gender?: string;
  ttl?: string;
  walletAddress?: any;
  status?: any;
  namaDokter?: string;
  pendidikan?: string;
  strNumber?: string;
  category?: string;
  img?: string;
  address?: any;
  sesi?: string;
  tanggal?: any;
  keluhan?: string;
  diagnosa?: string
  tensi?: string;
  gula?: string;
}

const validation = (values: FormValues): Errors => {
  const errors: Errors = {};
  if (!values.nama) {
    errors.nama = 'Nama wajib diisi';
  }
  if (!values.email) {
    errors.email = 'Email wajib diisi';
  }
  if (!values.telepon) {
    errors.telepon = 'Nomor telepon wajib diisi';
  }
  if (!values.gender) {
    errors.gender = 'Gender wajib diisi';
  }
  if (!values.ttl) {
    errors.ttl = 'Tanggal lahir wajib diisi';
  }
  if (!values.walletAddress) {
    errors.walletAddress = 'Wallet address wajib diisi';
  }
  if (!values.status) {
    errors.status = 'Status wajib diisi';
  }
  if (!values.namaDokter) {
    errors.namaDokter = 'Nama Dokter wajib diisi';
  }
  if (!values.pendidikan) {
    errors.pendidikan = 'Pendidikan wajib diisi';
  }
  if (!values.strNumber) {
    errors.strNumber = 'Nomor STR wajib diisi';
  }
  if (!values.category) {
    errors.category = 'Kategori wajib diisi';
  }
  if (!values.img) {
    errors.img = 'Gambar wajib diisi';
  }
  if (!values.address) {
    errors.address = 'Wallet address wajib diisi';
  }
  if (!values.sesi) {
    errors.sesi = 'Sesi wajib diisi';
  }
  if (!values.tanggal) {
    errors.tanggal = 'Tanggal wajib diisi';
  }
  if (!values.keluhan) {
    errors.keluhan = 'Keluhan wajib diisi';
  }
  if (!values.diagnosa) {
    errors.diagnosa = 'Diagnosa wajib diisi';
  }
  if (!values.tensi) {
    errors.tensi = 'Tensi wajib diisi';
  }
  if (!values.gula) {
    errors.gula = 'Gula wajib diisi';
  }
  return errors;
};

export default validation;
