import React from "react";

const TokenDetails = ({ title, value }) => {
  if (title === "Token Address") {
    return (
      <div>
        <div className="flex justify-center items-center flex-col card">
          <div className="text-center" title={value}>
            {title} : {value.substring(0, 8)}......{value.substring(34, 42)}
          </div>
          <div className="m-2">
            <a
              className="btn text-sm mt-2 "
              href="https://sepolia.etherscan.io/token/0x5FbDB2315678afecb367f032d93F642f64180aa3"
              target="_blank"
              rel="noreferrer noopener"
            >
              View on explorer
            </a>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div>
      <div className="card">
        {title} : {value}
      </div>
    </div>
  );
};

export default TokenDetails;
