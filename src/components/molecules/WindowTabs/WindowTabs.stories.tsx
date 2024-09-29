import type {Meta, StoryObj} from "@storybook/react";
import WindowTabs from "./WindowTabs.tsx";

const meta = {
    title: "Molecules/Window Tabs",
    component: WindowTabs,
    tags: ["autodocs"],
    parameters: {
        layout: "centered",
    },
    argTypes: {},
    args: {
        applications: [
            {
                name: "Minesweeper",
                iconUrl: "/icons/applications/minesweeper.png"
            },
            {
                name: "Internet Explorer",
                iconUrl: "/icons/applications/internet-explorer.png",
                isFocused: true
            },
        ]
    },
}satisfies Meta<typeof WindowTabs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

