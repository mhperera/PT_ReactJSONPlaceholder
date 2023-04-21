import { useState, useEffect } from 'react';
import ButtonComponent from './ButtonComponent';
import { List } from './List';

function App() {

  const API_URL = 'https://jsonplaceholder.typicode.com/x';
  const requestTypeList = [
    {
      id: 1,
      type: 'users'
    },
    {
      id: 2,
      type: 'posts'
    },
    {
      id: 3,
      type: 'comments'
    },
  ]

  const [requestType, setRequestType] = useState('users');
  const [itemList, setItemList] = useState([]);
  const [fetchError, setFetchError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(()=>{

    const fetchItems = async() => {

      try {
        const response = await fetch(API_URL+requestType);
        if(!response.ok) throw Error('Did not get expected data');
        const data = await response.json();
        setItemList(data);
      } catch (error) {
        setFetchError(error.message);
      } finally {
        setIsLoading(false);
      }
    }

    setTimeout(()=>{
      fetchItems();
    },500);

  },[requestType]);

  const handleClick = (type) => {
    setIsLoading(true);
    setRequestType(type)
  }

  return (
    <div className="App">

        <header>

          { requestTypeList.map((item)=>(

              <ButtonComponent
                key = {item.id}
                item = {item}
                handleClick = {handleClick}
                requestType={requestType}
              />

          )) }

        </header>

        { isLoading && <p className='loading-text'> Loading... <br /><br /> <span> :D </span></p> }

        { fetchError && <p className='error-text'> { `Error : ${fetchError}` } <br /><br /> <span> :( </span> </p> }

        { !isLoading && !fetchError &&

          <List
            itemList={itemList}
          />

        }

    </div>
  );
}

export default App;
