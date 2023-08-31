import './index.css'

const MoneyDetails = props => {
  const {income, expense} = props
  const balance = income - expense
  return (
    <div className="moneydetails-items">
      <li className="list-item">
        <div className="mid1-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
            alt="balance"
            className="balance-img"
          />
          <div>
            <p>Your Balance</p>
            <h1>Rs {balance}</h1>
          </div>
        </div>
      </li>
      <li className="list-item">
        <div className="mid2-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
            alt="income"
            className="balance-img"
          />
          <div>
            <p>Your Income</p>
            <h1>Rs {income}</h1>
          </div>
        </div>
      </li>
      <li className="list-item">
        <div className="mid3-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
            alt="expenses"
            className="balance-img"
          />
          <div>
            <p>Your Expenses</p>
            <h1>Rs {expense}</h1>
          </div>
        </div>
      </li>
    </div>
  )
}
export default MoneyDetails
