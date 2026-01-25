import { useEffect, useState } from 'react';
import Papa from 'papaparse';

const sheetCSV = "https://docs.google.com/spreadsheets/d/e/2PACX-1vQO_f2HDT_qROEUC6ELdTKbDmahQsaC5y03yB8F2b3sTZO6zJaUFdNNXVCEijU1gBft6mOT7ALUA0Ml/pub?gid=0&single=true&output=csv";

export function useWorkList() {
  const [workList, setWorkList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    Papa.parse(sheetCSV, {
      download: true,
      header: true,
      skipEmptyLines: true,
      transform: (value, field) => {
        // Convert string booleans
        if (value === 'TRUE') return true;
        if (value === 'FALSE') return false;

        return value;
      },
      complete: (results) => {
        console.log('Loaded projects:', results.data);
        setWorkList(results.data);
        setLoading(false);
      },
      error: (err) => {
        console.error('Error loading sheet:', err);
        setError(err);
        setLoading(false);
      }
    });
  }, []);

  return { workList, loading, error };
}