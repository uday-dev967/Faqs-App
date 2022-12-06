import './index.css'

const FaqItem = props => {
  const {faqDetails, onClickPlus, onClickMinus, isClicked} = props
  const {questionText, id, answerText} = faqDetails
  const onHide = () => {
    onClickMinus(id)
  }
  const onShow = () => {
    onClickPlus(id)
  }
  const buttonImageUrl = isClicked
    ? 'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'
  const buttonAltText = isClicked ? 'minus' : 'plus'
  const y = (
    <>
      <div className="question-container">
        <h1 className="question">{questionText}</h1>
        <button className="button" type="button" onClick={onHide}>
          <img src={buttonImageUrl} alt={buttonAltText} />
        </button>
      </div>
      <hr className="hr" />
      <div>
        <p className="answer">{answerText}</p>
      </div>
    </>
  )
  const x = (
    <div className="question-container">
      <h1 className="question">{questionText}</h1>
      <button className="button" type="button" onClick={onShow}>
        <img src={buttonImageUrl} alt={buttonAltText} />
      </button>
    </div>
  )
  const display = isClicked ? y : x
  return <li className="list-item">{display}</li>
}

export default FaqItem
