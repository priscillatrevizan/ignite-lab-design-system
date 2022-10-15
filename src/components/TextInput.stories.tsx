import { Meta, StoryObj } from '@storybook/react'
import{ Envelope } from 'phosphor-react'
import { TextInput, TextInputInputProps, TextInputRootProps } from './TextInput'

export default {
    title: 'Components/TextImput',
    component: TextInput.Root,
    args: {
        children: [
          <TextInput.Icon>
                <Envelope/>
            </TextInput.Icon>,
            <TextInput.Input placeholder="Type your e-mail address" />
        ],
        },
argTypes: {
    children: {
      table: {
        disable: true,
            }
        },}
} as Meta<TextInputRootProps>

export const Defaut: StoryObj<TextInputRootProps> = {}

export const WithoutIcon: StoryObj<TextInputRootProps> = {
    args: {
        children: <TextInput.Input placeholder="Type your e-mail address" />
    }
}

