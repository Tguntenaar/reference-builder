/**
 * TODO:
 * nog niet getest
 * nog niet gebruikt
 * niet af!!!
 */
import { Storage } from 'aws-amplify';

const path = 'avatars';

const getAvatarFromStorage = async () => {
  // get photo
  const url = await getAvatar(userId, teamId).catch(() => console.log(`ERROR: Can't get() image`));
  // console.log({url})
  // set avatar
  setAvatar({ uri: url, cache: 'force-cache' });
};

const uploadToStorage = async (pathToImageFile) => {
  try {
    const response = await fetch(pathToImageFile);

    const blob = await response.blob();

    uploadAvatar(userId, team.id, blob).then(() => {
      console.log('uploaded to storage');
    });
  } catch (err) {
    console.log(err);
  }
};

const getAvatar = (userId, teamId) => {
  return Storage.get(`${path}/${teamId}/avatar${userId}.jpeg`);
};
const uploadAvatar = (userId, teamId, blob) => {
  return Storage.put(`${path}/${teamId}/avatar${userId}.jpeg`, blob, {
    contentType: 'image/jpeg',
  });
};

const obj = {
  getAvatar,
  uploadAvatar,
};

export default obj;
