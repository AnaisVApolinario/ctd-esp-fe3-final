import Form from '../Components/Form'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Contact = () => {
  return (
    <div>
      <h2 className='page__title'>Want to know more?</h2>
      <p className='contact__text'>Send us your questions and we will contact you</p>
      <Form/>
    </div>
  )
}

export default Contact