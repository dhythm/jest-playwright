import { MantineProvider } from '@mantine/core';
import { test, expect } from '@playwright/experimental-ct-react';
import { TextInput } from './TextInput';

test('render component', async ({ mount, page }) => {
  await mount(
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <TextInput />
    </MantineProvider>
  );
  await expect(page).toHaveScreenshot();
});
