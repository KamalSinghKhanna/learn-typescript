
const App = () => {
 interface User {
   firstName: string;
   lastName: string;
   age: number;
 }
const list: User[] = [
  {
    firstName: "harkirat",
    lastName: "Singh",
    age: 21,
  },
  {
    firstName: "Raman",
    lastName: "Singh",
    age: 16,
  },
];
  
  const isLegal = (list: User[]) =>{
   return list.filter((item) => item.age > 18);
  }


  console.log(isLegal(list))

  return (
    <div>App</div>
  )
}

export default App