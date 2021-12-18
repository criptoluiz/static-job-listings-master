import './Jobcard.css'


function Jobcard(props) {
    return (
        <div className='job-card'>
            <div className="job-info">
                <img src={props.logo} alt="" className="c-avatar" />
                <div className="job-text">
                    <p className="job-author">
                        {props.company}
                        {props.new}
                        {props.featured}
                    </p>
                    <p className="job-title">
                        {props.position}
                    </p>
                    <div className="job-details">
                        <p className="date">{props.postedAt}</p>
                        <p className="time">{props.contract}</p>
                        <p className="region">{props.location}</p>
                    </div>
                </div>
            </div>
            <div className="job-tags">
                <p className="tag">Frontend</p>
                <p className="tag">Senior</p>
                <p className="tag">HTML</p>
                <p className="tag">CSS</p>
                <p className="tag">JavaScript</p>
            </div>
        </div>
    )
}

export default Jobcard;