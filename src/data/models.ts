// src/data/models.ts

import RedTree from '../assets/3d-models/red_tree.glb'; // Example model, replace with your actual model
import BlueGem from '../assets/3d-models/blue_gem.glb'; // Example model, replace with your actual model
import FruitBasket from '../assets/3d-models/fruit_basket.glb'; // Example model, replace with your actual model
import TreasureChest from '../assets/3d-models/treasure_chest.glb'; // Example model, replace with your actual model

interface ModelData {
    [key: number]: string;
}

export const modelUrls: ModelData = {
    1: RedTree,
    2: BlueGem,
    3: FruitBasket,
    4: TreasureChest,
};

export const modelDescriptions: Record<number, string> = {
    1: 'A red fantasy tree with twisted roots',
    2: 'A blue sapphire spiral gem',
    3: 'A fruit basket filled with various fruits',
    4: 'A treasure chest filled with gold coins',
};
