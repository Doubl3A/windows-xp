import type {Meta, StoryObj} from "@storybook/react";
import StartButton from "./StartButton.tsx";

const meta = {
    title: "Desktop/Start button",
    component: StartButton,
    tags: ["autodocs"],
    parameters: {
        layout: "centered",
    },
    argTypes: {},
    args: {}
}satisfies Meta<typeof StartButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {}
};
