function Title({ setUsername }) {
  function onChange(e) {
    if (e.key === "Enter") {
      setUsername(e.target.value);
    }
  }
  return (
    <div className="title-page">
      <h1>RPS DUEL</h1>
      <p>Think you have what it takes?</p>
      <input placeholder="Enter your name" onKeyUp={onChange}></input>
    </div>
  );
}

export default Title;
