  async function fetchPrices() {
      try {
        const url = "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,dogecoin&vs_currencies=usd";
        const response = await fetch(url);
        const data = await response.json();

        document.getElementById("btc").innerText = data.bitcoin.usd;
        document.getElementById("eth").innerText = data.ethereum.usd;
        document.getElementById("doge").innerText = data.dogecoin.usd;
      } catch (error) {
        console.error("Error fetching prices:", error);
      }
    }

    // First call
    fetchPrices();

    // Auto update every 30 seconds
    setInterval(fetchPrices, 30000);