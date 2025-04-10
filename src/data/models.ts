// src/data/models.ts

import RedTreeL1 from '../assets/3d-models/lumaai/red_tree-l1.glb';
import TreasureChestL1 from '../assets/3d-models/lumaai/treasure_chest-l1.glb';
import MysticScrollL1 from '../assets/3d-models/lumaai/mystic_scroll-l1.glb';

import RedTreeL2 from '../assets/3d-models/lumaai/red_tree-l2.glb';
import TreasureChestL2 from '../assets/3d-models/lumaai/treasure_chest-l2.glb';
import MysticScrollL2 from '../assets/3d-models/lumaai/mystic_scroll-l2.glb';

import RedTreeH from '../assets/3d-models/hunyuan3d/red_tree.glb';
import TreasureChestH from '../assets/3d-models/hunyuan3d/treasure_chest.glb';
import MysticScrollH from '../assets/3d-models/hunyuan3d/mystic_scroll.glb';

interface ModelData {
    [key: number]: string;
}

export const modelUrls: ModelData = {
    1: RedTreeL1,
    2: TreasureChestL1,
    3: MysticScrollL1,
    4: RedTreeL2,
    5: TreasureChestL2,
    6: MysticScrollL2,
    7: RedTreeH,
    8: TreasureChestH,
    9: MysticScrollH,
};

export const modelDescriptions: Record<number, string> = {
    1: 'A red fantasy tree with twisted roots',
    2: 'A treasure chest filled with gold coins',
    3: 'A mystic parchment scroll',
    4: 'A red fantasy tree with twisted roots',
    5: 'A treasure chest filled with gold coins',
    6: 'A mystic parchment scroll',
    7: 'A red fantasy tree with twisted roots',
    8: 'A treasure chest filled with gold coins',
    9: 'A mystic parchment scroll',
};
