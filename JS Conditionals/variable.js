// Operations
// isNaN('11') → isNaN(11) → false
// isNaN() first converts values to numbers and then show the result is it number or not


// Number() function
// Used to convert other data types to numbers.
Number("10");     // 10
Number("10abc");  // NaN
Number(true);     // 1
Number(false);    // 0
Number(null);     // 0

// Checking numbers
typeof 10;        // "number"
isNaN("abc");     // true
Number.isNaN("abc"); // false


// null represents the intentional absence of a value.
// It means “nothing” or “empty on purpose”.
var user = null;        // user has no value yet
typeof null;            // "object" ❗ (this is a JavaScript bug)