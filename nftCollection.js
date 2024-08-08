
const NFTS = []

function mintNFT( linkedinUsername, connections, articles, posts, endorsements , profileViews, searchAppearances ){
    const NFT = {
        linkedinUser: linkedinUsername,
        connections: connections,
        articles: articles,
        posts: posts,
        endorsements: endorsements,
        profileViews: profileViews,
        searchAppearances: searchAppearances,
       
        
    }
    console.log("Minted: " + linkedinUsername)
    NFTS.push(NFT);
}


function listNFTS(){
    for(let i = 0; i < NFTS.length; i++){
        console.table(NFTS[i])
    }
}

function getTotalSupply(){
    console.log("Total NFT's: " + NFTS.length)
}

mintNFT("Debjani Mallik", 936, 54, 26, 25,23 ,29);
mintNFT("Manishkumar", 625, 59, 33, 42, 56 ,58);
mintNFT("ravisahaaran", 923, 89, 66, 17, 56 ,89 );
mintNFT("neelanshikumari", 1936, 54, 56, 35 ,58 ,25);
mintNFT("deepikakaif", 895, 89, 63, 22, 56 ,14);
mintNFT("ranikumari", 2563, 79, 86, 47 ,89 ,56);

listNFTS();
getTotalSupply()
