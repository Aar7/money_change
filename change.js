function change(amt) {
  // assume amt is a dollar amount in the format DD.cc where D is dollars and c is coins
  // e.g. 14.56
  amt *= 100; // makes the amt an integer for easy readability
  let coins = {
    c25: 0,
    c10: 0,
    c5: 0,
    c1: 0,
  };

  coins.c25 = Math.floor(amt / 25);
  amt %= 25;
  coins.c10 = Math.floor(amt / 10);
  amt %= 10;
  coins.c5 = Math.floor(amt / 5);
  coins.c1 = Math.floor(amt % 5);

  console.log(coins);
}

change(1.01); // 25x1, 10x2
change(2.56); // 25x10, 10x0, 5x1, 1x1
