export interface ButtonProps {
  type: string;
  title: string;
  onClick?: MouseEventHandler<HTMLElement>;
  addClass?: string;
}

export interface DoctorCardProps {
  name: string;
  img: string;
  title: string;
  sch: string;
}

export interface DashboardProfilProps {
  name: string;
  role: string;
}

export interface DashboardSidebarProps {
  menu1: string;
  menu2: string;
  menu3: string;
  onClickMenu1: Function;
  onClickMenu2: Function;
  onClickMenu3: Function;
  title1: string;
  title2: string;
  title3: string;
  menu3Show: boolean;
}

export interface DashboardTableProps {
  no: number;
  date: string;
  doctor: string;
  link: string;
}

export interface NavbarProps {
  home: boolean;
  konsultasi: boolean;
  tentang: boolean;
  dokter: boolean;
}

export interface NavbarLoginProps {
  home: boolean;
  konsultasi: boolean;
  tentang: boolean;
  dokter: boolean;
  profil: boolean;
  dashboard: boolean;
}

export interface ProfilDataProps {
  name: string;
  gender: string;
  ttl: string;
  email: string;
  phone: string;
}

export interface ProfilTambahEditProps {
  name: string;
  ttl: string;
  email: string;
  phone: string;
  nameChange: React.ChangeEventHandler<HTMLInputElement>;
  ttlChange: React.ChangeEventHandler<HTMLInputElement>;
  emailChange: React.ChangeEventHandler<HTMLInputElement>;
  phoneChange: React.ChangeEventHandler<HTMLInputElement>;
  genderChange: React.ChangeEventHandler<HTMLInputElement>;
  nameName: string;
  ttlName: string;
  emailName: string;
  phoneName: string;
  genderName: string;
  maleValue: string;
  femaleValue: string;
}

export interface ProfilUserProps {
  name: string;
  role: string;
  username?: string;
  walletAddress: any;
}

export interface AdminDetailDokter {
  name: string;
  email: string;
  telepon: string;
  walletAddress: any;
  role: string;
  education: string;
  strnumber: string;
}

export interface AdminTableDokter {
  no: number;
  walletAddress: any;
  name: string;
  status: boolean;
  detailUrl: string;
  updateUrl: string;
}

export interface AdminTambahEditKonsultasi {
  name: string;
  doctor: string;
  date: string;
  keluhan: string;
  diagnosa: string;
  tekanan: string;
  gula: string;
}

export interface AdminTableKonsultasi {
  no: number;
  walletAddress: any;
  name: string;
  date: string;
}

export interface AdminDetailPasien {
  name: string,
  gender: string,
  ttl: string;
  email: string,
  phone: string,
  address: string,
  linkRiwayat: string,
}

export interface AdminDetailRiwayatPasien {
  date: string,
  name: string,
  doctor: string,
  cat: string,
  keluhan: string,
  diagnosa: string,
  tekanan: string,
  gula: string,
}

export interface AdminTambahPasien {
  name: string,
  gender: string,
  ttl: string,
  email: string,
  phone: string,
  address: string,
  linkRiwayat: string,
}

export interface AdminTablePasien {
  no: number,
  walletAddress: any,
  name: string
}

export interface DokterTable {
  no: number,
  walletAddress: any,
  name: string,
  date: string,
  hasil: string,
}

export interface PasienBuktiPendaftaran {
  name: string,
  doctor: string,
  keluhan: string,
  date: string,
  sesi: string,
}
