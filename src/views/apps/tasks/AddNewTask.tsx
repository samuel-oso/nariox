import { Row, Col } from "react-bootstrap";
import { UseFormHandleSubmit, FieldErrors, Control } from "react-hook-form";
import "../../../styles/components/Tasks.css";

// components
import FormInput from "../../../components/contexts/FormInput";
import { DatePicker } from "@mantine/dates";
import { Modal, Button, Group, Grid } from "@mantine/core";

interface AddNewTaskProps {
  newTaskModal: boolean;
  toggleNewTaskModal: () => void;
  handleNewTask: (values: any) => void;
  handleSubmit: UseFormHandleSubmit<any>;
  newTaskDetails: any;
  handleDateChange: (date: Date) => void;
  errors: FieldErrors;
  control?: Control<any>;
  register?: any;
}

const AddNewTask = ({
  newTaskModal,
  toggleNewTaskModal,
  handleNewTask,
  handleSubmit,
  newTaskDetails,
  handleDateChange,
  register,
  errors,
  control,
}: AddNewTaskProps) => {
  return (
    <Modal
      opened={newTaskModal}
      onClose={toggleNewTaskModal}
      size="lg"
      centered
      title={<h4 className="modal-title">Create New Task</h4>}
    >
      <form onSubmit={handleSubmit(handleNewTask)}>
        <FormInput
          name="title"
          label="Title"
          placeholder="Enter title"
          type="text"
          containerClass="taskList_modalInput"
          register={register}
          key="title"
          errors={errors}
          control={control}
        />

        <FormInput
          name="description"
          label="Description"
          type="textarea"
          containerClass="taskList_modalInput"
          rows="3"
          register={register}
          key="description"
          errors={errors}
          control={control}
        />

        <Grid>
          <Grid.Col md={6}>
            <FormInput
              name="priority"
              label="Priority"
              type="select"
              containerClass="taskList_modalInput"
              register={register}
              key="priority"
              errors={errors}
              control={control}
              defaultValue="High"
            >
              <option value="Low">Low</option>
              <option value="Medium">Medium</option>
              <option value="High">High</option>
            </FormInput>
          </Grid.Col>
          <Grid.Col md={6}>
            <div className="taskListModal_datepicker">
              <label>Due Date</label> <br />
              <DatePicker
                placeholder="Pick date"
                inputFormat="DD/MM/YYYY"
                labelFormat="MM/YYYY"
                value={newTaskDetails.dueDate}
                onChange={handleDateChange}
              />
            </div>
          </Grid.Col>
        </Grid>

        <div className="taskListModal_btns">
          <Button variant="light" className="me-1" onClick={toggleNewTaskModal}>
            Cancel
          </Button>
          <Button variant="filled" type="submit">
            Create
          </Button>
        </div>
      </form>
    </Modal>
  );
};

export default AddNewTask;
