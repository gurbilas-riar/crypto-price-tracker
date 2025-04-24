export default class SocketSimulator {
    constructor(callback) {
      this.callback = callback;
      this.start();
    }
  
    start() {
      setInterval(() => {
        const id = Math.random() > 0.5 ? 'btc' : 'eth';
        const update = {
          id,
          price: parseFloat((Math.random() * 100000).toFixed(2)),
          percentChange: parseFloat((Math.random() * 10 - 5).toFixed(2)),
          volume: Math.floor(Math.random() * 20000),
        };
        this.callback(update);
      }, 1000);
    }
  }