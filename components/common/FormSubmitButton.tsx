import React from 'react';
import styled from 'styled-components';

const SubmitButton = styled.button`
  display: block;
  border-radius: 5px;
  padding: 10px 15px;
  color: #fff;
  background-color: var(--main-color);
  transition: background-color .2s;
  margin: ${(props: { buttonMargin: string }) => props.buttonMargin};

  &:hover {
    background-color: var(--main-color-bold);
  }
`;

interface FormSubmitButtonProps {
  buttonText: string,
  margin: string
}

function FormSubmitButton({ buttonText, margin }: FormSubmitButtonProps) {
  return (
    <SubmitButton type="submit" buttonMargin={margin}>
      {buttonText}
    </SubmitButton>
  );
}

export default FormSubmitButton;
