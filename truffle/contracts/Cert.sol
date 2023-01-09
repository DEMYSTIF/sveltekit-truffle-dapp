// SPDX-License-Identifier: MIT
pragma solidity 0.8.17;

contract Cert {
    address admin;

    constructor() {
        admin = msg.sender;
    }

    modifier onlyAdmin() {
        require(msg.sender == admin, "Insufficient privilege");
        _;
    }

    struct certificate {
        string courseName;
        string candidateName;
        string grade;
        string date;
        bytes document;
    }

    mapping(uint => certificate) public certificateDetails;

    function newCertificate(
        uint _certificateID,
        string memory _courseName,
        string memory _candidateName,
        string memory _grade,
        string memory _date,
        bytes memory _document
    ) public onlyAdmin {
        certificateDetails[_certificateID] = certificate(
            _courseName,
            _candidateName,
            _grade,
            _date,
            _document
        );
    }
}
