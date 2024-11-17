import data from "./data/data.json"
import Job from "./components/job";

function App() {
  console.log(data)
  return (
    <>
      <div className="w-full h-[180px] bg-[hsl(180,29%,50%)]">
        <picture>
          <source media="(min-width: 1024px)" srcSet="./images/bg-header-desktop.svg"  />
          <img src="./images/bg-header-mobile.svg" alt="img"
          className="w-full h-[180px] object-fill"/>
        </picture>
        
      </div>
      <div className="jobs flex flex-col justify-center items-center pt-[70px] space-y-[40px]">
        {
          data.map((item) => <Job key={item.id} item={ item } />)
        }
      </div>
    </>
  );
}

export default App;

