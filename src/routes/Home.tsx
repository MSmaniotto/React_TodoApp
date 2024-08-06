import Header from "@/components/Header";
import TodosLogic from "@/components/TodosLogic";

const Home = () => {
  return (
    <div className="todos">
      <Header>
        <h1>Todo App</h1>
      </Header>
      <Header />
      <TodosLogic />
    </div>
  );
};
export default Home;
