# Currency Calculator 💰

A simple **React-based Currency Converter** that allows users to convert between different currencies using **ExchangeRate-API**.

## 🌟 Features

✅ Convert between different currencies  
✅ Uses `fetch()` to get real-time exchange rates  
✅ Handles API errors gracefully  
✅ Displays conversion results dynamically  
✅ Simple and responsive UI

---

## 🚀 Technologies Used

- **React.js** (Functional Components)
- **useState & useEffect** (State Management & API Calls)
- **ExchangeRate-API** (Live Currency Data)
- **GitHub Pages** (Deployment)

---

## 📌 How It Works

### **1️⃣ API Integration**

This project uses the **ExchangeRate-API** to fetch live exchange rates.

```js
const API_KEY = "YOUR_API_KEY";

const fetchRates = async () => {
  const res = await fetch(
    `https://v6.exchangerate-api.com/v6/${API_KEY}/latest/USD`
  );
  const data = await res.json();
  console.log(data);
};
```
