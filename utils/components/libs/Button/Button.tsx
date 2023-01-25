import { Button as MtButton } from '@mantine/core';
import { ComponentProps } from 'react';
import React from 'react';

type Props = Omit<ComponentProps<typeof MtButton>, 'sx'>;
export const Button = (props: Props) => {
  return (
    <MtButton
      sx={(theme) => ({
        backgroundColor: '#426782',
        color: '#fff',
        '&:hover': {
          backgroundColor: theme.fn.darken('#4267B2', 0.1),
        },
      })}
      {...props}
    />
  );
};
