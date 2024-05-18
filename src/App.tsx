
const App = () => {
  const arr: number[] = [1,2,93,12,65,0]
  const MaxValue = (arr: number[]) : number => {
    let max = arr[0];
    arr.forEach((ele)=> {
      if(ele>max){
        max = ele;
      }
    })
    return max;
  }

  console.log(MaxValue(arr))
  return (
    <div>App</div>
  )
}

export default App