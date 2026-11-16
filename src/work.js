import projectData from '../src/data/project_data.json'
import skillData from '../src/data/skill_data.json'
import assetData from '../src/data/asset_data.json'

export function getProjects() {
    return projectData ?? [];
}
export function getSkills() {
    return skillData ?? [];
}
export function  getAssets() {
    return assetData.reduce((acc, asset) => {
        acc[asset.id] = asset.img;
        return acc;
    }, {})
}