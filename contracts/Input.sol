// pragma solidity ^0.4.17;

// contract Enigma{
//     string public contentIdentifier;
//     address public master;

//     function Generate(string cid) public {
//         contentIdentifier = cid;
//     }

//     function viewCID() public view returns (string){
//         return contentIdentifier;
//     }

// }


pragma solidity ^0.4.17;

contract Enigma{
    //address public manager;
    //address[] public players;
    //string private addr;
    string private contentIdentifier;
    // string public nameMedia;

    string private nameMedia;

    //string public searchName;

    // struct details{
    //     string public contentIdentifier;
    //     string public typeOfContent;
    // }

    //string value;

    mapping (string => string) UserMap;

    function giveNameAndCid(string name, string cid) public{
        nameMedia = name;
        contentIdentifier = cid;
        appendData();
    }

    // function giveCID(string cid) public {
        
    //     appendData();
    // }

    function appendData() private {
        UserMap[nameMedia]=contentIdentifier;
    }



    function searchCID(string searchingName) public view returns (string){
        return UserMap[searchingName];
    }

}


// // pragma solidity ^0.4.17;
// contract Inbox{
//     string public message;

//     function Inbox(string iniMsg) public {
//         message = iniMsg;
//     }
//     function setMsg(string newMsg) public {
//         message = newMsg;
//     }

//     // function getMsg() public view returns (string){
//     //     return message;
//     // }
// }

