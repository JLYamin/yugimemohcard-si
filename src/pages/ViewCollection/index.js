import React from "react";

import {
  Container,
  Back,
  Head,
  CardsContainer,
  ReviewButton,
  NewCard,
  Card,
  EditButton,
} from "./styles";

import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";

function ViewCollection() {
  return (
    <Container>
      <Back to="/collections">
        <ChevronLeftIcon /> Voltar
      </Back>
      <Head>
        <h1>Coleção</h1>
        <p>Insira a descrição aqui</p>
        <EditButton>
          <EditIcon /> Editar Coleção
        </EditButton>
      </Head>
      <div className="actions">
        <ReviewButton to="/collection/1/edit">
          <PlayCircleIcon />
          Revisar Coleção
        </ReviewButton>
      </div>
      <CardsContainer>
        <NewCard to="/cards/new">
          <div>
            <AddIcon />
          </div>
          <p>Novo Cartão</p>
        </NewCard>
        <Card to="/cards/1" color={"#B8E8FD"}>
          <div className="front">Velocidade Média</div>
          <div className="back">Vm = ΔS / Δt</div>
        </Card>
      </CardsContainer>
    </Container>
  );
}

export default ViewCollection;
