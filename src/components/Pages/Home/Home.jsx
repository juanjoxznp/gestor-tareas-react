import { useContext } from "react";
import { Header } from "../../Layouts/Header/Header";
import { Main } from "../../Layouts/Main/Main";
import { ContainerTasks } from "../../Layouts/ContainerTasks/ContainerTasks";
import { ItemTask } from "../../ItemTask/ItemTask";
import { taskContext } from "../../Context/Context";
import { NewTask } from "../../NewTask/NewTask";
import { InfoTasks } from "../../Layouts/InfoTasks/InfoTasks";
import { FilterTask } from "../../FilterTasks/FilterTasks";

export const Home = () => {
  const { filteredTasks } = useContext(taskContext);

  return (
    <>
      <Header>
        <h1>Gestor de tareas</h1>
        <NewTask/>
        <FilterTask/>
        <InfoTasks/>
      </Header>
      <Main>
        <ContainerTasks>
          {filteredTasks.map((task) => (
            <ItemTask
              key={task.id}
              idTask={task.id}
              content={task.description}
              titleTask={task.title}
            />
          ))}
        </ContainerTasks>
      </Main>
    </>
  );
};
