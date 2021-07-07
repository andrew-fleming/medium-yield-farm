import { ethers } from "hardhat";


const kDAI = "0x4F96Fe3b7A6Cf9725f59d353F723c1bDb64CA6Aa";

const main = async() => {
    const [deployer] = await ethers.getSigners()
    console.log(`Deploying contracts with ${deployer.address}`);

    const MockERC20 = await ethers.getContractFactory("MockERC20")
    const mockDai = await MockERC20.deploy("MockDai", "mDAI")
    console.log(`MockDai address: ${mockDai.address}`)

    const PmknToken = await ethers.getContractFactory("PmknToken")
    const pmknToken = await PmknToken.deploy()
    console.log(`PmknToken address: ${pmknToken.address}`)

    const PmknFarm = await ethers.getContractFactory("PmknFarm")
    const pmknFarm = await PmknFarm.deploy(mockDai.address, pmknToken.address)
    //const pmknFarm = await PmknFarm.deploy(kDAI, pmknToken.address)  **For Kovan
    console.log(`PmknFarm address: ${pmknFarm.address}`)

    await pmknToken._transferOwnership(pmknFarm.address)
    console.log(`PmknToken ownership transferred to ${pmknFarm.address}`)
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.log(error)
        process.exit(1)
    })