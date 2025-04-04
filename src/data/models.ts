// src/data/models.ts

import RedTreeL from '../assets/3d-models/lumaai/red_tree_l.glb'; // Example model, replace with your actual model
import TreasureChestL from '../assets/3d-models/lumaai/treasure_chest_l.glb'; // Example model, replace with your actual model

import RedTreeH from '../assets/3d-models/hunyuan3d/red_tree.glb'; // Example model, replace with your actual model
import BlueGemH from '../assets/3d-models/hunyuan3d/blue_gem.glb'; // Example model, replace with your actual model
import FruitBasketH from '../assets/3d-models/hunyuan3d/fruit_basket.glb'; // Example model, replace with your actual model
import TreasureChestH from '../assets/3d-models/hunyuan3d/treasure_chest.glb'; // Example model, replace with your actual model

interface ModelData {
    [key: number]: string;
}

export const modelUrls: ModelData = {
    1: RedTreeL,
    2: TreasureChestL,
    3: RedTreeH,
    4: TreasureChestH,
    5: FruitBasketH,
    6: BlueGemH,
};

export const modelDescriptions: Record<number, string> = {
    1: 'A red fantasy tree with twisted roots',
    2: 'A treasure chest filled with gold coins',
    3: 'A red fantasy tree with twisted roots',
    4: 'A treasure chest filled with gold coins',
    5: 'A fruit basket filled with various fruits',
    6: 'A blue sapphire spiral gem',
};
