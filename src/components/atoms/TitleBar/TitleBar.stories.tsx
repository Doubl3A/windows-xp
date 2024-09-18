import type {Meta, StoryObj} from "@storybook/react";
import TitleBar, {TitleBarProps} from "./TitleBar.tsx";

const defaultProps: TitleBarProps = {
    windowName: "Failed to open Discord",
    handleMinimize: () => null,
    handleExpand: () => null,
    handleClose: () => null,
}

const meta = {
    title: "Atoms/Title Bar",
    component: TitleBar,
    tags: ["autodocs"],
    parameters: {
        layout: "centered",
    },
    args: {
        windowName: "tester"
    },
}satisfies Meta<typeof TitleBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        windowName: "Failed to open Discord",
    },
    decorators: () => (
        <div style={{display: "grid", rowGap: "1rem"}}>
            <TitleBar windowName={defaultProps.windowName}
                      handleClose={defaultProps.handleClose}/>
            <TitleBar windowName={defaultProps.windowName}
                      handleExpand={defaultProps.handleExpand}
                      handleClose={defaultProps.handleClose}/>
            <TitleBar windowName={defaultProps.windowName}
                      handleMinimize={defaultProps.handleMinimize}
                      handleExpand={defaultProps.handleExpand}
                      handleClose={defaultProps.handleClose}/>
        </div>
    )
};
