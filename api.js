const BASE_URL = "http://localhost:3000";

// ================= AUTH =================

// REGISTER
export const registerUser = async (data) => {
  const res = await fetch(`${BASE_URL}/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  });

  return res.json();
};

// LOGIN
export const loginUser = async (data) => {
  const res = await fetch(`${BASE_URL}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  });

  return res.json();
};


// ================= TRANSACTIONS =================

export const addTransaction = async (data) => {
  const res = await fetch(`${BASE_URL}/add-transaction`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  });

  return res.json();
};

export const getTransactions = async (userId) => {
  const res = await fetch(`${BASE_URL}/transactions/${userId}`);
  return res.json();
};

export const deleteTransaction = async (id) => {
  await fetch(`${BASE_URL}/delete-transaction/${id}`, {
    method: "DELETE"
  });
};

export const updateTransaction = async (id, data) => {
  await fetch(`${BASE_URL}/update-transaction/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  });
};


// ================= INVESTMENTS =================

export const addInvestment = async (data) => {
  const res = await fetch(`${BASE_URL}/add-investment`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  });

  return res.json();
};

export const getInvestments = async (userId) => {
  const res = await fetch(`${BASE_URL}/investments/${userId}`);
  return res.json();
};


// ================= DEBTS =================

export const addDebt = async (data) => {
  const res = await fetch(`${BASE_URL}/add-debt`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  });

  return res.json();
};

export const getDebts = async (userId) => {
  const res = await fetch(`${BASE_URL}/debts/${userId}`);
  return res.json();
};

export const updateDebt = async (id) => {
  await fetch(`${BASE_URL}/update-debt/${id}`, {
    method: "PUT"
  });
};

export const deleteDebt = async (id) => {
  await fetch(`${BASE_URL}/delete-debt/${id}`, {
    method: "DELETE"
  });
};


// ================= SUBSCRIPTIONS =================

export const addSubscription = async (data) => {
  const res = await fetch(`${BASE_URL}/add-subscription`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  });

  return res.json();
};

export const getSubscriptions = async (userId) => {
  const res = await fetch(`${BASE_URL}/subscriptions/${userId}`);
  return res.json();
};

export const updateSubscription = async (id, data) => {
  await fetch(`${BASE_URL}/update-subscription/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  });
};

export const deleteSubscription = async (id) => {
  await fetch(`${BASE_URL}/delete-subscription/${id}`, {
    method: "DELETE"
  });
};