import type { Meta, StoryObj } from "@storybook/react"

import { Button } from "./button"

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: "Example/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    label: "Primary Button",
  },
}

export const Secondary: Story = {
  args: {
    variant: "secondary",
    label: "secondary Button",
  },
}

export const Large: Story = {
  args: {
    size: "lg",
    label: "Large Button",
  },
}

export const Small: Story = {
  args: {
    size: "sm",
    label: "Small Button",
  },
}
