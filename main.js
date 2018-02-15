/**
 * @function isPrime
 * @param { Number } n
 * @return { Boolean }
 * Returns true, if n is a prime number, false otherwise
 */
const isPrime = (n) => {
  for (let i = 2, flSqr = Math.floor(Math.sqrt(n) + 1); i < flSqr; i += 1) {
    if (n % i === 0) {
      return false;
    }
  }

  return true;
};


/**
 * @function getPrimes
 * @param {Number} n
 * @return {[Number]}
 * Returns a list of prime numbers starting from 0 to n
 */
const getPrimes = (n) => {
  const primes = [];
  if (n < 0 || typeof n === 'string' || n % 1 !== 0 || n === 1 || n === 0) {
    return 'undefined';
  }
  for (let i = 2; i < n; i += 1) {
    if (isPrime(i)) {
      primes.push(i);
    }
  }

  return primes;
};

/**
 * @function isComposite
 *
 * @param { Number } n
 * @return { Boolean }
 * Returns true or false, if the number is composite or not
 */
const isComposite = (n) => {
  // check for non-integer inputs
  if ((typeof n !== 'number') && (n % 1 !== 0)) {
    return 'only integer inputs are allowed';
  }

  // excluding 1, we start with 2
  const startValue = 2;
  let count = 0; // increment count each time we get a factor of n

  for (let i = startValue; i < n; i += 1) {
    if (n % i === 0) {
      count += 1;
    }

    if (count > 1) {
      return true;
    }
  }

  return false;
};

/**
 * @function parseCreditCard
 * @param { String } str
 * @return { String }
 * Parses the string input and outputs a well-formatted credit card number
 */
const parseCreditCard = (str) => {
  const newStr = String(str); // just in case, the user enters 'numbers' instead of a string
  if (newStr.length !== 16) {
    throw new Error('can only accept credit cards with 16 digits');
  }

  let creditCard = '';
  let count = 0;
  for (let i = 0, strLength = newStr.length; i < strLength; i += 1) {
    creditCard += newStr.charAt(i);

    if (creditCard.length === 19) {
      // we are at the last digit
      break;
    }

    if (count === 3) {
      creditCard += '-';
      count = -1;
    }

    count += 1;
  }

  return creditCard;
};

/**
 * @function parseCreditCard2
 * @param { String } str
 * @return { String }
 * Parses the string and adds the right dashes to
 * get a well-formatted credit card number.
 * This code does the same thing as the one above, but uses regular expression
 */
const parseCreditCard2 = (str) => {
  const dig4Pattern = /[0-9]{4}/g;
  return str.match(dig4Pattern).join('-');
};

/**
 * @function isEmpty
 *
 * @param { Object } obj
 * @return { Boolean }
 * Returns true if the object has no members, false otherwise
 */
const isEmpty = (obj) => {
  if (Object.keys(obj).length === 0) return true;
  return false;
};

/**
 * @function extendObj
 * @param {*} objects
 * @return {Object}
 * Returns an extended object with props from each object passed in as params
 */
const extendObj = (...args) => {
  let [emptyObj, first, second] = args;

  if ((emptyObj instanceof Object) && (isEmpty(emptyObj))) {
  // first argument must be an object and be empty
    if (first) {
      const firstObjkeys = Object.keys(first);
      for (let i = 0; i < firstObjkeys.length; i += 1) {
        emptyObj[firstObjkeys[i]] = first[firstObjkeys[i]];
      }
    }

    if (second) {
      const secondObjkeys = Object.keys(second);
      let key;
      for (let i = 0; i < secondObjkeys.length; i += 1) {
        key = secondObjkeys[i];
        emptyObj[key] = second[key];
      }
    }
    return emptyObj;
  }

  if ((!second) && (args.length === 2)) {
    [first, second] = args;
    const secondObjkeys = Object.keys(second);
    let key;
    for (let i = 0; i < secondObjkeys.length; i += 1) {
      key = secondObjkeys[i];
      first[key] = second[key];
    }
  }
  return first;
};

/**
 * @method equals
 *
 * @param {Object} obj1
 * @param {Object} obj2
 * @return {Boolean}
 * Compares two objects by their members
 */
const equals = (obj1, obj2) => {
  const mainProps = Object.keys(obj1);
  let prop;
  for (let i = 0; i < mainProps.length; i += 1) {
    prop = mainProps[i];
    if ((!(prop in obj2)) || (obj1[prop] !== obj2[prop])) {
      return false;
    }
  }

  return true;
};

/**
 * @constructor Component
 *
 * @param {Number} id
 * Creates a Component instance and assigns unique id to each instance
 * No private instance variables are used (intentional)
 */
function Component(id) {
  Component.idStore = Component.idStore || [];
  // for (let i = 0, len = Component.idStore.length; i < len; i += 1) {
  //   if (Component.idStore[i] === id) {
  //     throw new Error('It seems you have an object with the given id');
  //   }
  // }
  if (Component.idStore.includes(id)) {
    throw new Error('UniqueIndexError');
  }
  this.id = id;
  Component.idStore.push(id);
}


exports.getPrimes = getPrimes;
exports.isComposite = isComposite;
exports.parseCreditCard = parseCreditCard;
exports.parseCreditCard2 = parseCreditCard2;
exports.extendObj = extendObj;
exports.equals = equals;
exports.Component = Component;
