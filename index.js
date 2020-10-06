function myProfile(name, age,) {
  console.log('My name is ' + name + ' and ' + 'I am ' + age + ' Years old');
}
// myProfile('Nosenti', 23);

function odds() {
  let arr = [65, 11, 33, 42, 28, 83, 61, 32, 30, 18, 99, 40, 72, 99, 29
    , 100, 21, 26, 45, 46, 31, 75, 35, 8, 99, 22, 3, 63, 23, 98];
  for (let i = 0; i <= arr.length - 1; i++) {
    if (arr[i] % 2 != 0) {
      console.log(arr[i]);
    }

  }
}
// odds();
function profiles() {
  let nameArray = ["Denis Lohan 30", "Patrick Lee 46", "John Lizu 40", "Kay Lizu 40", "David Lizu 40", "Peter Lizu 40", "Vanessa Lizu 40", "Yannick Lizu 40", "Djokivic Lizu 40", "Josue Lizu 40", "Joshua Lizu 40", "Anisie Lizu 40", "Raufu Lizu 40", "Awesome Lizu 40", "Nosenti Lizu 40", "Denis Lohan 30", "Raufu Lizu 40", "SZA Lizu 40", "Jordan Lizu 40", "Crepin Lizu 40"];
  /**
   * Loop through the array and get an element
   * For every element, divide it by space
   * create an empty obj and give it the name of the first parameter
   * add a key and call it the last name. 
   * Add the second element of an item as the value of the last_name
   * Add the third element of an item as the value of the item's age
   * 
   */
  let first_name = new Object();
  let i = 0;
  while (i <= nameArray.length - 1) {
    let pr = nameArray[i].split(" ");
    let a = {};
    a['last_name'] = pr[1];
    a['age'] = pr[2];
    first_name[pr[0]] = a;
    i++;
  }
  console.log(first_name);



}
profiles();
