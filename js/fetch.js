const username = 'Yadriel-Ruiz';
function getLastCommitDate(username) {
    const url = `https://api.github.com/users/${username}/events/public`;

    return fetch(url, {
        headers: {
            'Authorization': `token ${GH_KEY}`,
        },
    })
        .then(response => {
            if (!response.ok) {
                throw new Error(`GitHub API request failed: ${response.statusText}`);
            }
            return response.json();
        })
        .then(events => {
            const commitEvent = events.find(event => event.type === 'PushEvent');
            if (commitEvent) {
                return commitEvent.created_at;
            } else {
                throw new Error('No commit events found for the user.');
            }
        });
}

getLastCommitDate(username)
    .then(date => console.log(`Last commit date for ${username}: ${date}`))
    .catch(error => console.error(error.message));