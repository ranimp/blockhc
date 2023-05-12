export interface ButtonProps {
  type: string;
  title: string;
  onClick?: any;
  addClass?: string;
}

export interface DoctorCardProps {
  name: string;
  img: string;
  title: string;
  sch?: string;
  detailUrl?: string;
}

export interface DashboardProfilProps {
  name: string;
  role: string;
}

export interface DashboardSidebarProps {
  menu1?: any;
  menu2?: any;
  menu3?: any;
  onClickMenu1?: () => void;
  onClickMenu2?: () => void;
  onClickMenu3?: () => void;
  title1?: string;
  title2?: string;
  title3?: string;
  menu3Show?: boolean;
}

export interface DashboardTableProps {
  no: number;
  date: string;
  doctor: string;
  link?: string;
  updateUrl?: string;
  pasien?: boolean;
}

export interface NavbarProps {
  home?: boolean;
  konsultasi?: boolean;
  tentang?: boolean;
  dokter?: boolean;
}

export interface NavbarLoginProps {
  home?: boolean;
  konsultasi?: boolean;
  tentang?: boolean;
  dokter?: boolean;
  profil?: boolean;
  dashboard?: boolean;
}

export interface ProfilDataProps {
  name: string;
  gender: string;
  ttl: string;
  email: string;
  phone: string;
}

export interface ProfilTambahEditProps {
  name?: string;
  ttl?: string;
  email?: string;
  phone?: string;
  nameChange?: React.ChangeEventHandler<HTMLInputElement>;
  ttlChange?: React.ChangeEventHandler<HTMLInputElement>;
  emailChange?: React.ChangeEventHandler<HTMLInputElement>;
  phoneChange?: React.ChangeEventHandler<HTMLInputElement>;
  genderChange?: React.ChangeEventHandler<HTMLInputElement>;
  nameName?: string;
  ttlName?: string;
  emailName?: string;
  phoneName?: string;
  genderName?: string;
  maleValue?: string;
  femaleValue?: string;
  error?: any;
  gender?: any;
}

export interface ProfilUserProps {
  name?: string;
  role?: string;
  username?: string;
  walletAddress?: any;
}

export interface AdminDetailDokter {
  name: string;
  email: string;
  telepon: string;
  walletAddress: any;
  role: string;
  education: string;
  strnumber: string;
  category: string;
}

export interface AdminTableDokter {
  no: number;
  walletAddress: any;
  name: string;
  status: boolean;
  detailUrl?: string;
  updateUrl?: string;
}

export interface AdminUpdateDokter {
  namaDokter: string;
  telepon: string;
  email: string;
  walletAddress: any;
  pendidikan: string;
  strNumber: string;
  category: string;
  img: string;
  status?: boolean;
}

export interface AdminTambahEditKonsultasi {
  name?: string;
  nameName?: string;
  nameChange?: React.ChangeEventHandler<HTMLInputElement>;
  doctor?: string;
  doctorName?: string;
  doctorChange?: React.ChangeEventHandler<HTMLInputElement>;
  date?: string;
  dateName?: string;
  dateChange?: React.ChangeEventHandler<HTMLInputElement>;
  keluhan?: string;
  keluhanName?: string;
  keluhanChange?: React.ChangeEventHandler<HTMLInputElement>;
  diagnosa?: string;
  diagnosaName?: string;
  diagnosaChange?: React.ChangeEventHandler<HTMLInputElement>;
  tekanan?: string;
  tekananName?: string;
  tekananChange?: React.ChangeEventHandler<HTMLInputElement>;
  gula?: string;
  gulaName?: string;
  gulaChange?: React.ChangeEventHandler<HTMLInputElement>;
  onClick?: any;
  wallet?: any;
  walletName?: string;
  walletChange?: React.ChangeEventHandler<HTMLInputElement>;
  error?: any;
}

export interface AdminTableKonsultasi {
  no: number;
  walletAddress: any;
  name: string;
  date: string;
  tambahUrl?: string;
  detailUrl?: string;
}

export interface AdminDetailPasien {
  name: string;
  gender: string;
  ttl: string;
  email: string;
  phone: string;
  linkRiwayat: any;
}

export interface AdminDetailRiwayatPasien {
  name?: string;
  nama?: string;
  gender?: string;
  dokter?: string;
  doctor?: string;
  telepon?: string;
  sesi?: string;
  tanggal?: string;
  date?: string;
  keluhan?: string;
  diagnosa?: string;
  tekanan?: string;
  gula?: string;
  wallet?: any;
  status?: boolean;
}

export interface AdminTambahPasien {
  name: string;
  gender: string;
  ttl: string;
  email: string;
  phone: string;
  address: string;
  linkRiwayat: string;
}

export interface AdminUpdatePasien {
  nama: string;
  telepon: string;
  ttl: string;
  email: string;
  status?: boolean;
  gender?: string;
  walletAddress: any;
}

export interface AdminTablePasien {
  no: number;
  walletAddress: any;
  name: string;
  status: boolean;
  detailUrl?: string;
  updateUrl?: string;
}

export interface DokterTable {
  no: number;
  walletAddress: any;
  name: string;
  date?: string;
  tambahUrl?: string;
  detailUrl?: string;
  hasil?: boolean;
}

export interface PasienBuktiPendaftaran {
  name: string;
  doctor: string;
  keluhan: string;
  date: string;
  sesi: string;
}
