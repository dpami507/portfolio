import projectData from '../public/data/project_data.json'
import skillData from '../public/data/skill_data.json'
import assetData from '../public/data/asset_data.json'

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