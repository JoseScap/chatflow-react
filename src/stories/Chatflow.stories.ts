// src/components/ChatflowButton.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import ChatflowButtonWrapper from '../storybook-components/ChatflowWrapper';
import Chatflow from '../components/Chatflow';

// Configuración de la historia
const meta: Meta<typeof Chatflow> = {
  title: 'Components/ChatflowButton',  // Nombre que aparecerá en Storybook
  component: ChatflowButtonWrapper,           // El componente que se va a mostrar
  parameters: {
    layout: 'fullscreen',                // Centrar el componente en el Canvas
  },
  tags: ['autodocs'],                  // Etiquetas opcionales para Autodocs
  args: {},                            // Argumentos predeterminados
} satisfies Meta<typeof Chatflow>;

export default meta;

type Story = StoryObj<typeof meta>;

// Historia de la versión por defecto
export const Default: Story = {
  args: {},  // Puedes agregar argumentos si el componente tiene props
};
