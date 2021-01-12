import React, {useState}from "react";
import { v4 as uuid } from "uuid";

function ItemForm({ onItemFormSubmit }) {
  const [itemName, setName] = useState("")
  const [itemCategory, setCategory] = useState("Produce")

  const handleSubmit = (event) => {
    event.preventDefault()

    onItemFormSubmit({
      id: uuid(),
      name: itemName,
      category: itemCategory
    })
  }

  return (
    <form className="NewItem" onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" onChange={(e) => setName(e.target.value)}/>
      </label>

      <label>
        Category:
        <select name="category" onChange={(e) => setCategory(e.target.value)}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
