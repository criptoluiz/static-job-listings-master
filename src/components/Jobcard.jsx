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
          <p onClick={filter} className={l}>
            {l}
          </p>
        ))}
        {props.tools.map((t) => (
          <p onClick={filter} className={t}>
            {t}
          </p>
        ))}
      </div>
    </div>
  );
}

const filter = (p) => {
  let selected = document.querySelectorAll("." + p.target.className);
  let jobs = document.querySelectorAll(".job-card");
  for (let i = 0; i < jobs.length; i++) {
    jobs[i].classList.add("hidden");
  }
  selected.forEach(function (item) {
    item.parentElement.parentElement.classList.add("active");
    item.parentElement.parentElement.classList.remove("hidden");
  });
};

export default Jobcard;
