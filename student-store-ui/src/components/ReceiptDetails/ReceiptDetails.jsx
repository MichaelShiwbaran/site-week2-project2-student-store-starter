import React from "react";
import { useParams } from "react-router-dom";
import ReceiptCard from "../ReceiptCard/ReceiptCard";
import GetAllReceipts from "../Sidebar/GetAllReceipts";

const ReceiptDetails = () => {
  const { date, time } = useParams();
  const { AllReceipts } = GetAllReceipts();

  const receipt =
    AllReceipts &&
    AllReceipts.filter(
      (receipt, index) =>
        receipt.date.replace(/[^a-zA-Z0-9 ]/g, "") == date &&
        receipt.time.replace(/[^a-zA-Z0-9 ]/g, "") == time
    );
  const receiptObj = receipt[0];

  return (
    <div className="receipt-details">
      {receiptObj && <ReceiptCard receipt={receiptObj} />}
    </div>
  );
};

export default ReceiptDetails;
