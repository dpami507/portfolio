import {mkdir, writeFile, rm} from 'node:fs/promises';
import path from 'node:path';

const AIRTABLE_TOKEN = import.meta.env.VITE_AIRTABLE_TOKEN;
const BASE_ID = import.meta.env.VITE_AIRTABLE_BASE_ID;

const BASE_DIR = "src/data/"

const PROJECT_TABLE = "Projects"
const SKILLS_TABLE = "Skills"
const ASSET_TABLE = "Assets"

const SKILL_FILE = "skill_data.json"
const SKILL_IMG_DIR = "skill_imgs"

const ASSET_FILE = "asset_data.json"
const ASSET_IMG_DIR = "asset_imgs"

const PROJECT_FILE = "project_data.json"
const PROJECT_IMG_DIR = "project_imgs"

function writeHeader(header) {
    console.log(`${header}`);
    console.log("==================================");
}

async function fetchTable(table) {
    return fetch(`https://api.airtable.com/v0/${BASE_ID}/${table}?sort[0][field]=order&sort[0][direction]=desc`, {
        headers: { Authorization: `Bearer ${AIRTABLE_TOKEN}` }
    }).then(res => res.json());
}
async function downloadImage(imageUrl, folder, filename) {
    const res = await fetch(imageUrl);
    if(!res.ok) {
        throw new Error(`Download failed: ${res.status}`);
    }

    await mkdir(folder, {recursive: true});
    const dest = path.join(folder, path.basename(filename));
    await writeFile(dest, Buffer.from(await res.arrayBuffer()));
    return dest;
}

async function writeProjects() {
    writeHeader("Creating Projects")

    // Fetch from airtable
    const tableJSON = await fetchTable(PROJECT_TABLE);

    // JSON file of project info
    const projects = []

    for (const record of tableJSON.records) {

        // Create JSON entry for project
        const createdProject = {
            id: record.fields.id,
            title: record.fields.title,
            type: record.fields.type,
            link_type: record.fields.link_type,
            link: record.fields.link,
            description: record.fields.description,
            tech: record.fields.tech,
            role: record.fields.role,
            date: record.fields.date,
            imgs: [],
        }

        // Download images
        let imageCount = 0;
        for (const image of record.fields.img) {
            const dest = await downloadImage(image.url, BASE_DIR + PROJECT_IMG_DIR, `${record.fields.title}_${imageCount}_${image.filename}`);
            console.log(`Downloaded ${path.resolve(dest)}`);
            imageCount++;

            // Add image to JSON
            createdProject.imgs.push(dest);
        }

        // Write JSON
        projects.push(createdProject);
        await writeFile(BASE_DIR + PROJECT_FILE, JSON.stringify(projects, null, 2));
        console.log(`Created '${createdProject.title}' project`);
    }
    console.log(`Finished: ${projects.length} projects created`);
}
async function writeSkills() {
    writeHeader("Creating Skills")

    // Fetch from airtable
    const tableJSON = await fetchTable(SKILLS_TABLE);

    // JSON file of project info
    const skills = []

    for (const record of tableJSON.records) {

        // Create JSON entry for project
        const createdSkill = {
            skill: record.fields.skill,
            img: null,
        }

        // Download image
        const image = record.fields.img[0];
        const dest = await downloadImage(image.url, BASE_DIR + SKILL_IMG_DIR, `${image.filename}`);
        console.log(`Downloaded ${path.resolve(dest)}`);
        // Add image to JSON
        createdSkill.img = dest;

        // Write JSON
        skills.push(createdSkill);
        await writeFile(BASE_DIR + SKILL_FILE, JSON.stringify(skills, null, 2));
        console.log(`Created '${createdSkill.skill}' skill`);
    }
    console.log(`Finished: ${skills.length} skills created`);
}
async function writeAssets() {
    writeHeader("Creating Assets")

    // Fetch from airtable
    const tableJSON = await fetchTable(ASSET_TABLE);

    // JSON file of project info
    const assets = []

    for (const record of tableJSON.records) {

        // Create JSON entry for project
        const createdAsset = {
            id: record.fields.id,
            img: null,
        }

        // Download image
        let image = record.fields.img[0];
        const dest = await downloadImage(image.url, BASE_DIR + ASSET_IMG_DIR, `${image.filename}`);
        console.log(`Downloaded ${path.resolve(dest)}`);

        // Add image to JSON
        createdAsset.img = dest;

        // Write JSON
        assets.push(createdAsset);
        await writeFile(BASE_DIR + ASSET_FILE, JSON.stringify(assets, null, 2));
        console.log(`Created '${createdAsset.skill}' asset`);
    }
    console.log(`Finished: ${assets.length} assets created`);
}

async function deleteFiles(path) {
    rm(path, { recursive: true, force: true }, (err) => {
        if (err) throw err;
    });
    console.log(`'${path}' cleared`);
}

// Check that we can access Airtable
if (!AIRTABLE_TOKEN || !BASE_ID) {
    console.error('Missing AIRTABLE_TOKEN or AIRTABLE_BASE_ID');
    process.exit(1);
}

// Delete all files
await deleteFiles(BASE_DIR);

// Write back files
await writeProjects()
await writeSkills()
await writeAssets()