import React, { useState } from "react";

function RecipeCreate({ addNewRecipe }) {
  const [name, setName] = useState("");
  const [cuisine, setCuisine] = useState("");
  const [photo, setPhoto] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [preparation, setPreparation] = useState("");

 //This is where we clear the form fields after entering 
  const handleSubmit = (event) => {
    event.preventDefault();
    addNewRecipe({ name, cuisine, photo, ingredients, preparation });
    setName("");
    setCuisine("");
    setPhoto("");
    setIngredients("");
    setPreparation("");
  };

   const handleChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case "name":
        setName(value);
        break;
      case "cuisine":
        setCuisine(value);
        break;
      case "photo":
        setPhoto(value);
        break;
      case "ingredients":
        setIngredients(value);
        break;
      case "preparation":
        setPreparation(value);
        break;
      default:
        break;
    }
  };

  
//Creating the form and   
  return (
    <form name="create" onSubmit={handleSubmit} onChange={handleChange}>
      <table>
        <tbody>
          <tr>
            <td>
              <label htmlFor="name">Name: </label>
              <input
                type="text"
                name="name"
                id="name"
                value={name}
                required
              />
            </td>
            <td>
              <label htmlFor="cuisine">Cuisine: </label>
              <input
                type="text"
                name="cuisine"
                id="cuisine"
                value={cuisine}
                required
              />
            </td>
            <td>
              <label htmlFor="photo">Photo: </label>
              <input
                type="url"
                name="photo"
                id="photo"
                value={photo}
                required
              />
            </td>
            <td>
              <label htmlFor="ingredients">Ingredients: </label>
              <textarea
                name="ingredients"
                id="ingredients"
                value={ingredients}
                required
              />
            </td>
            <td>
              <label htmlFor="preparation">Preparation: </label>
              <textarea
                name="preparation"
                id="preparation"
                value={preparation}
                required
              />
            </td>
            <td>
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
