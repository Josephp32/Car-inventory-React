import Background from '../assets/images/car3.jpg'

function About() {
    return (
      <div 
      style={{ backgroundImage: `url(${ Background })`}} 
      className='flex flex-row justify-center mx-auto bg-cover bg-fixed'
      >
        <div className='flex place-items-center h-screen'>
          <h3 className='p-5 bg-black bg-opacity-75 text-white rounded'>The best cars in town! That's it!</h3>
        </div>
    </div>
    )
}
  
export default About

  