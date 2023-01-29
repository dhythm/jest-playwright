import { MantineProvider } from '@mantine/core';
import { TextInput } from './TextInput';
import { test, expect } from './baseFixtures';

test('render component', async ({ mount, page }) => {
  await mount(
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <TextInput />
    </MantineProvider>
  );
  await expect(page).toHaveScreenshot();
});
