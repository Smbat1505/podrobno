import {ChangeEvent, useState} from "react";

export const CheckBox = () => {
  const [parentValue, setParentValue] = useState(false);
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setParentValue(e.currentTarget.checked)
  }
  return (
      <input type='checkbox' checked={parentValue} onChange={onChange}/>
  )
}