import { v4 } from "uuid";

import { ChatFlow } from "../types";

const welcomeId = v4();
const studentId = v4();
const interestedId = v4();
const notFoundId = v4();

export const welcomeFlow: ChatFlow = {
  id: welcomeId,
  name: "Welcome",
  messages: [
    {
      id: v4(),
      text: "¡Bienvenido a la universidad! Soy el asistente virtual. Si necesitas ayuda, te mostraré el menú.",
      sender: "Bot",
      type: "Text",
      nextFlowId: null,
    },
    {
      id: v4(),
      text: "Aquí tienes el menú:",
      sender: "Bot",
      type: "Text",
      nextFlowId: null,
    },
    {
      id: v4(),
      text: "Soy estudiante",
      sender: "Bot",
      type: "Action",
      nextFlowId: studentId,
    },
    {
      id: v4(),
      text: "Soy interesado",
      sender: "Bot",
      type: "Action",
      nextFlowId: interestedId,
    },
  ],
};

const studentFlow: ChatFlow = {
  id: studentId,
  name: "Student",
  messages: [
    {
      id: v4(),
      text: "¡Genial! Eres estudiante. ¿En qué puedo ayudarte?",
      sender: "Bot",
      type: "Text",
      nextFlowId: null,
    },
    {
      id: v4(),
      text: "Consultar mi horario",
      sender: "Bot",
      type: "Action",
      nextFlowId: null,
    },
    {
      id: v4(),
      text: "Consultar mi matrícula",
      sender: "Bot",
      type: "Action",
      nextFlowId: null,
    },
  ],
};

const interestedFlow: ChatFlow = {
  id: interestedId,
  name: "Interested",
  messages: [
    {
      id: v4(),
      text: "¡Gracias por tu interés! ¿Cómo te gustaría obtener más información?",
      sender: "Bot",
      type: "Text",
      nextFlowId: null,
    },
    {
      id: v4(),
      text: "Ver programas académicos",
      sender: "Bot",
      type: "Action",
      nextFlowId: null,
    },
    {
      id: v4(),
      text: "Conocer los requisitos de inscripción",
      sender: "Bot",
      type: "Action",
      nextFlowId: null,
    },
  ],
};

export const notFoundFlow: ChatFlow = {
  id: notFoundId,
  name: "NotFound",
  messages: [
    {
      id: v4(),
      text: "No encontré flujo",
      sender: "Bot",
      type: "Text",
      nextFlowId: null,
    },
  ],
};

export const chatFlows: ChatFlow[] = [welcomeFlow, studentFlow, interestedFlow];
