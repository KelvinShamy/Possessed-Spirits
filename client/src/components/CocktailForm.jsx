import { useState } from 'react';

function CocktailForm({ selected, select }) {

    const [newName, setNewName] = useState('');
    const [newLiquor, setNewLiquor] = useState([]); 
    const [newIngredients, setNewIngredients] = useState([]); 
    const [newGarnish, setNewGarnish] = useState(''); 
    const [newDirections, setNewDirections] = useState([]); 
    const [submitCocktail, setSubmitCocktail] = useState(false);
  
    const handleSelectChange = (e) => {
      select(e.target.value);
    };
  
    return (
      <div className="select-container hide-desktop mobile-sticky">
        <label htmlFor="mobile-filters">
          {/* <span>Pick Your Poison:</span>
          <select
            id="filter-select"
            value={selected}
            onChange={handleSelectChange}
          >
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat.toLocaleUpperCase()}
              </option>
            ))}
          </select> */}
          <span>Add a new Cocktail:</span>
          {/* <div>

            <div>
                <input placeholder="Enter the name of the drink">
                </input>
            </div>

            <div>
                <input 
                    placeholder="Enter the liquor name">
                </input>
            </div>
            
            <div>
                <input placeholder="Enter the ingredients">
                </input>
            </div>

            <div>
                <input placeholder="Enter the garnish">
                </input>
            </div>

            <div>
                <input placeholder="Enter the directions">
                </input>
            </div>

            <div>
                <button> 
                    Create Drink! 
                </button>
            </div>

          </div> */}
            <form>
                <label>Enter your name:
                <div>
                <input placeholder="Enter the name of the drink">
                </input>
            </div>

            <div>
                <input 
                    placeholder="Enter the liquor name">
                </input>
            </div>
            
            <div>
                <input placeholder="Enter the ingredients">
                </input>
            </div>

            <div>
                <input placeholder="Enter the garnish">
                </input>
            </div>

            <div>
                <input 
                placeholder="Enter the directions"
                // value={name}
                // onChange={(e) => setName(e.target.value)}
          >
                </input>
            </div>

            <div>
                <button onChange={(e) => setName(e.target.value)}> 
                    Create Drink! 
                </button>
            </div>
                </label>
            </form>
          
        </label>
      </div>
    );
  }
  
  export default CocktailForm;