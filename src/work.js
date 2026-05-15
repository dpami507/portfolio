import { useEffect, useState } from 'react';

const AIRTABLE_TOKEN = import.meta.env.VITE_AIRTABLE_TOKEN;
const BASE_ID = import.meta.env.VITE_AIRTABLE_BASE_ID;

const PROJECTS_TABLE = "Projects";
const ASSETS_TABLE = "Assets";
const SKILLS_TABLE = "Skills";

function fetchTable(tableName) {
  return fetch(`https://api.airtable.com/v0/${BASE_ID}/${tableName}?sort[0][field]=order&sort[0][direction]=desc`, {
    headers: { Authorization: `Bearer ${AIRTABLE_TOKEN}` }
  }).then(res => res.json());
}

export function useWorkList() {
  const [workList, setWorkList] = useState([]);
  const [assets, setAssets] = useState({});
  const [skills, setSkills] = useState({});

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    Promise.all([fetchTable(PROJECTS_TABLE), fetchTable(ASSETS_TABLE), fetchTable(SKILLS_TABLE)])
      .then(([projectsData, assetsData, skillsData]) => {
        const records = projectsData.records.map(record => ({
          ...record.fields,
        }));

        const assetMap = {};
        assetsData.records.forEach(record => {
          const name = record.fields.id;
          assetMap[name] = record.fields.img?.[0]?.url ?? null;
        });

        const skillRecords = {};
        skillsData.records.forEach(record => {
          const skill = record.fields.skill;
          skillRecords[skill] = record.fields.img?.[0]?.url ?? null;
        });

        setWorkList(records);
        setAssets(assetMap);
        setSkills(skillRecords);

        setLoading(false);

      })
      .catch(err => {
        console.error('Error loading Airtable:', err);
        setError(err);
        setLoading(false);
      });
  }, []);

  return { workList, assets, skills, loading, error };
}