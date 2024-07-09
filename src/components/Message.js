import { formatNumber } from "../util/helperFunctions"

export default function Message({ bill }) {
    return (
        <div>
            <p className="message">You pay ${formatNumber(bill + bill*.15)} ( ${formatNumber(bill)} + <span className="tip">${formatNumber(bill*.15)} tip</span> )</p>
        </div>
    )
}