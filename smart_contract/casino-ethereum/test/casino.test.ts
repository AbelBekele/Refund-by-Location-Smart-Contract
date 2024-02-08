import { ethers } from "truffle";
import { expect } from "chai";

describe("Casino Contract", function () {
  let casino: ethers.Contract;
  let owner: string;

  beforeEach(async function () {
    const Casino = await ethers.getContractFactory("Casino");
    casino = await Casino.deploy(10);

    [owner] = await ethers.getSigners();
  });

  it("Should allow players to place bets", async function () {

    const playerAddress = "0x8b1e474EF654BA19Aa6Da4D3F62dfDc8ddC6D738";

    const casinoWithOwner = casino.connect(owner);

    await casinoWithOwner.bet(5, { value: ethers.utils.parseEther("10") });

    const playerInfo = await casino.playerInfo(playerAddress);
    expect(playerInfo.amountBet).to.equal(ethers.utils.parseEther("10"));
    expect(playerInfo.numberSelected).to.equal(5);
  });

});
