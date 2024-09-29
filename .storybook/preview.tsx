import "../src/style/style.scss"
import type {Preview} from "@storybook/react";
import DesktopEnvironmentProvider from "../src/context/DesktopEnvironmentContextType.tsx";

const preview: Preview = {
    parameters: {
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
    },
    decorators: (Story) => (<DesktopEnvironmentProvider>{Story()}</DesktopEnvironmentProvider>)
};

export default preview;
