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
  Color,
} from "./styles";

import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import Twemoji from "react-twemoji";
import Select from "react-select";
import { useHistory } from "react-router-dom";
import {
  errorNotification,
  successNotification,
} from "../../utils/notification";

function NewCollection() {
  const [nomeColecao, setNomeColecao] = useState("");
  const [categoriaColecao, setCategoriaColecao] = useState("");
  const [descricaoColecao, setDescricaoColecao] = useState("");
  const [emojiColecao, setEmojiColecao] = useState("π¨");
  const [corColecao, setCorColecao] = useState("#fff");

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
      corColecao: corColecao,
    })
      .then((res) => {
        console.log(res);
        successNotification("ColeΓ§Γ£o criada com sucesso!");
        setNomeColecao("");
        setCategoriaColecao("");
        setDescricaoColecao("");
        setEmojiColecao("π¨");
        setCorColecao("#fff");
      })
      .catch((err) => {
        errorNotification("Opa! Ocorreu um erro.");
        console.log(err);
      });
  };

  const emojiOptions = [
    { label: "π¨", value: "π¨" },
    { label: "π°", value: "π°" },
    { label: "π¦ ", value: "π¦ " },
    { label: "π", value: "π" },
    { label: "π§²", value: "π§²" },
    { label: "π", value: "π" },
    { label: "π", value: "π" },
    { label: "π", value: "π" },
    { label: "π", value: "π" },
    { label: "π’", value: "π’" },
    { label: "π»", value: "π»" },
    { label: "π", value: "π" },
    { label: "βοΈ", value: "βοΈ" },
    { label: "π", value: "π" },
  ];

  const colorOptions = [
    { label: <Color color="#ef818e"></Color>, value: "#ef818e" },
    { label: <Color color="#cdeac0"></Color>, value: "#cdeac0" },
    { label: <Color color="#d5aaff"></Color>, value: "#d5aaff" },
    { label: <Color color="#98a2cc"></Color>, value: "#98a2cc" },
    { label: <Color color="#81cdff"></Color>, value: "#81cdff" },
    { label: <Color color="#ffd96f"></Color>, value: "#ffd96f" },
    { label: <Color color="#d07363"></Color>, value: "#d07363" },
    { label: <Color color="#fae5d7"></Color>, value: "#fae5d7" },
  ];

  const history = useHistory();

  return (
    <Container>
      <Back onClick={() => history.goBack()}>
        <ChevronLeftIcon /> Voltar
      </Back>
      <Head>
        <h1>Nova ColeΓ§Γ£o</h1>
      </Head>
      <form onSubmit={handleSubmit}>
        <FormInput>
          <label>Nome da ColeΓ§Γ£o</label>
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
              Selecione uma opΓ§Γ£o...
            </option>
            <option value="Artes Visuais">Artes Visuais</option>
            <option value="Atualidades">Atualidades</option>
            <option value="Espanhol">Espanhol</option>
            <option value="Filosofia">Filosofia</option>
            <option value="FΓ­sica">FΓ­sica</option>
            <option value="Geografia">Geografia</option>
            <option value="GramΓ‘tica">GramΓ‘tica</option>
            <option value="HistΓ³ria">HistΓ³ria</option>
            <option value="InglΓͺs">InglΓͺs</option>
            <option value="MatemΓ‘tica">MatemΓ‘tica</option>
            <option value="MΓΊsica">MΓΊsica</option>
            <option value="QuΓ­mica">QuΓ­mica</option>
            <option value="Outro">Outro</option>
          </select>
        </FormInput>
        <FormInput>
          <label>
            DescriΓ§Γ£o <span>(opcional)</span>
          </label>
          <textarea
            value={descricaoColecao}
            onChange={(e) => setDescricaoColecao(e.target.value)}
          />
        </FormInput>
        <Button>Salvar</Button>
      </form>
      <aside>
        <p>PrΓ©via</p>
        <Collection color={corColecao ?? "#fff"}>
          <div className="front">
            <Twemoji>{emojiColecao}</Twemoji>
          </div>
          <div className="back"></div>
        </Collection>
        <EmojiPicker>
          <p>Emoji da Capa:</p>
          <Select
            menuPlacement="top"
            options={emojiOptions}
            onChange={(e) => setEmojiColecao(e.value)}
          />
        </EmojiPicker>
        <EmojiPicker>
          <p>Cor da Capa:</p>
          <Select
            menuPlacement="top"
            options={colorOptions}
            onChange={(e) => setCorColecao(e.value)}
          />
        </EmojiPicker>
      </aside>
    </Container>
  );
}

export default NewCollection;
