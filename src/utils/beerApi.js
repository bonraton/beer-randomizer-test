import { BEER_BASE_URL } from '@/helpers/constant';

export default async function getRandomBeer() {
  const promise = await fetch(BEER_BASE_URL);
  const response = await promise.json();
  return {
    id: response.id,
    brand: response.brand,
    name: response.name,
    style: response.style,
    ibu: response.ibu,
    blg: response.blg,
  };
}
