import Navbar from "./components/Navbar.jsx";
import Sidebar from "./components/Sidebar.jsx";

const App = () => {
  return (
    <div className="bg-gray-50 -500 min-h-screen">
      <>
        <Navbar />
        <hr />
        <div className="flex w-full">
          <Sidebar />
        </div>
      </>
    </div>
  );
};

export default App;
