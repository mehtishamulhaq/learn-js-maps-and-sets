const mapOperations = () => {
  // map - initiate
  const saturday = new Map();

  // map - Set
  console.log('------------------- Map -----------------');
  saturday.set(8, 'breakfast');
  saturday.set(12, 'lunch');
  saturday.set(3, 'wach movies');

  console.log('Map contents:', saturday);

  // map - Get
  console.log('----------------- Map.Get -------------------');
  const noon = saturday.get(12);
  console.log('what is the schedule at 12pm on saturday -->', noon);

  const nine = saturday.get(9);
  console.log('what is the schedule at 9pm on saturday -->', nine);

  // map - has
  console.log('------------------- Map.has -----------------');
  const hasFour = saturday.get(4);
  const hasEight = saturday.get(8);

  console.log('Does the map has four? ', hasFour);
  console.log('Does the map has eight? ', hasEight);

  // map - size
  console.log('------------------- Map.size -----------------');
  const saturdaySize = saturday.size;

  console.log(`saturday map has ${saturdaySize} elements`);

  // Map iterators

  // Map keys
  console.log('------------------- Map.keys -----------------');

  const keys = saturday.keys();
  const firstKey = keys.next().value;

  console.log('First key in the map is ', firstKey);

  // Map values
  console.log('------------------- Map.values -----------------');

  const values = saturday.values();
  values.next();

  const secondValue = values.next().value;

  console.log('Second value in the map is ', secondValue);

  // Map entries
  console.log('------------------- Map.entries -----------------');

  const entries = saturday.entries();
  entries.next();
  entries.next();

  const thirdEntry = entries.next().value;

  console.log('Third entry in the map is ', thirdEntry);

  // Map foreach
  console.log('------------------- Map.foreach -----------------');

  saturday.forEach((value, key, sat_map) => {
    console.log('current key: ', key);
    console.log('current value: ', value);
    console.log('Whole map: ', sat_map);

    if (key === 12) {
      console.log(`=======> it's time for the ${value}`);
    }

    console.log('---------------------');
  });

  // map - delete
  console.log('------------------- Map.delete -----------------');
  const isFourDeleted = saturday.delete(4);
  const isEightDeleted = saturday.delete(8);

  console.log('Is Four (4) deleted from map successfully? ', isFourDeleted);
  console.log('Is Eight (8) deleted from map successfully? ', isEightDeleted);

  // Map Clear
  console.log('------------------- Map.clear -----------------');
  saturday.clear();
  console.log('Map size: ', saturday.size);
};

export default mapOperations;
