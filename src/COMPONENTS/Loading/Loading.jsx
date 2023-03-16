
import Spinner from 'react-bootstrap/Spinner';
export const Loading = () => {

  return (
    <>
      <div 
      style={{textAlign:'center'}} 
      >
      <Spinner  className=' w-40 mt-5 shadow' animation="border" role="status">
        <span  className='visually-hidden'>Loading...</span>
      </Spinner>
      </div>
    </>
  )
}

export default Loading