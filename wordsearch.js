// Function from the previous pair programming exercise.
// It swaps the matrix's columns for its rows.
const transpose = (matrix) => {
    const result = [];
  
    for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < matrix[i].length; j++) {
        //make sure there is an array in place. If not, create one
        if (!Array.isArray(result[j])) {
          result[j] = [];
        }
    
        //add the element switching i and j (row for column)
        //put matrix[i][j] element in result[j][i]
        result[j][i] = matrix[i][j];
      }
    }
  
    return result;
  };
  
const wordSearch = (letters, word) => { 
    //letters should be an Array
    if (!Array.isArray(letters)) {
        return (false);
    }

    const horizontalJoin = letters.map(ls => ls.join(''));

    //Horizontal search
    if(horizontalSearch(horizontalJoin, word)) {
        return (true);
    }
    
    //Vertical search
    const verticalJoin = transpose(horizontalJoin).map(ls => ls.join(''));

    return (horizontalSearch(verticalJoin, word));    
};

const horizontalSearch = (matrix, value) => {
    for (const item of matrix) {
        if (item.includes(value)) {
            return (true);
        } 
    }

    return (false);
};

module.exports = wordSearch