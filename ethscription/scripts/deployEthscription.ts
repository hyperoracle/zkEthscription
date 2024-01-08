import { ethers } from "hardhat";

async function main() {

  const creator = await ethers.deployContract(
    "EthscriptionCreator"
  );

  await creator.waitForDeployment();

  const testImageDataUrl =
    "data:image/jpeg;base64,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"
  await creator.createEthscription(testImageDataUrl);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});