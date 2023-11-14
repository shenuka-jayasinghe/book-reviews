const testData = require('../__tests__/testData')
exports.cleanGenres = (objArray) => {
    const books = objArray.map ( obj => {
      const objCopy = {...obj}
      return objCopy
    })

    books.forEach ( book => {
      const regex = /\(\d\,\w+.?\w+\)/g
      const matchedGenresArr = book.genres.match(regex)
      const genresWithDuplicates = matchedGenresArr.map( string =>{
        const slicedStr = string.slice(3, string.length)
        const trimmedStr = slicedStr.slice(0, slicedStr.length-1)
        return trimmedStr
      })
      const cleanedGenres = genresWithDuplicates.filter( (element, index) =>  genresWithDuplicates.indexOf(element) === index )
      book.genres = cleanedGenres
    })
    return books

}