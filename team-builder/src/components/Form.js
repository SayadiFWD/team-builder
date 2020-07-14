import React, { useState } from "react";

const Form = (props) => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    roll: "",
  });

  const changeHandler = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <form onSubmit={event=>{
      event.preventDefault();
      setForm({name:'',email:'',roll:''})
      props.members();
    }}>
      <label htmlFor="name">Name</label>
      <input
        name="name"
        id="name"
        placeholder="First Name"
        value={form.name}
        onChange={changeHandler}
      />
      <label htmlFor="email">Email Address</label>
      <input
        type="email"
        name="email"
        id="email"
        placeholder="Email Address"
        value={form.email}
        onChange={changeHandler}
      />
      <label htmlFor="roll">Roll Number</label>
      <input
        name="roll"
        id="roll"
        placeholder="Roll Number"
        value={form.roll}
        onChange={changeHandler}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
