// SPDX-License-Identifier: MIT
pragma solidity ^0.8.1;

//define the contract
contract ConsultationRegist {
    struct Input {
        string name;
        string phone;
        string doctorName;
        string session;
        string date;
        string symptom;
        address wallet;
        string gender;
    }
    Input[] public regists;

    function setRegist(
        string memory _name,
        string memory _phone,
        string memory _doctorName,
        string memory _session,
        string memory _date,
        string memory _gender,
        string memory _symptom,
        address _wallet
    ) public {
        regists.push(
            Input(
                _name,
                _phone,
                _doctorName,
                _session,
                _date,
                _symptom,
                _wallet,
                _gender
            )
        );
    }

    function getRegist(uint256 _index)
        public
        view
        returns (
            string memory _name,
            string memory _phone,
            string memory _doctorName,
            string memory _session,
            string memory _date,
            string memory _gender,
            string memory _symptom,
            address _wallet
        )
    {
        Input storage regist = regists[_index];
        return (
            regist.name,
            regist.phone,
            regist.doctorName,
            regist.session,
            regist.date,
            regist.gender,
            regist.symptom,
            regist.wallet
        );
    }
}
