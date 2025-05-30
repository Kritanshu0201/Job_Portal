import { useState } from "react";
import fields from "../Data/Profile";
import SelectInput from "./SelectInput";
import { Button, Checkbox, Textarea } from "@mantine/core";
import { MonthPickerInput } from "@mantine/dates";

const ExpInput = (props:any) => {
    const [checked, setChecked] = useState(false)
    const[startDate, setStartDate] =  useState<Date | null>(new Date());
    const[endDate, setEndDate] =  useState<Date | null>(new Date());
  const select = fields;
  const [desc, setDesc] = useState(
    "A Software Engineer designs, develops, tests, and maintains software applications and systems. They write code in various programming languages, troubleshoot issues, and optimize performance. Software engineers work in diverse fields, including web development, cybersecurity, AI, and cloud computing. They collaborate with teams to build scalable and efficient solutions while following best practices in coding and software architecture. Strong problem-solving skills, logical thinking, and adaptability are essential. Continuous learning is crucial as technology evolves rapidly, requiring engineers to stay updated with new tools and trends."
  )
  return (
    <div className="flex flex-col gap-3">
      <div className="text-lg font-semibold">{props.add?"Add":"Edit"} Experience</div>
      <div className="flex gap-10 [&>*]:w-1/2">
        <SelectInput {...select[0]} />
        <SelectInput {...select[1]} />
      </div>
      <SelectInput {...select[2]} />
      <Textarea withAsterisk
        label="Summary"
        autosize
        minRows={3}
        placeholder="Enter Summary..."
        value={desc}
        onChange={(event) => setDesc(event.currentTarget.value)}
      />
        <div className="flex gap-10 [&>*]:w-1/2">
        <MonthPickerInput withAsterisk
        maxDate={endDate || undefined}
      label="Start Date"
      placeholder="Pick date"
      value={startDate}
      onChange={setStartDate}
    />
        
        <MonthPickerInput withAsterisk
        disabled={checked}
        minDate={startDate || undefined}
        maxDate={new Date()}
      label="End Date"
      placeholder="Pick date"
      value={endDate}
      onChange={setEndDate}
    />
        </div>
        <Checkbox autoContrast checked={checked} onChange={(event) => setChecked(event.currentTarget.checked)} label="Currently working here"/>
      <div className="flex gap-5">
              <Button onClick={()=> props.setEdit(false)} color="brightSun.4" variant="outline">Save</Button>
              <Button onClick={()=> props.setEdit(false)} color="red.8" variant="light">Cancel</Button>
    </div>
    </div>
  );
};

export default ExpInput;
