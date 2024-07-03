import './Index.css'

const EachAppHistory = props => {
  const {historyDetails, deleteHistory} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = historyDetails
  const onDelete = () => {
    deleteHistory(id)
  }
  return (
    <li className="history-container">
      <div className="time-logo-container">
        <h2 className="time-title">{timeAccessed}</h2>
        <div className="history-details-container">
          <img src={logoUrl} alt="" className="logo" />
          <h2 className="time-title title ti"> {title}</h2>
          <p className="domain-url do">{domainUrl}</p>
          <div className="title-domain-container">
            <h2 className="time-title title "> {title}</h2>
            <p className="domain-url ">{domainUrl}</p>
          </div>
        </div>
      </div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
        alt=""
        className="delete"
        onClick={onDelete}
      />
    </li>
  )
}

export default EachAppHistory
