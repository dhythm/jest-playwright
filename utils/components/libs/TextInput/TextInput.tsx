import { TextInput as MtTextInput } from '@mantine/core';
import { ComponentProps } from 'react';
import React from 'react';

type Props = ComponentProps<typeof MtTextInput>;
export const TextInput = (props: Props) => {
  return (
    <MtTextInput
      radius="xl"
      size="md"
      placeholder="Search questions"
      {...props}
    />
  );
};
