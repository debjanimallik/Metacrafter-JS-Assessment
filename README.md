# Create an NFT Collection

## Simple Overview of Use/Purpose

This project involves creating a simple NFT (Non-Fungible Token) collection using JavaScript. The program will include functions to mint new NFTs, list all created NFTs, and get the total supply of NFTs. This exercise helps in understanding how NFTs can be created and managed programmatically.

## Description

In this project, you will develop a set of JavaScript functions to create and manage an NFT collection. You will create a variable to store the NFTs, a function to mint new NFTs with specified metadata, a function to list all NFTs, and a function to get the total number of minted NFTs. This project provides a fundamental understanding of managing NFT collections and metadata.

## Getting Started

### Installing

No installation is required for this project as it is a JavaScript-based project. You can use any JavaScript runtime environment like Node.js or a web browser console to run the code.

### Executing Program

1. Create a new JavaScript file and name it `nftCollection.js`.
2. Copy and paste the following code into the file:

    ```javascript
    // Create a variable to hold your NFTs
    let nftCollection = [];

    // This function will take in some values as parameters, create an NFT object using the parameters passed to it for its metadata, and store it in the variable above.
    function mintNFT(name, description, creator) {
        const nft = {
            name: name,
            description: description,
            creator: creator
        };
        nftCollection.push(nft);
        console.log(`NFT ${name} has been minted.`);
    }

    // Create a 'loop' that will go through an 'array' of NFTs and print their metadata with console.log()
    function listNFTs() {
        nftCollection.forEach((nft, index) => {
            console.log(`NFT ${index + 1}:`);
            console.log(`  Name: ${nft.name}`);
            console.log(`  Description: ${nft.description}`);
            console.log(`  Creator: ${nft.creator}`);
        });
    }

    // Print the total number of NFTs we have minted to the console
    function getTotalSupply() {
        console.log(`Total number of NFTs: ${nftCollection.length}`);
    }

    // Call your functions below
    mintNFT("First NFT", "This is the first NFT", "Debjani");
    mintNFT("Second NFT", "This is the second NFT", "Debjani");
    listNFTs();
    getTotalSupply();
    ```

3. Run the program using a JavaScript runtime environment, such as Node.js, or by copying the code into a web browser console.

    ```bash
    node nftCollection.js
    ```

## Help

For common problems or issues:

1. Ensure your JavaScript runtime environment is properly set up.
2. Double-check the syntax for any typos or errors.
3. Make sure the functions are called correctly with the appropriate parameters.

For further assistance, you can refer to JavaScript documentation or seek help from online programming communities.

## Authors

Contributors:

Debjani Mallik

## License

This project is licensed under the MIT License - see the LICENSE.md file for details.
