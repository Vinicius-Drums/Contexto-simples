import React, { useState } from "react";
import { useTema } from "./components/Contextotema";
import "./App.css";
import ImagemVirada from "./Imagem/Virada23-24.jpeg";

const App: React.FC = () => {
  // Obtém o tema e a função para alternar o tema do contexto
  const { tema, alternarTema } = useTema();

  // Estados locais para o nome, status do envio e erro de envio
  const [nome, setNome] = useState("");
  const [nomeEnviado, setNomeEnviado] = useState(false);
  const [erroEnvio, setErroEnvio] = useState("");

  // Função para lidar com o envio do formulário
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (nome.trim() === "") {
      setErroEnvio("Insira seu nome antes de enviar.");
      return;
    }

    setErroEnvio("");
    console.log("Nome enviado:", nome);
    setNomeEnviado(true);
  };

  // Aplicar a classe de tema diretamente ao corpo do documento
  document.body.className = tema;

  return (
    <div className={`app ${tema}`}>
      <h1> ♫ Seja bem-vindo ao nosso evento ♫</h1>
      <img src={ImagemVirada} alt="Virada 23-24" className="foto" />

      <div className="conteudo">
        <p>Envie seu nome para a lista de convidados</p>

        <div className="formulario">
          {nomeEnviado ? (
            <p className="mensagem-sucesso">
              Nome enviado com sucesso! Obrigado!
            </p>
          ) : (
            <form onSubmit={handleSubmit}>
              <label>
                Nome:
                <input
                  type="text"
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
                />
              </label>

              {erroEnvio && <p className="mensagem-erro">{erroEnvio}</p>}

              <button type="submit" className="botao-enviar">
                👆🏻 Enviar Nome 👆🏻
              </button>
            </form>
          )}
        </div>

        {/* Botão para alternar entre temas */}
        <button className="botao-alternar-tema" onClick={alternarTema}>
          ☾ Alternar Tema ☾
        </button>
      </div>
    </div>
  );
};

export default App;
