const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

const usersLanguages = users.filter(user => user.languages.length >= 3);
console.log(usersLanguages);

const emails = users.map(user => user.email);
console.log(emails);

const totalExperience = users.reduce((total, person) => total + person.yearsOfExperience,0)
const averageExp = totalExperience / users.length;

console.log(totalExperience);
console.log(averageExp);

const longestEmailUser = users.reduce((longestEmailUser, currentUser) => {
    return currentUser.email.length > longestEmailUser.email.length ? currentUser : longestEmailUser;
}, users[0]);

console.log(longestEmailUser);

const allUserNames = users.reduce((namesString, user) => {
    return namesString === '' ? user.name : namesString + ', ' + user.name;
}, '');

console.log('List of User Names:', allUserNames);
