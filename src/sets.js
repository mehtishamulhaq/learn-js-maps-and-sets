const setOperations = () => {
  // Set - iitiation
  console.log('------------------- Set -----------------');
  const iceCream = new Set();

  iceCream
    .add('chocolate')
    .add('vanila')
    .add('cofee')
    .add('strawberry')
    .add('cofee')
    .add('vanila');

  console.log('Ice cream set: ', iceCream);

  // Set Has
  console.log('------------------- Set.has -----------------');

  const hasMintChocolatChip = iceCream.has('mint chocolate chip');
  const hasCofee = iceCream.has('cofee');

  console.log('has mint chocolate chip flavour ? ', hasMintChocolatChip);
  console.log('has cofee flavour ? ', hasCofee);

  // Set size
  console.log('------------------- Set.size -----------------');

  console.log(`Our Icecream has total ${iceCream.size} flavours available `);

  // Set iterators

  // Set values
  console.log('------------------- Set.values -----------------');

  const values = iceCream.values();
  values.next();

  const secondValue = values.next().value;
  console.log('Second value in the set is ', secondValue);

  // Set entries
  console.log('------------------- Set.entries -----------------');

  const entries = iceCream.entries();
  entries.next();
  entries.next();

  const thirdValue = entries.next().value;
  console.log('third value in the set is ', thirdValue);

  // Set foreach
  console.log('------------------- Set.foreach -----------------');

  iceCream.forEach((val1, val2, iceCream_set) => {
    console.log('Value 1: ', val1);
    console.log('Value 2: ', val2);
    console.log('Complete set ', iceCream_set);
  });

  //   // Set delete
  //   console.log('------------------- Set.delete -----------------');
  //   iceCream.delete('strawberry');

  //   console.log('Available flavours at the moment', iceCream);

  //   // Set clear
  //   console.log('------------------- Set.clear -----------------');
  //   iceCream.clear();

  //   console.log('total Icecreams flavours ', iceCream.size);
};

export default setOperations;
