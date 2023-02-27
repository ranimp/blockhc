// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

import "./roles.sol";

contract ConsultationResult {
    UserRoles public roles;

    struct Data {
        string nama;
        string namaDokter;
        string tanggal;
        string keluhan;
        string diagnosa;
        string tensi;
        string gula;
        address wallet;
    }

    mapping(address => Data[]) public consultations;
    address[] public accountsWithConsultations;
    uint256 public consultationCount;

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

    // tambah konsultasi untuk admin & dokter
    function addConsultation(
        address _wallet,
        string memory _nama,
        string memory _namaDokter,
        string memory _tanggal,
        string memory _keluhan,
        string memory _diagnosa,
        string memory _tensi,
        string memory _gula
    ) public onlyAdminOrDokter {
        consultations[_wallet].push(
            Data(
                _nama,
                _namaDokter,
                _tanggal,
                _keluhan,
                _diagnosa,
                _tensi,
                _gula,
                _wallet
            )
        );
        if (consultations[_wallet].length == 1) {
            accountsWithConsultations.push(_wallet);
        }
        consultationCount++;
    }

    // update konsultasi untuk admin & dokter
    function updateConsultation(
        address _wallet,
        uint256 _index,
        string memory _nama,
        string memory _namaDokter,
        string memory _tanggal,
        string memory _keluhan,
        string memory _diagnosa,
        string memory _tensi,
        string memory _gula
    ) public onlyAdminOrDokter {
        require(_index < consultationCount, "Consultation data not found");
        consultations[_wallet][_index] = Data(
            _nama,
            _namaDokter,
            _tanggal,
            _keluhan,
            _diagnosa,
            _tensi,
            _gula,
            _wallet
        );
    }

    // get konsultasi untuk pasien
    function getConsultationsPasien()
        public
        view
        onlyPasien
        returns (Data[] memory)
    {
        return consultations[msg.sender];
    }

    // get semua data konsultasi untuk admin & dokter
    function getAllConsultations()
        public
        view
        onlyAdminOrDokter
        returns (Data[][] memory)
    {
        uint256 length = accountsWithConsultations.length;
        Data[][] memory result = new Data[][](length);

        for (uint256 i = 0; i < length; i++) {
            result[i] = consultations[accountsWithConsultations[i]];
        }

        return result;
    }
}
