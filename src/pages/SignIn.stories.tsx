import { Meta, StoryObj } from '@storybook/react'
import { SignIn} from './SignIn'
import { within, userEvent, waitFor} from "@storybook/testing-library"
import { expect } from '@storybook/jest'
import { rest } from "msw"

export default {
    title: 'Pages/Sign in',
    component: SignIn,
    args: {},
    argTypes: {},
    parameters: {
        msw: {
            handlers: [
                rest.post('/sessions', (req, res, ctx) => {
                    return res(ctx.json({
                        message: 'Login realizado!'
                    }))
                })
            ]
        }
    }
} as Meta

    export const Defaut: StoryObj = {
        play: async ({ canvasElement })=> {
            const canvas = within(canvasElement)

            userEvent.type(canvas.getByPlaceholderText("Digite seu e-mail"), "priscillatrevizan.dev@gmail.com" )
            userEvent.type(canvas.getByPlaceholderText("**********"), "teste56789" )

            userEvent.click(canvas.getByRole("button"))

            await waitFor(() => {
                return expect(canvas.getByText('Login realizado!')).toBeInTheDocument()
        })        
    }
}


