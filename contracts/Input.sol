pragma solidity ^0.4.17;

contract Enigma{
    string public contentIdentifier;
    address public master;

    function Generate(string cid) public {
        contentIdentifier = cid;
    }

    function viewCID() public view returns (string){
        return contentIdentifier;
    }

}
