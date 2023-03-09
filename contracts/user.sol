// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

import "./roles.sol";

contract UserData {
    UserRoles public roles;
    User[] public users;
    Doctor[] public doctors;

    struct User {
        string nama;
        string email;
        string telepon;
        string gender;
        string tanggalLahir;
        address wallet;
        bool status;
    }

    struct Doctor {
        string nama;
        string email;
        string telepon;
        string hari;
        string sesi;
        string pendidikan;
        string str;
        address wallet;
        bool status;
    }

    event UserAdded(
        string nama,
        string email,
        string telepon,
        string gender,
        string tanggalLahir,
        address wallet,
        bool status
    );

    event DoctorAdded(
        string nama,
        string email,
        string telepon,
        string hari,
        string sesi,
        string pendidikan,
        string str,
        address wallet,
        bool status
    );

    constructor(address _rolesContractAddress) {
        roles = UserRoles(_rolesContractAddress);
    }

    modifier onlyAdmin() {
        require(
            msg.sender == roles.admin(),
            "Hanya admin yang diizinkan untuk mengakses."
        );
        _;
    }

    modifier onlyUser() {
        require(
            roles.isPasien(msg.sender) ||
                roles.isAdmin(msg.sender) ||
                roles.isDokter(msg.sender),
            "Hanya pengguna terdaftar yang diizinkan untuk mengakses."
        );
        _;
    }

    modifier onlyPasien() {
        require(
            roles.isPasien(msg.sender),
            "Hanya pasien yang diizinkan untuk mengakses."
        );
        _;
    }

    // add user
    function addUser(
        string memory _nama,
        string memory _email,
        string memory _telepon,
        string memory _gender,
        string memory _tanggalLahir,
        bool _status
    ) public {
        User memory newUser = User(
            _nama,
            _email,
            _telepon,
            _gender,
            _tanggalLahir,
            msg.sender,
            _status
        );
        users.push(newUser);
        emit UserAdded(
            _nama,
            _email,
            _telepon,
            _gender,
            _tanggalLahir,
            msg.sender,
            _status
        );
    }

    // update user
    function updateUser(
        string memory _nama,
        string memory _email,
        string memory _telepon,
        string memory _gender,
        string memory _tanggalLahir,
        bool _status
    ) public onlyPasien {
        for (uint256 i = 0; i < users.length; i++) {
            if (users[i].wallet == msg.sender) {
                users[i].nama = _nama;
                users[i].email = _email;
                users[i].telepon = _telepon;
                users[i].gender = _gender;
                users[i].tanggalLahir = _tanggalLahir;
                users[i].status = _status;
                break;
            }
        }
    }

    // get user
    function getUser(
        address _wallet
    )
        public
        view
        onlyUser
        returns (
            address,
            string memory,
            string memory,
            string memory,
            string memory,
            string memory,
            bool
        )
    {
        for (uint256 i = 0; i < users.length; i++) {
            if (users[i].wallet == _wallet) {
                return (
                    users[i].wallet,
                    users[i].nama,
                    users[i].email,
                    users[i].telepon,
                    users[i].gender,
                    users[i].tanggalLahir,
                    users[i].status
                );
            }
        }
        return (address(0), "", "", "", "", "", false);
    }

    // add user for admin
    function addUserAdmin(
        address _wallet,
        string memory _nama,
        string memory _email,
        string memory _telepon,
        string memory _gender,
        string memory _tanggalLahir,
        bool _status
    ) public onlyAdmin {
        User memory newUser = User(
            _nama,
            _email,
            _telepon,
            _gender,
            _tanggalLahir,
            _wallet,
            _status
        );
        users.push(newUser);
        emit UserAdded(
            _nama,
            _email,
            _telepon,
            _gender,
            _tanggalLahir,
            _wallet,
            _status
        );
    }

    function addDoctor(
        string memory _nama,
        string memory _email,
        string memory _telepon,
        string memory _hari,
        string memory _sesi,
        string memory _pendidikan,
        string memory _str,
        address _wallet,
        bool _status
    ) public onlyAdmin {
        Doctor memory newDoctor = Doctor(
            _nama,
            _email,
            _telepon,
            _hari,
            _sesi,
            _pendidikan,
            _str,
            _wallet,
            _status
        );
        doctors.push(newDoctor);
        emit DoctorAdded(
            _nama,
            _email,
            _telepon,
            _hari,
            _sesi,
            _pendidikan,
            _str,
            _wallet,
            _status
        );
    }

    function updateDoctor(
        string memory _nama,
        string memory _email,
        string memory _telepon,
        string memory _hari,
        string memory _sesi,
        string memory _pendidikan,
        string memory _str,
        address _wallet,
        bool _status
    ) public onlyAdmin {
        bool doctorExists = false;
        for (uint256 i = 0; i < doctors.length; i++) {
            if (doctors[i].wallet == _wallet) {
                doctorExists = true;
                doctors[i].nama = _nama;
                doctors[i].email = _email;
                doctors[i].telepon = _telepon;
                doctors[i].hari = _hari;
                doctors[i].sesi = _sesi;
                doctors[i].pendidikan = _pendidikan;
                doctors[i].str = _str;
                doctors[i].status = _status;
                break;
            }
        }
        require(doctorExists, "Dokter tidak ditemukan.");
    }

    function getDoctors() public view onlyUser returns (Doctor[] memory) {
        return doctors;
    }

    // update user for admin
    function updateUserAdmin(
        address _wallet,
        string memory _nama,
        string memory _email,
        string memory _telepon,
        string memory _gender,
        string memory _tanggalLahir,
        bool _status
    ) public onlyAdmin {
        bool userExists = false;
        for (uint256 i = 0; i < users.length; i++) {
            if (users[i].wallet == _wallet) {
                userExists = true;
                users[i].nama = _nama;
                users[i].email = _email;
                users[i].telepon = _telepon;
                users[i].gender = _gender;
                users[i].tanggalLahir = _tanggalLahir;
                users[i].status = _status;
                break;
            }
        }
        require(userExists, "User tidak ditemukan.");
    }

    // get user for admin
    function getUserAdmin() public view onlyAdmin returns (User[] memory) {
        return users;
    }
}
