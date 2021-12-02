import React, {useState, useEffect} from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({ search }) {
  const [ items, setItems ] = useState([]);

  useEffect(() => {
    fetch('http://localhost:6001/listings')
    .then(r => r.json())
    .then(itemList => setItems(itemList))
  }, []);

    const searchList = () => {
      return items.filter(item => item.description.includes(search))
    }


  const handleDelete = (deletedItem) => {
    const newList = items.filter(item => item !== deletedItem);
    setItems(newList);

    fetch(`http://localhost:6001/listings/${deletedItem.id}`, {
      method: 'DELETE'
    })
    .then(r => r.json())
    .catch(error => alert(error))
  }

  return (
    <main>
      <ul className="cards">
        {searchList().map(item => {
          return (
            <ListingCard
              onDelete={handleDelete}
              key={item.id}
              item={item}
            />
          )
        })}
      </ul>
    </main>
  );
}

export default ListingsContainer;
