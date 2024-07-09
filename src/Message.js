export default function Message({ bill }) {
    return (
        <div>
            <p>You pay ${bill + bill*.15} (${bill} + ${bill*.15} tip)</p>
        </div>
    )
}