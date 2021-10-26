import React, { useEffect, useState } from "react";

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
import { useHistory, useParams } from "react-router-dom";
import { indexCard, showCollection } from "../../services/DataStorage";

function ViewCollection() {
  const history = useHistory();
  const { id } = useParams();

  const [cards, setCards] = useState([]);
  const [collection, setCollection] = useState({});

  useEffect(() => {
    showCollection(id)
      .then((res) => {
        setCollection(res);
      })
      .catch((err) => console.log(err));

    indexCard(id)
      .then((res) => {
        setCards(res);
        console.log(res);
      })
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <Container>
      <Back onClick={() => history.goBack()}>
        <ChevronLeftIcon /> Voltar
      </Back>
      <Head>
        <h1>{collection?.name}</h1>
        <p>{collection?.descricaoColecao}</p>
        <EditButton to={`/collections/${id}/edit`}>
          <EditIcon /> Editar Coleção
        </EditButton>
      </Head>
      <div className="actions">
        <ReviewButton to="/">
          <PlayCircleIcon />
          Revisar Coleção
        </ReviewButton>
      </div>
      <CardsContainer>
        <NewCard to={`/collections/${id}/cards/new`}>
          <div>
            <AddIcon />
          </div>
          <p>Novo Cartão</p>
        </NewCard>
        {cards?.map((c) => (
          <Card
            to={`/collections/${id}/cards/${c.id}/edit`}
            color={collection?.corColecao}
          >
            <div className="front">{c?.value?.front}</div>
            <div className="back">{c?.value?.back}</div>
          </Card>
        ))}
      </CardsContainer>
    </Container>
  );
}

export default ViewCollection;
