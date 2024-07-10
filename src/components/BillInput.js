export function BillInput({ bill, setBill }) {
    return (
        <form className="form-group">
            <label>How much is the bill?</label>
            <input type="text" placeholder="enter total bill amount" value={bill} onChange={(e) => setBill(Number(e.target.value))}/>
        </form>
    )
}