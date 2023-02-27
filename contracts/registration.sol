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
        string memory _gender
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
                _wallet
            )
        );
        if (registrations[_wallet].length == 1) {
            accountsWithRegistrations.push(_wallet);
        }
        registrationCount++;
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
}
