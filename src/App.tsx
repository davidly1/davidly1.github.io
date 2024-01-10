import LinkBar from "./components/LinkBar";

const App = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center bg-gray-800">
      <div className="font-bold text-center text-6xl pb-8 text-gray-200">
        hello there 👋, <span className="text-green-100">i'm david ly</span> :)
      </div>
      <div className="flex flex-col items-center">
        <div className="font-medium text-4xl text-center pb-4 text-gray-200">
          3rd year{" "}
          <a
            href="https://uwaterloo.ca/management-sciences/management-engineering/"
            target="_blank"
            className="underline delay-150 ease-in-out hover:bg-sky-700 transition-all"
            rel="noopener noreferrer"
          >
            management engineering
          </a>{" "}
          student @{" "}
          <a
            href="https://uwaterloo.ca/"
            target="_blank"
            className="underline delay-150 ease-in-out hover:bg-sky-700 transition-all"
            rel="noopener noreferrer"
          >
            university of waterloo
          </a>
        </div>
        <div className="w-fit pb-1 font-medium text-center text-4xl bg-green-100 text-gray-800">
          currently seeking for a 4 month summer 2024 internship
        </div>
        <LinkBar />
      </div>
    </div>
  );
};

export default App;
