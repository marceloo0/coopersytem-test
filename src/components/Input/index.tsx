import React, {useState, useEffect, useRef, useCallback} from 'react';
import {TextInputProps} from 'react-native';
import {useField} from '@unform/core';

import {useAction} from '../../hooks/action';

import formatValue from '../../utils/formatalue';
import {maskCurrency, maskCurrencyNumber} from '../../utils/mask';
import {Container, TextInput, Text, Error} from './styles';

interface Acoes {
  id: string;
  nome: string;
  percentual: number;
}

interface InputProps extends TextInputProps {
  name: string;
  total: number;
  acao: Acoes;
}

interface InputValueReference {
  value: string;
}

const Input: React.FC<InputProps> = ({name, acao, total, ...rest}) => {
  const inputElementRef = useRef<any>(null);

  const {registerField, defaultValue = '', fieldName} = useField(name);
  const inputValueRef = useRef<InputValueReference>({value: defaultValue});

  const [isFocused, setIsFocused] = useState(false);
  // const [isFilled, setIsFilled] = useState(false);

  const [valueInput, setValueInput] = useState('');
  const [error, setError] = useState(false);

  const {updateActions} = useAction();

  useEffect(() => {
    registerField<string>({
      name: fieldName,
      ref: inputValueRef.current,
      path: 'value',
      setValue(_ref: any, value) {
        inputValueRef.current.value = value;
        inputElementRef.current.setNativeProps({text: value});
      },
      clearValue() {
        inputValueRef.current.value = '';
        inputElementRef.current.clear();
      },
    });
  }, [fieldName, registerField]);

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);

    // setIsFilled(!!value);
  }, []);

  const onChangeValue = useCallback(
    (text) => {
      const valor = maskCurrency(text);
      inputValueRef.current.value = text;
      setValueInput(valor);

      if (maskCurrencyNumber(text) > total) {
        setError(true);
      } else {
        setError(false);
      }

      updateActions({...acao, valor: maskCurrencyNumber(text)});
    },
    [total, updateActions, acao],
  );

  return (
    <Container testID="price-input">
      <Text isFocused={isFocused}>Valor a resgatar</Text>
      <TextInput
        ref={inputElementRef}
        placeholderTextColor="#757575"
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        value={valueInput}
        type={'money'}
        onChangeText={(text) => onChangeValue(text)}
        {...rest}
      />
      {error && (
        <Error>O valor não pode ser maior que {formatValue(total)}</Error>
      )}
    </Container>
  );
};

export default Input;
