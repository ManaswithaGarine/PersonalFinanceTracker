const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const path = require('path');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname)));

// ================= MONGODB =================
mongoose.connect('mongodb://127.0.0.1:27017/FinanceTracker')
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));


// ================= SCHEMAS =================

// USERS
const User = mongoose.model('User', new mongoose.Schema({
  email: { type: String, unique: true },
  password: String
}));

// TRANSACTIONS
const Transaction = mongoose.model('Transaction', new mongoose.Schema({
  user_id: String,
  type: String,
  amount: Number,
  category: String,
  date: String,
  note: String
}));

// INVESTMENTS
const Investment = mongoose.model('Investment', new mongoose.Schema({
  user_id: String,
  stock_name: String,
  exchange: String,
  buy_price: Number,
  quantity: Number,
  date: String
}));

// DEBTS
const Debt = mongoose.model('Debt', new mongoose.Schema({
  user_id: String,
  person_name: String,
  amount: Number,
  type: String,
  due_date: String,
  note: String,
  status: { type: String, default: "Active" }
}));

// SUBSCRIPTIONS
const Subscription = mongoose.model('Subscription', new mongoose.Schema({
  user_id: String,
  name: String,
  amount: Number,
  billing_cycle: String,
  next_payment: String
}));


// ================= AUTH =================

// REGISTER
app.post('/register', async (req, res) => {
  try {
    const { email, password } = req.body;

    const existing = await User.findOne({ email });
    if (existing) return res.json({ message: "User already exists ❌" });

    await new User({ email, password }).save();
    res.json({ message: "Registered successfully ✅" });

  } catch {
    res.json({ message: "Error ❌" });
  }
});

// LOGIN
app.post('/login', async (req, res) => {
  const user = await User.findOne({ email: req.body.email });

  if (!user) return res.json({ success: false });

  if (user.password === req.body.password) {
    res.json({ success: true, userId: user._id });
  } else {
    res.json({ success: false });
  }
});


// ================= TRANSACTIONS =================

app.post('/add-transaction', async (req, res) => {
  await new Transaction(req.body).save();
  res.json({ message: "Added ✅" });
});

app.get('/transactions/:user_id', async (req, res) => {
  const data = await Transaction.find({ user_id: req.params.user_id }).sort({ date: -1 });
  res.json(data);
});

app.delete('/delete-transaction/:id', async (req, res) => {
  await Transaction.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted ✅" });
});

app.put('/update-transaction/:id', async (req, res) => {
  await Transaction.findByIdAndUpdate(req.params.id, req.body);
  res.json({ message: "Updated ✅" });
});


// ================= INVESTMENTS =================

app.post('/add-investment', async (req, res) => {
  await new Investment(req.body).save();
  res.json({ message: "Added ✅" });
});

app.get('/investments/:user_id', async (req, res) => {
  const data = await Investment.find({ user_id: req.params.user_id }).sort({ date: -1 });
  res.json(data);
});


// ================= DEBTS =================

app.post('/add-debt', async (req, res) => {
  await new Debt(req.body).save();
  res.json({ message: "Added ✅" });
});

app.get('/debts/:user_id', async (req, res) => {
  const data = await Debt.find({ user_id: req.params.user_id }).sort({ due_date: -1 });
  res.json(data);
});

app.put('/update-debt/:id', async (req, res) => {
  await Debt.findByIdAndUpdate(req.params.id, { status: "Settled" });
  res.json({ message: "Updated ✅" });
});

app.delete('/delete-debt/:id', async (req, res) => {
  await Debt.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted ✅" });
});


// ================= SUBSCRIPTIONS =================

app.post('/add-subscription', async (req, res) => {
  await new Subscription(req.body).save();
  res.json({ message: "Added ✅" });
});

app.get('/subscriptions/:user_id', async (req, res) => {
  const data = await Subscription.find({ user_id: req.params.user_id }).sort({ next_payment: 1 });
  res.json(data);
});

app.put('/update-subscription/:id', async (req, res) => {
  await Subscription.findByIdAndUpdate(req.params.id, req.body);
  res.json({ message: "Updated ✅" });
});

app.delete('/delete-subscription/:id', async (req, res) => {
  await Subscription.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted ✅" });
});


// ================= SERVER =================
app.listen(3000, () => {
  console.log("🚀 Server running at http://localhost:3000");
});