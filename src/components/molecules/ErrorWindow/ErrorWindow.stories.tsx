import type {Meta, StoryObj} from "@storybook/react";
import ErrorWindow from "./ErrorWindow.tsx";

const meta = {
    title: "Molecules/Error Window",
    component: ErrorWindow,
    tags: ["autodocs"],
    parameters: {
        layout: "centered",
    },
    argTypes: {},
    args: {},
}satisfies Meta<typeof ErrorWindow>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        appInfo: {
            name: "Discord",
            iconUrl: ""
        },
        handleClose: () => null,
    },
};
