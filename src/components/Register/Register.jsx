import React, { useState } from "react";

const initialFormState = { username: "", email: "", password: "" };

export default function Register() {
  const [form, setForm] = useState(initialFormState);

  const [user, setUser] = useState(null);

  const handelChange = (e) => {
    setForm({
      ...form,
      [e.target.value]: e.target.value
    });
  };

  const handelSubmit = (e) => {
    e.preventDefault();
    setUser(form);
    setForm(initialFormState);
  };
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Register</h1>
      <form
        onSubmit={handelSubmit}
        style={{
          display: "grid",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <input
          type="text"
          placeholder="User Name"
          name="username"
          onChange={handelChange}
          value={form.username}
        />
        <input
          name="email"
          type="email"
          placeholder="Email"
          onChange={handelChange}
          value={form.email}
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          onChange={handelChange}
          value={form.password}
        />
        <button type="submit">Submit</button>
      </form>
      {user && JSON.stringify(user, null, 2)}
    </div>
  );
}
