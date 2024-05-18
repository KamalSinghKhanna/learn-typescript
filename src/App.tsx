
const App = () => {
 enum Direction {
    Up = "UP",
    Down = "Down",
    Left = "Left",
    Right = 'Right'
 }

 function doSomething(keyPressed: Direction) {
   // do something.
   console.log(keyPressed)
 }

 doSomething(Direction.Left);
  return (
    <div>App</div>
  )
}

export default App