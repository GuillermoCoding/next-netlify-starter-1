import { useState } from "react";

const Form = () => {
  const [email, setEmail] = useState("");

  const encode = (data) => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
  }
   

  const onSubmit = (event) => {
    event.preventDefault();
    console.log(email)
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "testing", email })
    });
  }

  return (
    <div>
      <form name="testing" onSubmit={onSubmit} data-netlify={true} class="">
        <input type="hidden" name="form-name" value="testing" />
        <input class="" value={email} name="email" type="email" onChange={(e) => setEmail(e.target.value)} placeholder="you@example.com" />
        <button type="submit">submit</button>
      </form>
    </div>
  );
};

export default Form;
