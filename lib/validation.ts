/* eslint-disable no-prototype-builtins */
interface FormValues {
  [key: string]: any;
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
  // eslint-disable-next-line prefer-const
  let errors: Errors = {};
  if (values.hasOwnProperty('nama') && !values.nama) {
    errors.nama = 'Nama wajib diisi';
  }
  if (values.hasOwnProperty('email') && !values.email) {
    errors.email = 'Email wajib diisi';
  }
  if (values.hasOwnProperty('telepon') && !values.telepon) {
    errors.telepon = 'Nomor telepon wajib diisi';
  }
  if (values.hasOwnProperty('gender') && !values.gender) {
    errors.gender = 'Gender wajib diisi';
  }
  if (values.hasOwnProperty('ttl') && !values.ttl) {
    errors.ttl = 'Tanggal lahir wajib diisi';
  }
  if (values.hasOwnProperty('walletAddress') && !values.walletAddress) {
    errors.walletAddress = 'Wallet address wajib diisi';
  }
  if (values.hasOwnProperty('status') && !values.status) {
    errors.status = 'Status wajib diisi';
  }
  if (values.hasOwnProperty('namaDokter') && !values.namaDokter) {
    errors.namaDokter = 'Nama Dokter wajib diisi';
  }
  if (values.hasOwnProperty('pendidikan') && !values.pendidikan) {
    errors.pendidikan = 'Pendidikan wajib diisi';
  }
  if (values.hasOwnProperty('strNumber') && !values.strNumber) {
    errors.strNumber = 'Nomor STR wajib diisi';
  }
  if (values.hasOwnProperty('category') && !values.category) {
    errors.category = 'Kategori wajib diisi';
  }
  if (values.hasOwnProperty('img') && !values.img) {
    errors.img = 'Gambar wajib diisi';
  }
  if (values.hasOwnProperty('address') && !values.address) {
    errors.address = 'Wallet address wajib diisi';
  }
  if (values.hasOwnProperty('sesi') && !values.sesi) {
    errors.sesi = 'Sesi wajib diisi';
  }
  if (values.hasOwnProperty('tanggal') && !values.tanggal) {
    errors.tanggal = 'Tanggal wajib diisi';
  }
  if (values.hasOwnProperty('keluhan') && !values.keluhan) {
    errors.keluhan = 'Keluhan wajib diisi';
  }
  if (values.hasOwnProperty('diagnosa') && !values.diagnosa) {
    errors.diagnosa = 'Diagnosa wajib diisi';
  }
  if (values.hasOwnProperty('tensi') && !values.tensi) {
    errors.tensi = 'Tensi wajib diisi';
  }
  if (values.hasOwnProperty('gula') && !values.gula) {
    errors.gula = 'Gula wajib diisi';
  }
  return errors;
};

export default validation;
