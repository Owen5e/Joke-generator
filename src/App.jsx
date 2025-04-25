import Joke from "./Joke";

function App() {
  return (
    <>
      <div className="fixed  h-screen w-full bg-slate-950 px-2">
        <div className="fixed bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]"></div>

        <Joke />
      </div>
    </>
  );
}

export default App;
