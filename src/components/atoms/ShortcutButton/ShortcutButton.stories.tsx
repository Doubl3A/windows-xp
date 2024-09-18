import type {Meta, StoryObj} from "@storybook/react";
import ShortcutButton from "./ShortcutButton.tsx";

const meta = {
    title: "Atoms/Shortcut Button",
    component: ShortcutButton,
    tags: ["autodocs"],
    parameters: {
        layout: "centered",
    },
    argTypes: {},
    args: {
        title: "Internet",
        description: "Internet Explorer",
        size: "default",
        iconUrl: "/icons/applications/internet-explorer.png"
    },
}satisfies Meta<typeof ShortcutButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

