import './user-template.styles.css'

function UserCard(props) {
    return (

        <div className="col-4">
            <div>
                <img className={props.gender === 'male' ? 'photo-m' : 'photo-w'} src={props.picture} alt={props.name} />
            </div>
            <div className='fullName'>{props.name}</div>
            <div className='gender'>Gender: {props.gender}</div>
            <div className='city'>City: {props.location}</div>
            <a href='#' className='link-primary'>Call to Action</a>
        </div>

    );

}

export default UserCard;