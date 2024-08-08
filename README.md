# Carbona

**Carbona** is a simple JavaScript date and time library inspired by PHP's Carbon library. It provides an easy-to-use API for manipulating and formatting dates and times.

## Installation

You can install Carbona via npm:

```bash
npm install Carbona
```

## Usage

### Importing the Library

In your JavaScript file, import the Carbona class:

```javascript
const Carbona = require("Carbona");
```

### Creating a Carbona Instance

You can create a new instance of Carbona with the current date and time or a specific date and time:

```javascript
// Current date and time
let now = Carbona.now();

// Specific date and time
let specificDate = Carbona.parse("2024-08-08 15:00:00");
```

### Formatting Dates

Use the `format` method to format the date. The format string supports the following tokens:

- `YYYY` - Full year (e.g., 2024)
- `YY` - Short year (e.g., 24)
- `MMMM` - Full month name (e.g., August)
- `MMM` - Short month name (e.g., Aug)
- `MM` - Padded month (e.g., 08)
- `M` - Non-padded month (e.g., 8)
- `DD` - Padded day (e.g., 08)
- `D` - Non-padded day (e.g., 8)
- `Do` - Day with suffix (e.g., 8th)
- `HH` - Hours (e.g., 14)
- `mm` - Minutes (e.g., 05)
- `ss` - Seconds (e.g., 09)

Example:

```javascript
let formattedDate = now.format("Do MMMM YYYY, HH:mm:ss");
console.log(formattedDate); // Outputs something like '8th August 2024, 15:00:00'
```

### Manipulating Dates

Carbona allows you to add or subtract days, months, or years from a date:

```javascript
// Add days
let futureDate = now.addDays(5).format("YYYY-MM-DD");
console.log(futureDate); // Outputs the date 5 days from now

// Subtract months
let pastDate = now.subMonths(2).format("YYYY-MM-DD");
console.log(pastDate); // Outputs the date 2 months ago
```

### Other Useful Methods

- **Start and End of Day**: Set the time to the start or end of the day.

  ```javascript
  let startOfDay = now.startOfDay().format("YYYY-MM-DD HH:mm:ss");
  let endOfDay = now.endOfDay().format("YYYY-MM-DD HH:mm:ss");
  ```

- **Difference in Days**: Calculate the difference in days between two dates.

  ```javascript
  let diff = now.diffInDays("2024-08-15");
  console.log(diff); // Outputs the difference in days
  ```

- **Comparison**: Check if a date is before or after another date.

  ```javascript
  let isBefore = now.isBefore("2024-08-10");
  let isAfter = now.isAfter("2024-08-05");
  ```

### Convert to Native Date Object

You can convert the Carbona instance to a native JavaScript Date object:

```javascript
let nativeDate = now.toDate();
console.log(nativeDate); // Outputs the native Date object
```

### Convert to ISO String

Convert the Carbona instance to an ISO string:

```javascript
let isoString = now.toISOString();
console.log(isoString); // Outputs the ISO string
```

### Convert to String

Convert the Carbona instance to a string representation:

```javascript
let dateString = now.toString();
console.log(dateString); // Outputs the string representation of the date
```

## License

This project is licensed under the MIT License.
