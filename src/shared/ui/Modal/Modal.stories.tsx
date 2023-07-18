import type {ComponentMeta, ComponentStory} from '@storybook/react';
import {Modal} from "shared/ui/Modal/Modal";

export default {
    title: 'shared/Modal',
    component: Modal,
    argTypes: {
        backgroundColor: {control: 'color'},
    },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args}/>

export const Primary = Template.bind({})
Primary.args = {
    isOpen: true,
    children: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci distinctio esse et eveniet libero\n' +
        '                    magni maiores modi, molestiae nisi obcaecati omnis quae, veniam veritatis. Cupiditate ea, error esse\n' +
        '                    harum nisi quos velit! Adipisci, expedita ipsa laudantium nostrum officiis placeat sequi ut. Alias\n' +
        '                    aliquid blanditiis necessitatibus placeat quos reiciendis voluptates. Quidem!'
};
