import { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { EventInput } from "@fullcalendar/core";
import { Button, Input, Modal, Select } from "@mantine/core";
// import FormInput from "../../components/FormInput";

interface AddEditEventProps {
  isOpen: boolean;
  onClose: () => void;
  isEditable?: boolean;
  eventData: EventInput;
  onRemoveEvent?: () => void;
  onUpdateEvent: (value: any) => void;
  onAddEvent: (value: any) => void;
}

const AddEditEvent = ({
  isOpen,
  onClose,
  isEditable,
  eventData,
  onRemoveEvent,
  onUpdateEvent,
  onAddEvent,
}: AddEditEventProps) => {
  // Event State
  const [event] = useState<EventInput>(eventData!);

  // Form Validation Schema
  const schemaResolver = yupResolver(
    yup.object().shape({
      title: yup.string().required("Please enter event name"),
      className: yup.string().required("Please select category"),
    })
  );

  //   Form methods
  const methods = useForm({ defaultValues: event, resolver: schemaResolver });
  const {
    handleSubmit,
    // register,
    // control,
    // formState: { errors },
  } = methods;

  //   Handle form submission
  const onSubmitEvent = (data: {}) => {
    isEditable ? onUpdateEvent(data) : onAddEvent(data);
  };

  return (
    <>
      <Modal
        opened={isOpen}
        onClose={onClose}
        title={
          <h5 className="text-sm font-medium">
            {isEditable ? "Edit Event" : "Add New Event"}
          </h5>
        }
      >
        <div>
          <form
            noValidate
            name="chat-form"
            className="modalForm"
            onSubmit={handleSubmit(onSubmitEvent)}
          >
            <div className="mt-6">
              <Input.Wrapper label="Event Name">
                <Input
                  type="text"
                  name="title"
                  className="modalInput"
                  placeholder="Insert Event Name"
                  // register={register}
                  key="title"
                  // errors={errors}
                  // control={control}
                />
              </Input.Wrapper>
            </div>
            <div className="mt-6">
              <Select
                type="select"
                label="Category"
                name="className"
                className="modalSelect flex flex-col"
                // register={register}
                key="className"
                data={[]} // errors={errors}
                // control={control}
              >
                <option value="bg-danger">Danger</option>
                <option value="bg-success">Success</option>
                <option value="bg-primary">Primary</option>
                <option value="bg-warning">Warning</option>
              </Select>
            </div>
            <div className="flex items-center justify-between mt-5">
              <div>
                {isEditable ? (
                  <Button className="btn modalDelete" onClick={onRemoveEvent}>
                    Delete
                  </Button>
                ) : null}
              </div>
              <div className="flex gap-2">
                <Button className="btn modalClose" onClick={onClose}>
                  Close
                </Button>
                <Button className="btn modalSave" type="submit">
                  Save
                </Button>
              </div>
            </div>
          </form>
        </div>
      </Modal>
    </>
  );
};

export default AddEditEvent;
