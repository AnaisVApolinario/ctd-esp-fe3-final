import  {useContext } from 'react'
import Card from '../Components/Card'
import { ContextGlobal } from '../Context/global.context'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  const{users} = useContext(ContextGlobal)
  
  return (
    <>
      <h1 className='home__title'>Home</h1>
      <div className='card__container'>
        {users.map((user) => (
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