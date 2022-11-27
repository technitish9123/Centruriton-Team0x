// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

import "./DigiSignIdentity.sol";

contract DigiSignENotary {

     using Counters for Counters.Counter;
    Counters.Counter private _notaryIds;

    address public owner;

    DigiSignIdentity digiSignIdentity;


    struct Notary {
        string uri;
        address arbitraror;
        address first_party;
        address second_party;
        bool isSigned_by_first_party;
        bool isSigned_by_second_party;
        bytes first_party_signature;
        bytes second_party_signature;
        uint256 createdAt;
        uint256 first_party_sign_timestamp;
        uint256 second_party_sign_timestamp;
        bool isExpired;
    }

    mapping(uint256 => Notary) public notaries;
    mapping(address => bool) public arbitrarors;
    mapping(address => uint256[]) public userToNotaryIds;


    event NotrayStored(string uri, address arbitraror, address first_party, address second_party);

    constructor(address _digiSignIdentity) {
        arbitrarors[msg.sender]=true;
        owner = msg.sender;
        digiSignIdentity = DigiSignIdentity(_digiSignIdentity);
    }

    function putNotaryOnChain(string memory _uri,address _first_part,address _second_party) external{
           require(_first_part!=address(0) && _second_party!=address(0),"Address cannot be zero");
           require(arbitrarors[msg.sender],"Caller is not certified arbitraror");
           require(digiSignIdentity. issuedIdentity(_first_part) && digiSignIdentity. issuedIdentity(_second_party),"Soul Bound Tokens has been issues to one of the party");
            _notaryIds.increment();
            uint256 newNotaryID = _notaryIds.current();
            notaries[newNotaryID] = Notary(_uri , msg.sender,_first_part,_second_party,false,false,"","",block.timestamp,0,0,false);
            userToNotaryIds[_first_part].push(newNotaryID);
            userToNotaryIds[_second_party].push(newNotaryID);
            userToNotaryIds[msg.sender].push(newNotaryID);
            emit NotrayStored(_uri,msg.sender,_first_part,_second_party);
    }

    function signAndUpdateNotary(uint256 _notaryId,bytes memory signature) external {
        Notary storage notary = notaries[_notaryId];
        require(msg.sender==notary.first_party || msg.sender==notary.second_party,"You are not authorized to sign this Notary");
        address firstSigner = address(0);
        address secondSigner = address(0);
        msg.sender == notary.first_party?firstSigner = notary.first_party:secondSigner = notary.second_party;
        if(firstSigner!=address(0)){
        notary.first_party_signature =signature;
        notary.isSigned_by_first_party=true;
        notary.first_party_sign_timestamp=block.timestamp;
        } else {
        notary.second_party_signature =signature;
        notary.isSigned_by_second_party=true;
        notary.second_party_sign_timestamp=block.timestamp;
    }
}

function addArbitrator(address _arbitrator) external onlyOwner {
     arbitrarors[_arbitrator] = true;
}

modifier onlyOwner() {
        require(msg.sender == owner);
        _;
    }

    function getUserIds(address _userAddress) external view returns (uint[] memory){
        return userToNotaryIds[_userAddress];
    }
}

