import { utilService } from '../services/util.service.js';
import { StorageService } from '../services/storage.service.js';

export const UserService = {
  query,
  addUser,
  deleteUser,
  getUserById,
  updateUser,
  getShowsList,
};

const KEY = 'usersDB';
let gUsers;
let gShowsCount;

const tvShowsComedy = [
  {
    title: 'Big Mama',
    img: '../assets/img/shows/big-mama.jpg',
  },
  {
    title: 'HangOver',
    img: '../assets/img/shows/hangover.jpg',
  },
  {
    title: 'We are the millers',
    img: '../assets/img/shows/we-are-the-millers.jpg',
  },
  {
    title: 'Dont mess with zohan',
    img: '../assets/img/shows/zohan.jpg',
  },
  {
    title: 'Bad neighbours',
    img: '../assets/img/shows/bad-neighbours.jpg',
  },
];
const tvShowsAction = [
  {
    title: 'Shooter',
    img: '../assets/img/shows/shooter.jpg',
  },
  {
    title: 'The Purge 2',
    img: '../assets/img/shows/the-purge-2.jpg',
  },
  {
    title: 'Chappie',
    img: '../assets/img/shows/chappie.jpg',
  },
  {
    title: "Assassin's Creed",
    img: '../assets/img/shows/assassins-creed.jpg',
  },
  {
    title: 'The Dark Knight',
    img: '../assets/img/shows/the-dark-knight.jpg',
  },
];
const tvShowsTrend = [
  {
    title: 'Blacklist',
    img: '../assets/img/shows/blacklist.jpg',
  },
  {
    title: 'Control Z',
    img: '../assets/img/shows/control-z.jpg',
  },
  {
    title: 'Lupin',
    img: '../assets/img/shows/lupin.jpg',
  },
  {
    title: 'Passengers',
    img: '../assets/img/shows/passengers.jpg',
  },
  {
    title: 'Vikings',
    img: '../assets/img/shows/vikings.jpg',
  },
];
const gShowsList = [
  {
    title: 'Fauda',
    img: '../assets/img/shows/fauda.jpg',
  },
  {
    title: 'Breaking Bad',
    img: '../assets/img/shows/breaking-bad.jpg',
  },
  {
    title: 'Money Heist',
    img: '../assets/img/shows/casa-de-papel.jpg',
  },
  {
    title: 'Prison Break',
    img: '../assets/img/shows/prison-break.jpg',
  },
  {
    title: 'Too Hot To Handle',
    img: '../assets/img/shows/too-hot.jpg',
  },
  {
    title: 'Big Mouth',
    img: '../assets/img/shows/big-mouth.jpg',
  },
  {
    title: 'Black Mirror',
    img: '../assets/img/shows/black-mirror.jpg',
  },
  {
    title: 'Designated Survivor',
    img: '../assets/img/shows/designated-survivor.jpg',
  },
  {
    title: 'Friends',
    img: '../assets/img/shows/friends.jpg',
  },
  {
    title: 'Suits',
    img: '../assets/img/shows/suits.jpg',
  },
  {
    title: 'Elite',
    img: '../assets/img/shows/elite.jpg',
  },
];

_createUsers();

function query() {
  return Promise.resolve(gUsers);
}

function addUser(name) {
  let user = _createUser(utilService.getRandomImg(), name);
  gUsers.push(user);
  _saveUsersToStorage();
}

function _createUser(img, name) {
  return {
    id: utilService.makeId(),
    img,
    name,
    tvShows: getRandomShows(5, gShowsList),
    tvShowsTrend: getRandomShows(5, tvShowsTrend),
    tvShowsAction: getRandomShows(5, tvShowsAction),
    tvShowsComedy: getRandomShows(5, tvShowsComedy),
  };
}

function getUserById(userId) {
  var user = gUsers.find(function (user) {
    return userId === user.id;
  });
  return user;
}

function updateUser(userId, name) {
  const user = gUsers.find((user) => {
    return user.id === userId;
  });
  user.name = name;
  _saveUsersToStorage();
}

function _createUsers() {
  var users = StorageService.loadFromStorage(KEY);
  if (!users || !users.length) {
    users = [];
    users.push(_createUser('../assets/img/my-user.png', 'On'));
    users.push(_createUser('../assets/img/green-user.png', 'Adir'));
    users.push(_createUser('../assets/img/orange-user.png', 'Muki'));
    users.push(_createUser('../assets/img/red-user.png', 'Shmulik'));
    users.push(_createUser('../assets/img/light-user.png', 'Popo'));
  }
  gUsers = users;
  _saveUsersToStorage();
}

function deleteUser(userId) {
  var userIdx = gUsers.findIndex(function (user) {
    return userId === user.id;
  });
  gUsers.splice(userIdx, 1);
  _saveUsersToStorage();
}

function getRandomShows(count, shows) {
  gShowsCount = shows.length;
  let showsCopy = [...shows];
  let newShows = [];
  for (let i = 0; i < count; i++) {
    newShows.push(drawShow(showsCopy));
  }
  return newShows;
}

function drawShow(shows) {
  var currShow = shows.splice(
    utilService.getRandomIntInclusive(0, gShowsCount - 1),
    1
  );
  gShowsCount--;
  return currShow[0];
}

function _saveUsersToStorage() {
  StorageService.saveToStorage(KEY, gUsers);
}

function getShowsList(onSuccess, title) {
  const options = {
    method: 'GET',
    url: 'https://utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com/lookup',
    params: { term: title, country: 'uk' },
    headers: {
      'x-rapidapi-host':
        'utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com',
      'x-rapidapi-key': '1371ff4663mshd767a4b532b068ap1833b1jsnaa498cd7645c',
    },
  };

  axios.request(options).then(function (response) {
    onSuccess(response.data.results);
  });
}
