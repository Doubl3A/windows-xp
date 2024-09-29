import type {Meta, StoryObj} from "@storybook/react";
import WindowTab from "./WindowTab.tsx";

const meta = {
    title: "Atoms/Window Tab",
    component: WindowTab,
    tags: ["autodocs"],
    parameters: {
        layout: "centered",
    },
    argTypes: {},
    args: {
        name: "Minesweeper",
        iconUrl: "/icons/applications/minesweeper.png"
    }
}satisfies Meta<typeof WindowTab>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {}


export const AllVariants: Story = {
    args: {
        name: "Minesweeper",
        iconUrl: "/icons/applications/minesweeper.png"
    },
    render: (args) => {
        return (
            <div style={{display: "grid", columnGap: "1rem", gridTemplateColumns: "1fr 1fr"}}>
                <WindowTab name={args.name} iconUrl={args.iconUrl}/>
                <WindowTab name={args.name} iconUrl={args.iconUrl} isFocused={true}/>
            </div>
        )
    }
};

