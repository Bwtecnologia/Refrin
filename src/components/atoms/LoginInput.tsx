
import React, { useState } from 'react';

interface LoginInputProps {
  label: string;
  onChange: (value: string) => void;
  type:string
}

function LoginInput(props: LoginInputProps) {
  const [value, setValue] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
    props.onChange(event.target.value);
  };

  return (
      <input
        placeholder={props.label}
        type={props.type}
        value={value}
        onChange={handleChange}
        className="border-[2px] rounded-[10px] h-[50px] w-[100%] placeholder:pl-[10px] "
      />

  );
}

export default LoginInput;