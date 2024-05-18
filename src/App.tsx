
const App = () => {

  type StringOrNumber = string | number //unions
  function getUser(id: StringOrNumber){
    console.log(id)
  }
  getUser(134)

  type Employee = {
    name: string;
    startDate: Date;
  }
  type Manager = {
    name: string;
    department: string;
  }

type TeamLead = Employee & Manager;

  const teamLead : TeamLead = {
    name: "kamal",
    startDate: new Date(),
    department: "Software Developer"
  }

  console.log(teamLead.name)

  return (
    <div>App</div>
  )
}

export default App