import React, { useState, useEffect } from "react";

import { Container, Back, Head, FormInput, Button, Card } from "./styles";

import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { useHistory, useParams } from "react-router-dom";
import { createCard, showCollection } from "../../services/DataStorage";
import {
  errorNotification,
  successNotification,
} from "../../utils/notification";

function NewCard() {
  const [front, setFront] = useState("");
  const [back, setBack] = useState("");
  const [color, setColor] = useState("#fff");

  const { id } = useParams();

  useEffect(() => {
    showCollection(id)
      .then((res) => {
        setColor(res?.corColecao);
      })
      .catch((err) => console.log(err));
  }, [id]);

  const handleSubmit = (event) => {
    event.preventDefault();
    create();
  };

  const create = () => {
    createCard({
      front: front,
      back: back,
      collectionID: id,
    })
      .then((res) => {
        console.log(res);
        successNotification("Cartão criado com sucesso!");
        setFront("");
        setBack("");
      })
      .catch((err) => {
        errorNotification("Opa! Ocorreu um erro.");
        console.log(err);
      });
  };

  const history = useHistory();

  return (
    <Container>
      <Back onClick={() => history.goBack()}>
        <ChevronLeftIcon /> Voltar
      </Back>
      <Head>
        <h1>Novo Cartão</h1>
      </Head>
      <form onSubmit={handleSubmit}>
        <FormInput>
          <label>
            Frente do Cartão <span>(Pergunta)</span>
          </label>
          <input
            type="text"
            value={front}
            onChange={(e) => setFront(e.target.value)}
          />
        </FormInput>
        <FormInput>
          <label>
            Verso do Cartão <span>(Resposta)</span>
          </label>
          <textarea value={back} onChange={(e) => setBack(e.target.value)} />
        </FormInput>
        <Button>Salvar</Button>
      </form>
      <aside>
        <Card color={color}>
          <p>Frente</p>
          <p>Verso</p>
          <div className="front">{front ? front : <i>Pergunta</i>}</div>
          <div className="back">{back ? back : <i>Resposta</i>}</div>
        </Card>
      </aside>
    </Container>
  );
}

export default NewCard;
