
import React, { useState } from 'react';
import './App.css';

function App() {
    const [expenses, setExpenses] = useState([]);
    const [name, setName] = useState('');
    const [amount, setAmount] = useState('');
    const [category, setCategory] = useState('Food');

    const addExpense = (e) => {
        e.preventDefault();
        setExpenses([...expenses, { name, amount, category }]);
        setName('');
        setAmount('');
        setCategory('Food');
    };

    const deleteExpense = (index) => {
        const newExpenses = expenses.filter((expense, i) => i !== index);
        setExpenses(newExpenses);
    };

    return (
        <div className="container">
            <h1>Budget Tracker</h1>
            <form onSubmit={addExpense}>
                <input
                    type="text"
                    placeholder="Expense Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Amount"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                />
                <select value={category} onChange={(e) => setCategory(e.target.value)}>
                    <option value="Food">Food</option>
                    <option value="Transportation">Transportation</option>
                    <option value="Housing">Housing</option>
                    <option value="Entertainment">Entertainment</option>
                    <option value="Other">Other</option>
                </select>
                <button>Add Expense</button>
            </form>
            <ul>
                {expenses.map((expense, index) => (
                    <li key={index}>
                        <div>
                            <p>{expense.name}</p>
                            <p>${expense.amount}</p>
                            <p>{expense.category}</p>
                        </div>
                        <button className="delete" onClick={() => deleteExpense(index)}>
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default App;
