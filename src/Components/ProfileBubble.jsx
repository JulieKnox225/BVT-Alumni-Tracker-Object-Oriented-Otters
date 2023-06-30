import avatar from '/images/default-profile-pic.jpg'


export const ProfileBubble = (props) => {
  const {
    firstName,
    lastName
  } = props

  return (
    <>
    <div className='avatar-bubble'>
     <img className="avatar-for-search" src={avatar}  />
     <p> {firstName} {lastName}</p>
     </div>
    </>
  )
}
