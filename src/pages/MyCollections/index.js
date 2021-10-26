import React, { useEffect, useState } from "react";

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
import Twemoji from "react-twemoji";
import { indexCollection } from "../../services/DataStorage";

function MyCollections() {
  const [collections, setCollections] = useState([]);
  const [filteredCollections, setFilteredCollections] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    indexCollection()
      .then((res) => {
        setCollections(res);
        console.log(res);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    if (collections.length > 0) {
      setFilteredCollections(
        collections.filter((c) =>
          c?.value?.name?.toLowerCase().includes(search.toLowerCase())
        )
      );
    }
  }, [collections, search]);
  return (
    <Container>
      <Head>
        <h1>Minhas Coleções</h1>
        <SearchInput>
          <input
            placeholder="Buscar..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
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
        {filteredCollections?.map((c) => (
          <Collection
            to={`/collections/${c.id}`}
            key={c.id}
            color={c?.value.corColecao ?? "#ef818e"}
          >
            <div className="front">
              <Twemoji>{c?.value.emojiColecao}</Twemoji>
            </div>
            <div className="back"></div>
            <p>{c?.value.name}</p>
            <span>Raphael Akira</span>
          </Collection>
        ))}
      </CollectionsContainer>
    </Container>
  );
}

export default MyCollections;
