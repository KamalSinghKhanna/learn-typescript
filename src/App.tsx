
const App = () => {


function identity<T>(arg: T): T {
  return arg;
}

const output1 = identity<string>("myString");
const output2 = identity<number>(100);

// console.log(output1, output2)

function getFirstElement<T>(arr: T[]) {
  return arr[0];
}

const el = getFirstElement(["kamal", "mukul"]);
const el2 = getFirstElement<string>(["HarkiratSingh", 1]);

console.log(el2.toLowerCase());
  return (
    <div>App</div>
  )
}

export default App