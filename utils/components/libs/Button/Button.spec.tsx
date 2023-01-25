import { MantineProvider } from '@mantine/core';
import { render } from '@testing-library/react';
import { Button } from './Button';

test('render DOM', () => {
  const view = render(
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <Button>Button</Button>
    </MantineProvider>
  );
  expect(view.container).toMatchSnapshot();
});
