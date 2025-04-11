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

export interface ModelData {
    [key: number]: string;
}

export const trees: ModelData = {
    1: RedTreeL1,
    2: RedTreeL2,
    3: RedTreeH1,
    4: RedTreeH2,
    5: RedTreeH,
};

export const chests: ModelData = {
    1: TreasureChestL1,
    2: TreasureChestL2,
    3: TreasureChestH1,
    4: TreasureChestH2,
    5: TreasureChestH,
};

export const scrolls: ModelData = {
    1: MysticScrollL1,
    2: MysticScrollL2,
    3: MysticScrollH1,
    4: MysticScrollH2,
    5: MysticScrollH,
};

export const modelDescriptions: Record<string, string> = {
    tree: 'Red Tree',
    chest: 'Chest',
    scroll: 'Scroll',
};
