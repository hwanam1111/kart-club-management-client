import React, { useCallback, useRef } from 'react';
import { AiOutlineCheck } from 'react-icons/ai';
import styled from 'styled-components';

const LabelInputWrapper = styled.div`
  position: relative;
  margin-bottom: 30px;
  text-align: left;

  &:last-child {
    margin-bottom: 0;
  }
`;

const Label = styled.label`
  font-size: 0.9rem;
  color: #181c32;
  font-weight: 600;
  margin-left: 3px;
`;

const InputBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  border: 1px solid #f5f8fa;
  border-radius: 5px;
  padding: 0 10px;
  margin-top: 7px;
  background-color: #f5f8fa;
  transition: background-color .2s ease;

  &.focus {
    transition: 0.2s;
    border-color: #d8d8d8;
  }
`;

const Input = styled.input`
  width: 100%;
  border: 0;
  outline: 0;
  border-radius: 5px;
  font-size: 1rem;
  padding: 15px 0;
  color: #5e6278;
  background-color: unset;
    

  &::placeholder {
    color: #9296a7;
  }
`;

const VerifyMessage = styled.span`
  display: block;
  margin-top: 7px;
  color: var(--error);
  font-size: 0.8rem;
`;

const CompleteIcon = styled.i`
  color: var(--main-color);
  font-size: 1.1rem;
`;

interface LabelInputProps {
  label: string,
  type: string,
  inputLabel: string,
  placeholder: string,
  value: string,
  onChange: (evt: React.ChangeEvent<HTMLInputElement>) => void,
  verifyMessage: string,
  maxLength: number,
}

function LabelInput({ label, type, inputLabel, placeholder, value, onChange, verifyMessage, maxLength }: LabelInputProps) {
  const inputFocusRef = useRef<HTMLInputElement>();

  const onFocusInput = useCallback((): void => {
    inputFocusRef.current.classList.add('focus');
  }, []);

  const onBlurInput = useCallback((): void => {
    inputFocusRef.current.classList.remove('focus');
  }, []);

  return (
    <LabelInputWrapper>
      <Label>{label}</Label>
      <InputBox ref={inputFocusRef}>
        <Input
          type={type}
          data-label={inputLabel}
          placeholder={placeholder}
          onChange={onChange}
          value={value}
          maxLength={maxLength}
          onFocus={onFocusInput}
          onBlur={onBlurInput}
          autoComplete="on"
        />
        {verifyMessage === 'complete' && <CompleteIcon><AiOutlineCheck /></CompleteIcon>}
      </InputBox>
      {verifyMessage !== 'complete' && <VerifyMessage>{verifyMessage}</VerifyMessage>}
    </LabelInputWrapper>
  );
}

export default LabelInput;
