const Chart = () => {
  return (
    <section>
      <h2>Lets see things in more details</h2>
      <select name="firstCurrency">
        <option value="4.13">EUR</option>
        <option value="4.13">USD</option>
        <option value="4.13">PLN</option>
        <option value="4.13">GPB</option>
      </select>
      <select name="secondCurrency">
        <option value="4.13">EUR</option>
        <option value="4.13">USD</option>
        <option value="4.13">PLN</option>
        <option value="4.13">GPB</option>
      </select>
      <p>1 USD = 4.48 PLN</p>
      <div className="chart"></div>
    </section>
  );
};

export default Chart;
