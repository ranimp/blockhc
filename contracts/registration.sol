// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

import "./roles.sol";

contract ConsultationRegist {
    UserRoles public roles;

    struct Data {
        string nama;
        string telepon;
        string namaDokter;
        string sesi;
        string tanggal;
        string keluhan;
        string gender;
        address wallet;
        bool status;
    }

    mapping(address => Data[]) public registrations;
    address[] public accountsWithRegistrations;
    uint256 public registrationCount;

    constructor(address _rolesContractAddress) {
        roles = UserRoles(_rolesContractAddress);
    }

    modifier onlyPasien() {
        require(
            roles.isPasien(msg.sender),
            "Hanya pasien yang diizinkan untuk mengakses."
        );
        _;
    }

    modifier onlyAdminOrDokter() {
        require(
            roles.isAdmin(msg.sender) || roles.isDokter(msg.sender),
            "Hanya admin atau dokter yang diizinkan untuk mengakses."
        );
        _;
    }

    modifier onlyUser() {
        require(
            roles.isAdmin(msg.sender) ||
                roles.isDokter(msg.sender) ||
                roles.isPasien(msg.sender),
            "Hanya pengguna terdaftar yang diizinkan untuk mengakses."
        );
        _;
    }

    // tambah pendaftaran untuk pasien
    function addRegistration(
        address _wallet,
        string memory _nama,
        string memory _telepon,
        string memory _namaDokter,
        string memory _sesi,
        string memory _tanggal,
        string memory _keluhan,
        string memory _gender,
        bool _status
    ) public onlyUser {
        registrations[_wallet].push(
            Data(
                _nama,
                _telepon,
                _namaDokter,
                _sesi,
                _tanggal,
                _keluhan,
                _gender,
                _wallet,
                _status
            )
        );
        if (registrations[_wallet].length == 1) {
            accountsWithRegistrations.push(_wallet);
        }
        registrationCount++;
    }

    // update pendaftaran untuk pasien
    function updateRegistration(
        address _wallet,
        uint256 _index,
        string memory _nama,
        string memory _telepon,
        string memory _namaDokter,
        string memory _sesi,
        string memory _tanggal,
        string memory _keluhan,
        string memory _gender,
        bool _status
    ) public onlyAdminOrDokter {
        require(_index < registrationCount, "Registration data not found");
        registrations[_wallet][_index] = Data(
            _nama,
            _telepon,
            _namaDokter,
            _sesi,
            _tanggal,
            _keluhan,
            _gender,
            _wallet,
            _status
        );
    }

    // get bukti pendaftaran pasien
    function getRegistrationEvidence()
        public
        view
        onlyPasien
        returns (Data[] memory)
    {
        return registrations[msg.sender];
    }

    // get data pendaftaran untuk admin & dokter
    function getAllRegistrations()
        public
        view
        onlyAdminOrDokter
        returns (Data[][] memory)
    {
        uint256 length = accountsWithRegistrations.length;
        Data[][] memory result = new Data[][](length);

        for (uint256 i = 0; i < length; i++) {
            result[i] = registrations[accountsWithRegistrations[i]];
        }

        return result;
    }

    // get semua data sesi yang sudah tersimpan
    function getAllSesi() public view onlyUser returns (string[][][] memory) {
        uint256 length = accountsWithRegistrations.length;
        string[][][] memory result = new string[][][](length);

        for (uint256 i = 0; i < length; i++) {
            uint256 sesiLength = registrations[accountsWithRegistrations[i]]
                .length;
            result[i] = new string[][](sesiLength);

            for (uint256 j = 0; j < sesiLength; j++) {
                result[i][j] = new string[](2);
                result[i][j][0] = registrations[accountsWithRegistrations[i]][j]
                    .tanggal;
                result[i][j][1] = registrations[accountsWithRegistrations[i]][j]
                    .sesi;
            }
        }

        return result;
    }
}
