import React, { useState } from "react";
import { createCollection } from "../../services/DataStorage";

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
import { useHistory } from "react-router-dom";

function NewCollection({}) {
  const [nomeColecao, setNomeColecao] = useState("");
  const [categoriaColecao, setCategoriaColecao] = useState("");
  const [descricaoColecao, setDescricaoColecao] = useState("");
  const [emojiColecao, setEmojiColecao] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    create();
  };

  const create = () => {
    createCollection({
      name: nomeColecao,
      categoriaColecao: categoriaColecao,
      descricaoColecao: descricaoColecao,
      emojiColecao: emojiColecao,
    })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
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

  const history = useHistory();

  return (
    <Container>
      <Back onClick={() => history.goBack()}>
        <ChevronLeftIcon /> Voltar
      </Back>
      <Head>
        <h1>Nova Coleção</h1>
      </Head>
      <form onSubmit={handleSubmit}>
        <FormInput>
          <label>Nome da Coleção</label>
          <input
            type="text"
            value={nomeColecao}
            onChange={(e) => setNomeColecao(e.target.value)}
          />
        </FormInput>
        <FormInput>
          <label>Categoria</label>
          <select
            value={categoriaColecao}
            onChange={(e) => setCategoriaColecao(e.target.value)}
          >
            <option disabled value="">
              Selecione uma opção...
            </option>
            <option value="Artes Visuais">Artes Visuais</option>
            <option value="Atualidades">Atualidades</option>
            <option value="Espanhol">Espanhol</option>
            <option value="Filosofia">Filosofia</option>
            <option value="Física">Física</option>
            <option value="Geografia">Geografia</option>
            <option value="Gramática">Gramática</option>
            <option value="História">História</option>
            <option value="Inglês">Inglês</option>
            <option value="Matemática">Matemática</option>
            <option value="Música">Música</option>
            <option value="Química">Química</option>
            <option value="Outro">Outro</option>
          </select>
        </FormInput>
        <FormInput>
          <label>
            Descrição <span>(opcional)</span>
          </label>
          <textarea
            value={descricaoColecao}
            onChange={(e) => setDescricaoColecao(e.target.value)}
          />
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
          <Select
            options={emojiOptions}
            onChange={(e) => setEmojiColecao(e.value)}
          />
        </EmojiPicker>
      </aside>
    </Container>
  );
}

export default NewCollection;
