// src/data/models.ts

import RedTreeL1 from '../assets/3d-models/lumaai/red_tree-l1.glb';
import TreasureChestL1 from '../assets/3d-models/lumaai/treasure_chest-l1.glb';
import MysticScrollL1 from '../assets/3d-models/lumaai/mystic_scroll-l1.glb';

import RedTreeL2 from '../assets/3d-models/lumaai/red_tree-l2.glb';
import TreasureChestL2 from '../assets/3d-models/lumaai/treasure_chest-l2.glb';
import MysticScrollL2 from '../assets/3d-models/lumaai/mystic_scroll-l2.glb';

import RedTreeH1 from '../assets/3d-models/hunyuan3d/red_tree-h1.glb';
import TreasureChestH1 from '../assets/3d-models/hunyuan3d/treasure_chest-h1.glb';
import MysticScrollH1 from '../assets/3d-models/hunyuan3d/mystic_scroll-h1.glb';

import RedTreeH2 from '../assets/3d-models/hunyuan3d/red_tree-h2.glb';
import TreasureChestH2 from '../assets/3d-models/hunyuan3d/treasure_chest-h2.glb';
import MysticScrollH2 from '../assets/3d-models/hunyuan3d/mystic_scroll-h2.glb';

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
    7: RedTreeH1,
    8: TreasureChestH1,
    9: MysticScrollH1,
    10: RedTreeH2,
    11: TreasureChestH2,
    12: MysticScrollH2,
    13: RedTreeH,
    14: TreasureChestH,
    15: MysticScrollH,
};

export const treeUrls: ModelData = {
    1: RedTreeL1,
    2: RedTreeL2,
    3: RedTreeH1,
    4: RedTreeH2,
    5: RedTreeH,
};

export const modelDescriptions: Record<number, string> = {
    1: 'A red fantasy tree with twisted roots',
    2: 'A treasure chest filled with gold coins',
    3: 'A mystic parchment scroll',
};
