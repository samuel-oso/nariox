import { useState } from "react";
import { DateRangePicker } from "@mantine/dates";

function DatePicker() {
  const [value, setValue] = useState<[Date | null, Date | null]>([
    new Date(2022, 1, 1),
    new Date(2021, 30, 1),
  ]);

  return (
    <DateRangePicker
      placeholder="Pick dates range"
      value={value}
      onChange={setValue}
      inputFormat="DD/MM/YYYY"
    />
  );
}

export default DatePicker;
