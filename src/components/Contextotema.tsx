import React, { createContext, useContext, useState, ReactNode } from "react";

// Definição dos tipos de tema
type Tema = "claro" | "escuro";

// Definição do tipo para o contexto de tema
type ContextoTemaType = {
  tema: Tema;
  alternarTema: () => void;
};

// Criação do contexto de tema
const ContextoTema = createContext<ContextoTemaType | undefined>(undefined);

// Definição do tipo de propriedades para o provedor de tema
type ProvedorTemaProps = {
  children: ReactNode;
};

// Provedor de tema, utilizado para fornecer o contexto de tema para a aplicação
export const ProvedorTema: React.FC<ProvedorTemaProps> = ({ children }) => {
  // Estado inicial do tema, começando com "claro"
  const [tema, setTema] = useState<Tema>("claro");

  // Função para alternar o tema entre "claro" e "escuro"
  const alternarTema = () => {
    setTema((prevTema) => (prevTema === "claro" ? "escuro" : "claro"));
  };

  // Retorna o provedor de tema com o valor do contexto
  return (
    <ContextoTema.Provider value={{ tema, alternarTema }}>
      {children}
    </ContextoTema.Provider>
  );
};

// Hook personalizado para facilitar o acesso ao contexto de tema
export const useTema = () => {
  // Obtém o contexto de tema
  const contexto = useContext(ContextoTema);
  // Se o contexto não existir, lança um erro
  if (!contexto) {
    throw new Error("useTema deve ser usado dentro de um ProvedorTema");
  }
  // Retorna o contexto de tema
  return contexto;
};
