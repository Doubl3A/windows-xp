import type {Meta, StoryObj} from "@storybook/react";
import Separator from "./Separator.tsx";

const meta = {
    title: "Atoms/Separator",
    component: Separator,
    tags: ["autodocs"],
    parameters: {
        layout: "centered",
    },
    argTypes: {},
    args: {
        variant: "light"
    },
    render: (args) => <div style={{width: "400px"}}><Separator {...args} /></div>,
}satisfies Meta<typeof Separator>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        variant: "light"
    },
}

export const Dark: Story = {
    args: {
        variant: "dark"
    },
};

export const Orange: Story = {
    args: {
        variant: "orange",
    }
}

