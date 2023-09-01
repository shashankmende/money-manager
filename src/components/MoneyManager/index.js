import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import MoneyDetails from '../MoneyDetails'
import TransactionItem from '../TransactionItem'
import './index.css'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

// Write your code here
const incomeValue = transactionTypeOptions[0].optionId
const expenseValue = transactionTypeOptions[1].optionId
const incomeDisplayText = transactionTypeOptions[0].displayText
const expenseDisplayText = transactionTypeOptions[1].displayText
class MoneyManager extends Component {
  state = {
    transactionsList: [],
    title: '',
    amount: '',
    type: '',
    income: 0,
    expense: 0,
  }

  onClickDelete = id => {
    const {transactionsList} = this.state
    const filteredList = transactionsList.filter(each => each.id === id)
    const {income, expense} = filteredList[0]
    console.log('Filterd list', filteredList)
    console.log('income=', income)
    console.log('expense', expense)
    if (income === '') {
      this.setState(prevState => ({
        transactionsList: prevState.transactionsList.filter(
          eachTrans => eachTrans.id !== id,
        ),
        title: '',
        amount: '',
        income: parseInt(prevState.income),
        expense: parseInt(prevState.expense) - parseInt(expense),
      }))
    } else {
      this.setState(prevState => ({
        transactionsList: prevState.transactionsList.filter(
          eachTrans => eachTrans.id !== id,
        ),
        title: '',
        amount: '',
        income: parseInt(prevState.income) - parseInt(income),
        expense: prevState.expense,
      }))
    }
  }

  onChangeTitleInput = event => {
    this.setState({
      title: event.target.value,
    })
  }

  onChangeAmount = event => {
    this.setState({
      amount: event.target.value,
    })
  }

  onChangeType = event => {
    this.setState({
      type: event.target.value,
    })
  }

  onClickAddBtn = () => {
    const {amount, title, type} = this.state

    if (type === 'INCOME') {
      const newTransatn = {
        id: uuidv4(),
        title,
        income: amount,
        expense: '',
        type,
      }
      this.setState(prevState => ({
        transactionsList: [...prevState.transactionsList, newTransatn],
        title: '',
        amount: '',
        type: '',
        income: prevState.income + parseInt(amount),
        expense: prevState.expense,
      }))
    } else {
      const newTransatn = {
        id: uuidv4(),
        title,
        income: '',
        expense: amount,
        type,
      }
      this.setState(prevState => ({
        transactionsList: [...prevState.transactionsList, newTransatn],
        title: '',
        amount: '',
        type: '',
        expense: prevState.expense + parseInt(amount),
        income: prevState.income,
      }))
    }
  }

  render() {
    const {income, expense, title, amount, transactionsList} = this.state

    return (
      <div className="bg_container">
        <div className="top-container">
          <h1>Hi, Richard</h1>
          <p>
            Welcome back to your
            <span className="span-element">Money Manager</span>
          </p>
        </div>
        <ul className="middle-container">
          <MoneyDetails income={income} expense={expense} />
        </ul>
        <div className="bottom-container">
          <form className="form-container">
            <h1>Add Transaction</h1>
            <label htmlFor="title">TITLE</label>
            <input
              id="title"
              type="text"
              className="inputelement"
              placeholder="TITLE"
              value={title}
              onChange={this.onChangeTitleInput}
            />
            <label htmlFor="amount">AMOUNT</label>
            <input
              id="amount"
              type="text"
              className="inputelement"
              placeholder="AMOUNT"
              value={amount}
              onChange={this.onChangeAmount}
            />
            <label htmlFor="typeOfAmount">TYPE</label>
            <select
              id="typeOfAmount"
              name="incomeTypes"
              onClick={this.onChangeType}
            >
              <option value={incomeValue}>{incomeDisplayText}</option>
              <option value={expenseValue}>{expenseDisplayText}</option>
            </select>
            <button
              type="button"
              className="addBtn"
              onClick={this.onClickAddBtn}
            >
              Add
            </button>
          </form>
          <div className="history-container">
            <h1>History</h1>
            <div className="header-container">
              <p>Title</p>
              <p>Amount</p>
              <p>Type</p>
            </div>
            <ul>
              {transactionsList.map(eachTrans => (
                <TransactionItem
                  trans={eachTrans}
                  key={eachTrans.id}
                  onClickDelete={this.onClickDelete}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyManager
