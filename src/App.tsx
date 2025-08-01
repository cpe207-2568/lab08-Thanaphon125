import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import TaskCard from "./components/Task"; // <-- แก้ตรงนี้
import TaskInput from "./components/TaskInput";
import { type TaskCardProps } from "./libs/type"; // <-- แก้ตรงนี้

function App() {
  const TaskCards: TaskCardProps[] = [
    { id: 0, title: "Read a book", description: "Vite + React + Bootstrap + TS", isDone: false },
    { id: 1, title: "Write code", description: "Finish project for class", isDone: false },
    { id: 2, title: "Deploy app", description: "Push project to GitHub Page", isDone: false },
  ];

  return (
    <div className="d-flex flex-column" style={{ minHeight: "100vh" }}>
      <Header />
      <div className="d-flex flex-grow-1">
        <Sidebar username="Thanaphon" type="admin" />
        <div className="container text-center">
          <main className="flex-grow-1 p-4">
            <div className="col-12 m-2 p-0">
              <TaskInput />
              <TaskCard {...TaskCards[0]} />
              <TaskCard {...TaskCards[1]} />
              <TaskCard {...TaskCards[2]} />
            </div>
          </main>
        </div>
      </div>
      <Footer year="2026" fullName="Thanaphon Chunlahawanit" studentId="670612122" />
    </div>
  );
}

export default App;
