import { formatNumber } from "../util/helperFunctions"

export default function Message({ bill, avgTip }) {
    const actualTip = avgTip * bill;
    const totalBill = formatNumber(bill + actualTip);
    return (
        <div>
            <p className="message">You pay ${totalBill} ( ${formatNumber(bill)} + <span className="tip">${actualTip} tip</span> )</p>
        </div>
    )
}