import "./Jobcard.css";

function Jobcard(props) {
  return (
    <div className="job-card">
      <div className="job-info">
        <img src={props.logo} alt="" className="c-avatar" />
        <div className="job-text">
          <p className="job-author">
            {props.company}
            {props.new}
            {props.featured}
          </p>
          <p className="job-title">{props.position}</p>
          <div className="job-details">
            <p className="date">{props.postedAt}</p>
            <p className="time">{props.contract}</p>
            <p className="region">{props.location}</p>
          </div>
        </div>
      </div>
      <div className="job-tags">
        {props.languages.map((l) => (
          <p>{l}</p>
        ))}
        {props.tools.map((t) => (
          <p>{t}</p>
        ))}
      </div>
    </div>
  );
}

export default Jobcard;
