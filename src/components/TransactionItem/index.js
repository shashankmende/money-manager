// Write your code here
import './index.css'

const TransactionItem = props => {
  const {trans, onClickDelete} = props
  const {id, title, income, expense, type} = trans

  const onClickDeleteIcon = () => {
    onClickDelete(id)
  }

  let answer
  if (income === '') {
    answer = (
      <li className="list-item">
        <p>{title}</p>
        <p>Rs {expense}</p>
        <p>{type}</p>
        <button
          data-testid="delete"
          type="button"
          className="button"
          onClick={onClickDeleteIcon}
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
            alt="delete"
          />
        </button>
      </li>
    )
  } else {
    answer = (
      <li className="list-item">
        <p>{title}</p>
        <p>Rs {income}</p>
        <p>{type}</p>
        <button
          data-testid="delete"
          type="button"
          className="button"
          onClick={onClickDeleteIcon}
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
            alt="delete"
          />
        </button>
      </li>
    )
  }

  return answer
}

export default TransactionItem
