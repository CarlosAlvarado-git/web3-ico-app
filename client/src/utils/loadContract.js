import { ethers } from "ethers";
import { cmaICOAddress, cmaICOAbi } from "./constants";
import { toast } from "react-toastify";

async function loadContract(signer, chainId, setContract, address) {
  if (chainId !== 11155111) {
    toast.error(
      "Please Change your network to Sepolia Network for Buying Tokens"
    );
    return;
  }
  const _cmaICOContract = new ethers.Contract(
    cmaICOAddress,
    cmaICOAbi,
    signer
  );

  setContract({
    stknICO: _cmaICOContract,
  });

  //Read From Contract

  const tokensAvailable = ethers.utils.formatEther(
    await _cmaICOContract.getICOTokenBalance()
  );

  const investorBalance = ethers.utils.formatEther(
    await _cmaICOContract.investorBalanceOf(address)
  );

  return {
    tokensAvailable,
    investorBalance,
  };
}

export default loadContract;
