import axios from "axios";

export const bodyParts = [
  "back",
  "cardio",
  "chest",
  "lower arms",
  "lower legs",
  "neck",
  "shoulders",
  "upper arms",
  "upper legs",
  "waist",
];
export const targetList = [
  "abductors",
  "abs",
  "adductors",
  "biceps",
  "calves",
  "cardiovascular system",
  "delts",
  "forearms",
  "glutes",
  "hamstrings",
  "lats",
  "levator scapulae",
  "pectorals",
  "quads",
  "serratus anterior",
  "spine",
  "traps",
  "triceps",
  "upper back",
];
export const EquipmentList = [
  "assisted",
  "band",
  "barbell",
  "body weight",
  "bosu ball",
  "cable",
  "dumbbell",
  "elliptical machine",
  "ez barbell",
  "hammer",
  "kettlebell",
  "leverage machine",
  "medicine ball",
  "olympic barbell",
  "resistance band",
  "roller",
  "rope",
  "skierg machine",
  "sled machine",
  "smith machine",
  "stability ball",
  "stationary bike",
  "stepmill machine",
  "tire",
  "trap bar",
  "upper body ergometer",
  "weighted",
  "wheel roller",
];
const headers = {
  "X-RapidAPI-Key": "6c2a704035mshed3f3f412f5f9aap1c236bjsnbaf789e00c56",
  "X-RapidAPI-Host": "youtube-search-and-download.p.rapidapi.com",
};
const Fetch = axios.create({
  baseURL: "https://exercisedb.p.rapidapi.com",
  headers: {
    "X-RapidAPI-Key": "6c2a704035mshed3f3f412f5f9aap1c236bjsnbaf789e00c56",
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
  },
});

export const ExercisesList = async (currentPage) => {
  const response = await Fetch.get(
    `/exercises?limit=1300&offset=${currentPage}`
  );
  return await response.data;
};
export const ExerciseDetail = async (id) => {
  const response = await Fetch.get(`/exercises/exercise/${id}`);
  return await response.data;
};

export const FetchSimilairVideo = async (name) => {
  const response = await axios.get(
    `https://youtube-search-and-download.p.rapidapi.com/search?query=${name}`,
    { headers }
  );
  return response;
};
