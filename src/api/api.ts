async function fetchAPI(endpoint: string, errorMessage: string) {
    const response = await fetch(endpoint, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'auth-key': '', // HERE SHOULD BE MY KEY
        }
    });

    if (!response.ok) {
        throw new Error(`${errorMessage}: ${response.status} ${response.statusText}`);
    }

    return response.json();
}

export async function fetchCandidateProfile() {
    return fetchAPI('/api/profile', 'Failed to fetch candidate profile');
}

export async function fetchCandidateSummary() {
    return fetchAPI('/api/candidate/summary', 'Failed to fetch candidate summary');
}