// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

import "./roles.sol";

contract UserData {
    UserRoles public roles;
    User[] public users;

    struct User {
        string nama;
        string email;
        string telepon;
        string gender;
        string tanggalLahir;
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

    constructor(address _rolesContractAddress) {
        roles = UserRoles(_rolesContractAddress);
    }

    modifier onlyAdmin() {
        require(
            msg.sender == roles.admin(),
            "Only the admin can perform this action."
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
    ) public {
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
    function getUser(address _wallet)
        public
        view
        returns (
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
                    users[i].nama,
                    users[i].email,
                    users[i].telepon,
                    users[i].gender,
                    users[i].tanggalLahir,
                    users[i].status
                );
            }
        }
        return ("", "", "", "", "", true);
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
        for (uint256 i = 0; i < users.length; i++) {
            if (users[i].wallet == _wallet) {
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

    // get user for admin
    function getUserAdmin() public view onlyAdmin returns (User[] memory) {
        return users;
    }
}
