import {Component} from 'react'
import FaqItem from '../FaqItem'
import './index.css'

class Faqs extends Component {
  state = {clickedList: []}

  onClickPlus = id => {
    this.setState(prevState => ({clickedList: [...prevState.clickedList, id]}))
  }

  onClickMinus = id => {
    const {clickedList} = this.state
    const newList = clickedList.filter(each => each !== id)
    this.setState({clickedList: newList})
  }

  render() {
    const {faqsList} = this.props
    const {clickedList} = this.state

    return (
      <div className="app-container">
        <div className="card-container">
          <h1 className="title">Faqs</h1>
          <ul className="faqs-list-container">
            {faqsList.map(each => (
              <FaqItem
                key={each.id}
                faqDetails={each}
                onClickPlus={this.onClickPlus}
                onClickMinus={this.onClickMinus}
                isClicked={clickedList.includes(each.id)}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Faqs
