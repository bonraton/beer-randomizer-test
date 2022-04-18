import { PROFILE_BASE_URL } from '../helpers/constant';
import { calculateUserAge } from '../helpers/functions';

export default async function getRandomProfile() {
  const promise = await fetch(PROFILE_BASE_URL);
  const response = await promise.json();
  return {
    name: `${response.first_name} ${response.last_name}`,
    age: calculateUserAge(response.date_of_birth),
    position: response.employment.title,
    id: response.id,
    avatar: response.avatar,
  };
}
