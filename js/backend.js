(function () {
    const cfg = window.__SUPABASE_CONFIG || {};
    const baseHeaders = cfg.anonKey ? {
        'Content-Type': 'application/json',
        'apikey': cfg.anonKey,
        'Authorization': `Bearer ${cfg.anonKey}`
    } : {};

    async function request(path, options = {}) {
        if (!cfg.url || !cfg.anonKey) {
            throw new Error('Supabase config missing');
        }
        const response = await fetch(`${cfg.url}${path}`, {
            ...options,
            headers: {
                ...baseHeaders,
                ...(options.headers || {})
            }
        });
        if (!response.ok) {
            const detail = await response.text();
            throw new Error(detail || 'Supabase request failed');
        }
        return response;
    }

    async function fetchLeaderboard(limit = 10) {
        const table = (cfg.tables && cfg.tables.runs) || 'runs';
        const url = `/rest/v1/${table}?select=*&order=wpm.desc&limit=${limit}`;
        const response = await request(url, { method: 'GET' });
        const data = await response.json();
        return data.map((row, index) => ({
            id: row.id || `sb-${index}`,
            name: row.name || 'Runner',
            wpm: row.wpm || 0,
            accuracy: row.accuracy || 0,
            language: row.language || 'Unknown',
            mode: row.mode || 'STANDARD',
            date: row.created_at || row.date || new Date().toISOString(),
            isUser: row.isUser || false
        }));
    }

    async function submitScore(payload) {
        const table = (cfg.tables && cfg.tables.runs) || 'runs';
        const body = JSON.stringify({
            name: payload.name,
            wpm: payload.wpm,
            accuracy: payload.accuracy,
            language: payload.language,
            mode: payload.mode,
            created_at: payload.date || new Date().toISOString()
        });
        await request(`/rest/v1/${table}`, {
            method: 'POST',
            body
        });
    }

    window.BackendService = {
        isEnabled: () => Boolean(cfg.url && cfg.anonKey),
        fetchLeaderboard,
        submitScore
    };
})();
