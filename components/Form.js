import { useState } from "react";

const Form = () => {
  const [email, setEmail] = useState("");
  const [open, setOpen] = useState(false);

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
      body: encode({ "form-name": "cooling", email })
    });
  }

  return (
    <div>
      <button onClick={()=>{setOpen(true)}}>show form</button>
      {open?(
        <form name="cooling" onSubmit={onSubmit} data-netlify={true} class="">
          <input type="hidden" name="form-name" value="cooling" />
          <input class="" value={email} name="email" type="email" onChange={(e) => setEmail(e.target.value)} placeholder="you@example.com" />
          <button type="submit">submit</button>
        </form>
      ):null}
    </div>
  );
};

export default Form;
