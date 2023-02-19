//SPDX-License-Identifier: MIT

pragma solidity ^0.8.9;

interface Inft {

    function safeMint( string memory uri) external;


    function tokenURI(uint256 tokenId)
        external
        view
        returns (string memory);

    function supportsInterface(bytes4 interfaceId)
        external
        view
        returns (bool);
}