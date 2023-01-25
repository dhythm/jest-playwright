import { MantineProvider } from '@mantine/core';
import { expect } from '@playwright/experimental-ct-react';
import { TextInput } from './TextInput';
import { test } from "@test"

test('render component', async ({ mount, page }) => {
  await mount(
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <TextInput />
    </MantineProvider>
  );
  await expect(page).toHaveScreenshot();
});
