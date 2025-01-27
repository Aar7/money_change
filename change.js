function change(amt) {
  // assume amt is a dollar amount in the format DD.cc where D is dollars and c is coins
  // e.g. 14.56
  amt *= 100; // converts dollars to pennies. e.g. $30 => 3000 pennies
  let coins = {
    c25: 0,
    c10: 0,
    c5: 0,
    c1: 0,
  };

  const coinsKeys = Object.keys(coins);

  coinsKeys.forEach((key) => {
    // key = key.replace('c', '');
    // console.log(key)
    const intKey = parseInt(key.replace("c", "")); // removes the 'c' from the key to allow parsing to integer and converts the new key from a string to number to allow for division later
    // console.log(intKey);
    coins[key] = Math.floor(amt / intKey); // combines result of prev two steps to assign to relevant key in coins obj
    amt %= intKey; // removes the quantity calculated from the previous step
  });

  //   coins.c25 = Math.floor(amt / 25);
  //   amt %= 25;
  //   coins.c10 = Math.floor(amt / 10);
  //   amt %= 10;
  //   coins.c5 = Math.floor(amt / 5);
  //   coins.c1 = Math.floor(amt % 5);

  //   console.log(coins);

  console.log(
    `Give: ${coins.c25 === 0 ? `` : `\n${coins.c25} 25c pieces`}${
      coins.c10 === 0 ? `` : `\n${coins.c10} 10c pieces`
    }${coins.c5 === 0 ? `` : `\n${coins.c5} 5c pieces`}${
      coins.c1 === 0 ? `` : `\n${coins.c1} 1c pieces`
    }\n`
  ); // outputs the result in a readable, concise format
  // console.log(
  //   `Give:\n${coins.c25} 25c pieces,\n${coins.c10} 10c pieces,\n${coins.c5} 5c pieces,\n${coins.c1} 1c pieces\n`
  // );

  //   coins.c10 === 0 ? null : console.log(coins.c25);
}

change(1.01); // { c25: 4, c10: 0, c5: 0, c1: 1 }
change(2.56); // { c25: 10, c10: 0, c5: 1, c1: 1 }
change(0.43); // { c25: 1, c10: 1, c5: 1, c1: 3 }
change(43.98); // { c25: 175, c10: 2, c5: 1, c1: 3 }
