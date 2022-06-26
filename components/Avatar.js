const Avatar = ({ url }) => {
  return <img 
            loading='lazy'
            className='h-10 rounded-full cursor-pointer transition duration-150 transform hover:scale-110'
            src={url} 
            alt='profile-pic' 

        />     //lazy loading: rest of page can load even if img has not yet loaded.
}

export default Avatar