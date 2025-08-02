# NumFormatUX

**NumFormatUX** is a lightweight JavaScript plugin designed to enhance user experience when entering numbers in input fields. It automatically formats numbers with thousand separators during typing and applies decimal formatting on blur — without losing cursor position.

---

## 🚀 Features

- 🧠 Intelligent formatting while typing
- 🧮 Adds thousand separators (e.g. 10,000)
- 📉 Formats decimals on blur (e.g. 12,500.000)
- 🧼 Removes formatting for clean form submission
- 🔁 Supports custom selectors and decimal places
- ✅ Plain JavaScript — no dependencies

---

## 🔧 Installation

You can clone or download the repository:

```bash
git clone https://github.com/imatteh/NumFormatUX.git

Or include it directly in your HTML:

```
<script src="num-format-ux.js"></script>
```

## ⚙️ Usage
1. Mark your input fields:
```
<input type="text" class="number-input" placeholder="Enter amount" />
```
2. Initialize the formatter

```
document.addEventListener('DOMContentLoaded', function () {
    NumberFormatter.init('.number-input', 3); // 3 decimal places
});
```

3. Clean values before form submission
 
```
document.querySelector('form').addEventListener('submit', function () {
    document.querySelectorAll('.number-input').forEach(function (input) {
        input.value = NumberFormatter.unformat(input.value);
    });
});
```

## 🌐 Browser Compatibility

| Browser | Supported |
| ------- | --------- |
| Chrome  | ✅         |
| Firefox | ✅         |
| Safari  | ✅         |
| Edge    | ✅         |
| Opera   | ✅         |


## 🧪 Example
```
<form>
  <input type="text" class="number-input" value="10000.5" />
  <button type="submit">Submit</button>
</form>

<script>
  NumberFormatter.init('.number-input', 2);
</script>
```

