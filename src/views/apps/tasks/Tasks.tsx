import { useState } from "react";
import { useForm } from "react-hook-form";
import "../../../styles/components/Tasks.css";
import {
  DragDropContext,
  Droppable,
  Draggable,
  DropResult,
} from "@hello-pangea/dnd";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { tasks, TaskTypes } from "../../../assets/data/KanbanData";
import defaultAvatar from "../../../assets/images/avatar-1.jpg";
import TaskItem from "./TaskItem";
import AddNewTask from "./AddNewTask";
import Layout from "../../../utils/Layout";
import {
  Box,
  useMantineColorScheme,
  useMantineTheme,
  Tooltip,
} from "@mantine/core";
import { IconPlus } from "@tabler/icons";

interface StateType {
  todoTasks: TaskTypes[];
  inprogressTasks: TaskTypes[];
  reviewTasks: TaskTypes[];
  doneTasks: TaskTypes[];
}

// kanban
const Kanban = () => {
  const [state, setState] = useState<StateType>({
    todoTasks: tasks.filter((t) => t.status === "Pending"),
    inprogressTasks: tasks.filter((t) => t.status === "Inprogress"),
    reviewTasks: tasks.filter((t) => t.status === "Review"),
    doneTasks: tasks.filter((t) => t.status === "Done"),
  });
  const [totalTasks, setTotalTasks] = useState<number>(tasks.length);
  const [newTaskModal, setNewTaskModal] = useState<boolean>(false);
  const [newTaskDetails, setNewTaskDetails] = useState<any>(null);

  /*
   * Form validation schema
   */
  const schemaResolver = yupResolver(
    yup.object().shape({
      title: yup.string().required(),
      priority: yup.string().required(),
    })
  );

  /*
   * Form methods
   */
  const methods = useForm({ resolver: schemaResolver });
  const {
    handleSubmit,
    register,
    control,
    reset,
    formState: { errors },
  } = methods;

  /**
   * Toggles the new task modal
   */
  const toggleNewTaskModal = () => {
    setNewTaskModal((prevstate) => !prevstate);
  };

  /**
   * Creates new empty task with given status
   * @param status
   * @param queue
   */
  const newTask = (status: string, queue: string) => {
    setNewTaskDetails({
      dueDate: new Date(),
      userAvatar: [defaultAvatar],
      status: status,
      queue: queue,
    });
    setNewTaskModal(true);
  };

  /**
   * When date changes
   * @param {} date
   */
  const handleDateChange = (date: Date) => {
    if (newTaskDetails) {
      setNewTaskDetails({ ...newTaskDetails, dueDate: date });
    }
  };

  // a little function to help us with reordering the result
  const reorder = (list: any[], startIndex: number, endIndex: number) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
  };

  /**
   * Moves an item from one list to another list.
   */
  const move = (
    source: Iterable<unknown> | ArrayLike<unknown>,
    destination: Iterable<unknown> | ArrayLike<unknown>,
    droppableSource: { index: number; droppableId: string | number },
    droppableDestination: { index: number; droppableId: string | number }
  ) => {
    const sourceClone = Array.from(source);
    const destClone = Array.from(destination);
    const [removed] = sourceClone.splice(droppableSource.index, 1);
    destClone.splice(droppableDestination.index, 0, removed);
    const result: any = {};
    result[droppableSource.droppableId] = sourceClone;
    result[droppableDestination.droppableId] = destClone;

    return result;
  };

  /**
   * Gets the list
   */
  const getList = (id: string) => {
    const modifiedState: any = { ...state };
    const stateTasks: any = modifiedState[id] && modifiedState[id];
    return stateTasks;
  };

  /**
   * On drag end
   */
  const onDragEnd = (result: DropResult) => {
    const { source, destination } = result;

    // dropped outside the list
    if (!destination) {
      return;
    }
    if (source.droppableId === destination.droppableId) {
      const items = reorder(
        getList(source.droppableId),
        source.index,
        destination.index
      );
      let localState: any = { ...state };
      localState[source.droppableId] = items;
      setState(localState);
    } else {
      const result = move(
        getList(source.droppableId),
        getList(destination.droppableId),
        source,
        destination
      );
      const localState = { ...state, ...result };
      setState(localState);
    }
  };

  /**
   * Handles the new task form submission
   */
  const handleNewTask = (values: any) => {
    const formData = {
      title: values["title"],
      priority: values["priority"],
    };

    const newTask = {
      ...newTaskDetails,
      ...formData,
      id: totalTasks + 1,
      dueDate: newTaskDetails.dueDate.toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
      }),
      totalComments: 18,
      totalSubTasks: 12,
      subTaskCompleted: 2,
    };

    let modifiedState: any = { ...state };
    let tasks = [...getList(newTaskDetails.queue), newTask];
    modifiedState[newTaskDetails.queue] = [...tasks];

    setState(modifiedState);
    setNewTaskModal(false);
    setTotalTasks(totalTasks + 1);
    reset();
  };

  const { colorScheme } = useMantineColorScheme();
  const dark = colorScheme === "dark";
  const theme = useMantineTheme();

  return (
    <Layout>
      <Box
        style={{
          backgroundColor: dark ? theme.colors.dark[0] : theme.colors.white[2],
          color: dark ? theme.colors.grey200[6] : theme.colors.grey800[4],
        }}
        className="container"
      >
        <div className="page_titlebox">
          <h4
            style={{
              color: dark ? theme.colors.grey200[6] : theme.colors.grey800[4],
            }}
            className="page_title"
          >
            Tasks List
          </h4>
        </div>
        <DragDropContext onDragEnd={onDragEnd}>
          <div className="board">
            {/* todo */}
            <Droppable droppableId="todoTasks">
              {(provided, snapshot) => (
                <div
                  style={{
                    backgroundColor: dark
                      ? theme.colors.grey900[1]
                      : theme.colors.white[4],
                    border: dark
                      ? "none"
                      : "1px solid var(--mantine-color-grey300-4)",
                  }}
                  className="tasks border"
                  ref={provided.innerRef}
                >
                  <div
                    style={{
                      backgroundColor: dark
                        ? theme.colors.grey900[8]
                        : theme.colors.grey300[1],
                    }}
                    className="mt-0 task-header"
                  >
                    <h5>
                      Todo
                      <span>({state.todoTasks.length})</span>
                    </h5>
                    <Tooltip label="Add New Todo Task">
                      <i
                        id="addNewTodo"
                        onClick={() => newTask("Pending", "todoTasks")}
                      >
                        <IconPlus size={18} />
                      </i>
                    </Tooltip>
                  </div>

                  {state.todoTasks.length === 0 && (
                    <p className="notasks">No Tasks</p>
                  )}

                  {state.todoTasks.map((item, index) => (
                    <Draggable
                      key={item.id}
                      draggableId={item.id + ""}
                      index={index}
                    >
                      {(provided, snapshot) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                        >
                          <TaskItem task={item} />
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>

            {/* in progress */}
            <Droppable droppableId="inprogressTasks">
              {(provided, snapshot) => (
                <div
                  style={{
                    backgroundColor: dark
                      ? theme.colors.grey900[1]
                      : theme.colors.white[4],
                    border: dark
                      ? "none"
                      : "1px solid var(--mantine-color-grey300-4)",
                  }}
                  ref={provided.innerRef}
                  className="tasks border"
                >
                  <div
                    style={{
                      backgroundColor: dark
                        ? theme.colors.grey900[8]
                        : theme.colors.grey300[1],
                    }}
                    className="mt-0 task-header"
                  >
                    <h5>
                      In Progress
                      <span> ({state.inprogressTasks.length})</span>
                    </h5>
                    <Tooltip label="Add New In Progress Task">
                      <i
                        id="addNewTodo"
                        onClick={() => newTask("Pending", "todoTasks")}
                      >
                        <IconPlus size={18} />
                      </i>
                    </Tooltip>
                  </div>

                  {state.inprogressTasks.length === 0 && (
                    <p className="notasks">No Tasks</p>
                  )}

                  {state.inprogressTasks.map((item, index) => (
                    <Draggable
                      key={item.id}
                      draggableId={item.id + ""}
                      index={index}
                    >
                      {(provided, snapshot) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                        >
                          <TaskItem task={item} />
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>

            {/* review */}
            <Droppable droppableId="reviewTasks">
              {(provided, snapshot) => (
                <div
                  style={{
                    backgroundColor: dark
                      ? theme.colors.grey900[1]
                      : theme.colors.white[4],
                    border: dark
                      ? "none"
                      : "1px solid var(--mantine-color-grey300-4)",
                  }}
                  ref={provided.innerRef}
                  className="tasks"
                >
                  <div
                    style={{
                      backgroundColor: dark
                        ? theme.colors.grey900[8]
                        : theme.colors.grey300[1],
                    }}
                    className="mt-0 task-header"
                  >
                    <h5>
                      Review
                      <span> ({state.reviewTasks.length})</span>
                    </h5>
                    <Tooltip label="Add New Review Task">
                      <i
                        id="addNewTodo"
                        onClick={() => newTask("Pending", "todoTasks")}
                      >
                        <IconPlus size={18} />
                      </i>
                    </Tooltip>
                  </div>

                  {state.reviewTasks.length === 0 && (
                    <p className="notasks">No Tasks</p>
                  )}

                  {state.reviewTasks.map((item, index) => (
                    <Draggable
                      key={item.id}
                      draggableId={item.id + ""}
                      index={index}
                    >
                      {(provided, snapshot) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                        >
                          <TaskItem task={item} />
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>

            {/* done */}
            <Droppable droppableId="doneTasks">
              {(provided, snapshot) => (
                <div
                  style={{
                    backgroundColor: dark
                      ? theme.colors.grey900[1]
                      : theme.colors.white[4],
                    border: dark
                      ? "none"
                      : "1px solid var(--mantine-color-grey300-4)",
                  }}
                  ref={provided.innerRef}
                  className="tasks"
                >
                  <div
                    style={{
                      backgroundColor: dark
                        ? theme.colors.grey900[8]
                        : theme.colors.grey300[1],
                    }}
                    className="mt-0 task-header"
                  >
                    <h5>
                      Done
                      <span> ({state.doneTasks.length})</span>
                    </h5>
                    <Tooltip label="Add New Done Task">
                      <i
                        id="addNewTodo"
                        onClick={() => newTask("Pending", "todoTasks")}
                      >
                        <IconPlus size={18} />
                      </i>
                    </Tooltip>
                  </div>

                  {state.doneTasks.length === 0 && (
                    <p className="notasks">No Tasks</p>
                  )}

                  {state.doneTasks.map((item, index) => (
                    <Draggable
                      key={item.id}
                      draggableId={item.id + ""}
                      index={index}
                    >
                      {(provided, snapshot) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                        >
                          <TaskItem task={item} />
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </div>
        </DragDropContext>

        {/* add new task modal */}
        {newTaskModal && (
          <AddNewTask
            newTaskModal={newTaskModal}
            toggleNewTaskModal={toggleNewTaskModal}
            handleNewTask={handleNewTask}
            handleSubmit={handleSubmit}
            newTaskDetails={newTaskDetails}
            handleDateChange={handleDateChange}
            register={register}
            errors={errors}
            control={control}
          />
        )}
      </Box>
    </Layout>
  );
};

export default Kanban;
