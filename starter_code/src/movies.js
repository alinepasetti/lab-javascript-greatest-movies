// Iteration 1: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(arr) {
  const newSorted = arr.sort(function(a, b) {
    if (a.year > b.year) {
      return 1;
    } else if (a.year < b.year) {
      return -1;
    } else if (a.year == b.year && a.title > b.title) {
      return 1;
    } else if (a.year == b.year && a.title < b.title) {
      return -1;
    }
  });
  return [...newSorted];
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct

function howManyMovies(arr) {
  let onlyStevie = arr.filter(movie => movie.director === 'Steven Spielberg');
  let onlyStevieDrama = onlyStevie.filter(movie => movie.genre.includes('Drama'));
  return onlyStevieDrama.length;
}

// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(arr) {
  console.log(arr);

  let alphaOrder = arr;
  alphaOrder = alphaOrder
    .map(function(movie) {
      return movie.title;
    })
    .sort(function(a, b) {
      if (a > b) {
        return 1;
      } else if (a < b) {
        return -1;
      } else {
        return 0;
      }
    })
    .slice(0, 20);
  console.log(alphaOrder.length);
  return alphaOrder;
}

// Iteration 4: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(arr) {
  if (arr.length > 0) {
    let average = arr.reduce(function(total, movie) {
      if (!movie.rate) {
        return total + 0;
      } else {
        return total + movie.rate;
      }
    }, 0);
    return Number((average / arr.length).toFixed(2));
  } else {
    return 0;
  }
}

// Iteration 5: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(arr) {
  let averageOfDrama = [...arr].filter(movie => movie.genre.includes('Drama'));
  return ratesAverage(averageOfDrama);
}

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

function turnHoursToMinutes(arr) {
  return arr.map(function(movie) {
    if (movie.duration.length === 8) {
      let hour = Number(movie.duration[0]);
      let min1 = Number(movie.duration[3]);
      let min2 = Number(movie.duration[4]);
      let total = hour * 60 + min1 * 10 + min2;
      const finalDur = { ...movie, duration: total };
      return finalDur;
    } else if (movie.duration.length === 2) {
      let hour = Number(movie.duration[0]);
      let total = hour * 60;
      return (finalDur = { ...movie, duration: total });
      return finalDur;
    }
  });
  finalDur.sort(function(a, b) {
    if (a.duration > b.duration) {
      return 1;
    } else if (a.duration < b.duration) {
      return -1;
    } else if (a.duration == b.duration && a.title > b.title) {
      return 1;
    } else if (a.duration == b.duration && a.title < b.title) {
      return -1;
    }
  });
  return [...newSorted];
}

// BONUS Iteration: Best yearly rate average - Best yearly rate average
