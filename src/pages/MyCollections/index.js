import React from "react";

import {
  Container,
  SearchInput,
  Head,
  CollectionsContainer,
  ReviewButton,
  NewCollection,
  Collection,
} from "./styles";

import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import AddIcon from "@mui/icons-material/Add";

function MyCollections() {
  return (
    <Container>
      <Head>
        <h1>Minhas Coleções</h1>
        <SearchInput>
          <input placeholder="Buscar..." />
        </SearchInput>
      </Head>
      <div className="actions">
        <ReviewButton>
          <PlayCircleIcon />
          Revisar Coleções
        </ReviewButton>
      </div>
      <CollectionsContainer>
        <NewCollection to="/collections/new">
          <div>
            <AddIcon />
          </div>
          <p>Nova Coleção</p>
        </NewCollection>
        <Collection to="/collections/1" color={"#B8E8FD"}>
          <div className="front"></div>
          <div className="back"></div>
          <p>Cinemática Pt 1</p>
          <span>Raphael Akira</span>
        </Collection>
      </CollectionsContainer>
    </Container>
  );
}

export default MyCollections;
