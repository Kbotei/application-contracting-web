import "./App.css";
import Scholarship from "./pages/applications/scholarship.jsx";

function App() {
  return (
    <>
      <div className="container mx-auto">
        <div className="flex flex-row flex-wrap py-4">
          <aside className="w-full sm:w-1/3 md:w-1/4 px-2">
            <div className="sticky top-0 p-4 w-full">
              <ul className="flex flex-col overflow-hidden">
                <li>Sidebar Placeholder</li>
              </ul>
            </div>
          </aside>
          <main role="main" className="w-full sm:w-2/3 md:w-3/4 pt-1 px-2">
            <Scholarship />
          </main>
        </div>
      </div>
      <footer className="mt-auto">Footer Placeholder</footer>
    </>
  );
}

export default App;
