import './index.css'

const HistoryItems = props => {
  const {eachHistory, onDeleteHistory} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = eachHistory
  const onDeleteHistoryItem = () => {
    onDeleteHistory(id)
  }

  return (
    <li className="each-item">
      <p className="history-time">{timeAccessed}</p>
      <div className="each-website">
        <div className="logo-and-title">
          <img src={logoUrl} alt={title} className="website-logo" />
          <div className="title-and-url">
            <p className="title">{title}</p>
            <p className="domain-url">{domainUrl}</p>
          </div>
        </div>
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            alt="delete"
            className="delete-icon"
            onClick={onDeleteHistoryItem}
          />
        </div>
      </div>
    </li>
  )
}

export default HistoryItems
