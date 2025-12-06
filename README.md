# typingrunner — Introduction

typingrunner is a focused, developer-oriented typing playground built for programmers who want to improve speed, accuracy, and muscle memory while working with real code.

## Live site
- Production URL: [http://typingrunner.me/](http://typingrunner.me/)
- Social preview: [`img/share-card.svg`](img/share-card.svg)

Target audience
- Developers of all levels who want to practice typing real programming language syntax (JavaScript, Python, Go, Rust, etc.) instead of natural language.
- Students and bootcamp attendees preparing for coding interviews or improving typing efficiency while coding.

Goals & Objectives
- Improve code-centric words-per-minute (WPM) and accuracy while typing code snippets.
- Help players internalize common patterns, keywords, and indentation habits found in real codebases.
- Offer quick practice sessions that fit into short developer workflows (no lengthy setup required).

Is it fun?
- Yes — typingrunner focuses on short, satisfying tests, multiple modes, visible performance feedback (WPM, accuracy, combo), and easy restart to keep practice playful.
- Players can enjoy the challenge of typing realistic code and seeing measurable progress over repeated sessions.

How to play (brief)
1. Choose a language and lesson (short code snippets or small functions).
2. Pick a mode and time limit (Standard, Time Attack, Sudden Death).
3. Focus on typing the code that appears in the test area; errors impact accuracy and combo.
4. Stop when the timer ends and review your WPM, accuracy, and errors.

## Supabase backend (optional)
The UI now ships with an optional Supabase-powered leaderboard. To enable it:

1. **Create a project** at [supabase.com](https://supabase.com) and note the project URL + anon key.
2. **Provision table** `runs` with columns: `id uuid default gen_random_uuid()`, `name text`, `wpm int`, `accuracy int`, `language text`, `mode text default 'STANDARD'`, `created_at timestamptz default now()`.
3. **Enable Row Level Security** and add policies:
	- `SELECT`: allow anon role to read `runs` ordered by WPM.
	- `INSERT`: allow anon role to insert while constraining `wpm BETWEEN 0 AND 400` and `accuracy BETWEEN 0 AND 100` (optional check via `WITH CHECK`).
4. **Update `js/config.js`** with your `url` and `anonKey`. The anon key is safe for public SPAs when RLS is enforced.
5. (Optional) **Edge Function validation** – if you need additional validation before insert, expose an Edge Function and point `BackendService.request` to it.

Once configured, the frontend automatically:
- Posts every completed run to Supabase via `BackendService.submitScore`.
- Pulls the top 10 runs using the REST endpoint `/rest/v1/runs?select=*&order=wpm.desc&limit=10`.
- Fallbacks to local/mock data when the backend is unreachable.

Important: No downloading or redistribution
- This site is intended to be used via the live website only. You may not download, copy, redistribute, or host the website content externally without explicit permission from the owner.
- If you are the owner and want to provide a distributable version, contact the project owner for permission and licensing details.

## Contact
Support & feedback: support@typingrunner.me