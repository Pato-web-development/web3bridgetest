import { ethers } from "hardhat";

async function main() {
  const [owner , acct1, acct2, acct3] = await ethers.getSigners();

  const Excellence = await ethers.getContractFactory("Xcellence");
  const excellence = await Excellence.deploy();
  await excellence.deployed();

  console.log(excellence.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
