import React, { useEffect, useState } from "react";

import { Container, Back, Head, FormInput, Button, Card } from "./styles";

import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { useHistory, useParams } from "react-router-dom";
import {
  updateCard,
  showCollection,
  showCard,
} from "../../services/DataStorage";
import {
  errorNotification,
  successNotification,
} from "../../utils/notification";

function EditCard() {
  const [front, setFront] = useState("");
  const [back, setBack] = useState("");
  const [color, setColor] = useState("#fff");

  const { id, idc } = useParams();

  useEffect(() => {
    showCollection(id)
      .then((res) => {
        setColor(res?.corColecao);
      })
      .catch((err) => console.log(err));

    showCard(idc)
      .then((res) => {
        setFront(res?.front);
        setBack(res?.back);
      })
      .catch((err) => console.log(err));
  }, [id, idc]);

  const handleSubmit = (event) => {
    event.preventDefault();
    update();
  };

  const update = () => {
    updateCard(idc, {
      front: front,
      back: back,
      collectionID: id,
    })
      .then((res) => {
        console.log(res);
        successNotification("Cartão atualizado com sucesso!");
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
        <h1>Editar Cartão</h1>
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

export default EditCard;
