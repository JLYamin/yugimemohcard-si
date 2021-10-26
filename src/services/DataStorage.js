import localForage from "localforage";

var collectionsStorage = localForage.createInstance({
  name: "Collections",
});

var cardsStorage = localForage.createInstance({
    name: "Cards",
});

/** Collections **/
/**
 * Get all items for Collections
 */
export const indexCollection = async () => {
    try {
        let collections = [];
        await collectionsStorage.iterate(function (value, key) {
            collections.push({ id: key, value });
        });
        return collections;
    }
    catch (err) {
        console.log(err);
    }
};

/**
 * Create object in Collections
 */
export const createCollection = async (data) => {
    try {
        const keys = await collectionsStorage.keys();
        const uniqueID = keys.length > 0 ? Number(keys[keys.length - 1]) + 1 : 1;
        await collectionsStorage.setItem(uniqueID, data);
        return await collectionsStorage.getItem(uniqueID);
    }
    catch (err) {
        console.log(err);
    }
};

/**
 * Update object in Collections by id
 */
export const updateCollection = async (id, data) => {
    try {
        const item = await collectionsStorage.getItem(id);
        await collectionsStorage.setItem(id, { ...item, ...data });
        return await collectionsStorage.getItem(id);
    }
    catch (err) {
        console.log(err);
    }
};

/**
 * Get one object from Collections by id
 */
export const showCollection = async (id) => {
    try {
        const item = await collectionsStorage.getItem(id);
        return item;
    }
    catch (err) {
        console.log(err);
    }
};

/**
 * Delete an object from Collections by id
 */
export const destroyCollection = async (id) => {
    try {
        await collectionsStorage.removeItem(id);
        return id;
    }
    catch (err) {
        console.log(err);
    }
};
/** END Collections **/

/** Cards **/
/**
 * Get all items from Cards
 */
export const indexCard = async (id) => {
    try {
        let cards = [];
        await cardsStorage.iterate(function (value, key) {
            if(value.collectionID === id){
                cards.push({ id: key, value });
            }
        });
        return cards;
    }
    catch (err) {
        console.log(err);
    }
};

/**
 * Create object in Cards
 */
export const createCard = async (data) => {
    try {
        const keys = await cardsStorage.keys();
        const uniqueID = keys.length > 0 ? Number(keys[keys.length - 1]) + 1 : 1;
        await cardsStorage.setItem(uniqueID, data);
        return await cardsStorage.getItem(uniqueID);
    }
    catch (err) {
        console.log(err);
    }
};

/**
 * Update object in Cards by id
 */
export const updateCard = async (id, data) => {
    try {
        const item = await cardsStorage.getItem(id);
        await cardsStorage.setItem(id, { ...item, ...data });
        return await cardsStorage.getItem(id);
    }
    catch (err) {
        console.log(err);
    }
};

/**
 * Get one object from Cards by id
 */
export const showCard = async (id) => {
    try {
        const item = await cardsStorage.getItem(id);
        return item;
    }
    catch (err) {
        console.log(err);
    }
};

/**
 * Delete an object from Cards by id
 */
export const destroyCard = async (id) => {
    try {
        await cardsStorage.removeItem(id);
        return id;
    }
    catch (err) {
        console.log(err);
    }
};
/** END Cards **/

// createCollection({
    //   name: name,
    // }).then((res) => { console.log(res) }).catch((err) => console.log(err));

    // indexCollection().then((res) => { console.log(res) }).catch((err) => console.log(err));

    // showCollection(1).then((res) => { console.log(res) }).catch((err) => console.log(err));

    //destroyCollection(9).then((res) => { console.log(res) }).catch((err) => console.log(err));

    //updateCard(1, {"name":"Card 2"}).then((res) => { console.log(res) }).catch((err) => console.log(err));

    // createCard({
    //   name: name,
    //   collectionID: 11,
    // }).then((res) => { console.log(res) }).catch((err) => console.log(err));

    //indexCard(11).then((res) => { console.log(res) }).catch((err) => console.log(err));