import avatar from '/images/default-profile-pic.jpg'


export const ProfileBubble = (props) => {
  const {
    firstName,
    lastName
  } = props

  return (
    <>
    
    <div className='avatar-bubble'>
      <a href= {
        `/profile/${firstName}`
        } >
      <img className="avatar-for-search" src={avatar}  />
      </a>
      <p> {firstName} {lastName}</p>
    </div>
     
    </>
  )
}
