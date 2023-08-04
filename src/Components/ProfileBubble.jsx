import avatar from '/images/default-profile-pic.jpg'


export const ProfileBubble = (props) => {
  const {
    firstName,
    lastName
  } = props

  return (
    <>
    
    <div className='avatar-bubble'>
      <img className="avatar-for-home" src={avatar}  />
      <p className='avatar-names'> {firstName} {lastName}</p>
    </div>
     
    </>
  )
}
