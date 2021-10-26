import React, { useState } from "react";

import {
  Container,
  Back,
  Head,
  FormInput,
  Button,
  Collection,
  EmojiPicker,
} from "./styles";

import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import Twemoji from "react-twemoji";
import Select from "react-select";

function NewCollection({}) {
  const [nomeColecao, setNomeColecao] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const emojiOptions = [
    { label: "🎨", value: "🎨" },
    { label: "📰", value: "📰" },
    { label: "🦠", value: "🦠" },
    { label: "📝", value: "📝" },
    { label: "🧲", value: "🧲" },
    { label: "🌍", value: "🌍" },
    { label: "📚", value: "📚" },
    { label: "📜", value: "📜" },
    { label: "🚀", value: "🚀" },
    { label: "🔢", value: "🔢" },
    { label: "🎻", value: "🎻" },
    { label: "🖊", value: "🖊" },
    { label: "⚗️", value: "⚗️" },
    { label: "😁", value: "😁" },
  ];

  return (
    <Container>
      <Back to="/collections">
        <ChevronLeftIcon /> Voltar
      </Back>
      <Head>
        <h1>Nova Coleção</h1>
      </Head>
      <form onSubmit={handleSubmit}>
        <FormInput>
          <label>Nome da Coleção</label>
          <input type="text" />
        </FormInput>
        <FormInput>
          <label>Categoria</label>
          <select>
            <option selected disabled>
              Selecione uma opção...
            </option>
            <option>Artes Visuais</option>
            <option>Atualidades</option>
            <option>Espanhol</option>
            <option>Filosofia</option>
            <option>Física</option>
            <option>Geografia</option>
            <option>Gramática</option>
            <option>História</option>
            <option>Inglês</option>
            <option>Matemática</option>
            <option>Música</option>
            <option>Química</option>
            <option>Outro</option>
          </select>
        </FormInput>
        <FormInput>
          <label>
            Descrição <span>(opcional)</span>
          </label>
          <textarea />
        </FormInput>
        <Button>Salvar</Button>
      </form>
      <aside>
        <p>Prévia</p>
        <Collection color={"#B8E8FD"}>
          <div className="front">
            <Twemoji>🏀</Twemoji>
          </div>
          <div className="back"></div>
        </Collection>
        <EmojiPicker>
          <p>Emoji da Capa:</p>
          <Select options={emojiOptions} />
        </EmojiPicker>
      </aside>
    </Container>
  );
}

export default NewCollection;
