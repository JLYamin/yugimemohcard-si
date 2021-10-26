import React from "react";

import { Container, Back, Head, FormInput, Button, Card } from "./styles";

import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { useHistory } from "react-router-dom";

function NewCard({}) {
  const handleSubmit = (event) => {
    event.preventDefault();
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
          <input type="text" />
        </FormInput>
        <FormInput>
          <label>
            Verso do Cartão <span>(Resposta)</span>
          </label>
          <textarea />
        </FormInput>
        <Button>Salvar</Button>
      </form>
      <aside>
        <Card color={"#B8E8FD"}>
          <p>Frente</p>
          <p>Verso</p>
          <div className="front">Velocidade Média</div>
          <div className="back">Vm = ΔS / Δt</div>
        </Card>
      </aside>
    </Container>
  );
}

export default NewCard;
