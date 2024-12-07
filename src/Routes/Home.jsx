import  {useContext } from 'react'
import Card from '../Components/Card'
import { ContextGlobal } from '../Context/global.context'

const Home = () => {
  const { state } = useContext(ContextGlobal);

  
  return (
    <>
      <h1 className="page__title">Home</h1>
      <div className='card__container'>
        {state.users.map((user) => (
          <Card 
          key={user.id} 
          name={user.name}
          username={user.username}
          id={user.id}
          />))
        }
      </div>
    </>
  )
}

export default Home