import { Button, TextInput } from "@mantine/core"
import SelectInput from "./SelectInput"
import { fields } from "../Data/PostJob"
import { MonthPickerInput } from "@mantine/dates";
import { useState } from "react";

const CertiInput = (props:any) => {
    const [IssueDate, setIssueDate] = useState<Date | null>(new Date());
    const select = fields;
  return (
    <div className="flex flex-col gap-3">
      <div className="text-lg font-semibold">Add Certificate</div>
      <div className="flex gap-10 [&>*]:w-1/2">
        {/* <SelectInput {...select[0]} />
        <SelectInput {...select[1]} /> */}
         <TextInput
      label="Title"
      withAsterisk
      placeholder="Enter Title"
    />
     <div className="flex gap-10 [&>*]:w-1/2">
            <MonthPickerInput withAsterisk
            maxDate={new Date() || undefined}
          label="Issue Date"
          placeholder="Pick Date"
          value={IssueDate}
          onChange={setIssueDate}
        />
        <TextInput
      label="Certificate ID"
      withAsterisk
      placeholder="Enter ID"
    />
    </div>
     <SelectInput {...select[1]} /> 
      </div>
       <div className="flex gap-5">
              <Button onClick={()=> props.setEdit(false)} color="brightSun.4" variant="outline">Save</Button>
              <Button onClick={()=> props.setEdit(false)} color="red.8" variant="light">Cancel</Button>
    </div>
    </div>
  )
}

export default CertiInput
