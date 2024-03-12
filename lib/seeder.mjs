import fs from "fs";
import path from "path";
import { faker } from "@faker-js/faker";

const generateUser = () => ({
  id: faker.string.uuid(),
  username: faker.internet.userName(),
  team: faker.company.name(),
  about: faker.lorem.sentence(),
  avatar: faker.image.avatar(),
  createdAt: faker.date.past().toISOString(),
});

const generateDetails = () => ({
  version: `version-${faker.number.int({ min: 1, max: 10 })}`,
  maxVersion: `version-${faker.number.int({ min: 10, max: 20 })}`,
  count: faker.number.int({ min: 1, max: 100 }),
  linkedClusters: [faker.string.uuid()],
  about: faker.lorem.sentence(),
});

const generateMessage = () => ({
  id: faker.string.uuid(),
  content: faker.lorem.sentence(),
  repliedTo: faker.datatype.boolean(),
});

const generateCluster = () => ({
  id: faker.string.uuid(),
  user: generateUser(),
  details: generateDetails(),
  messages: Array.from(
    { length: faker.number.int({ min: 3, max: 6 }) },
    generateMessage
  ),
});

const clusters = Array.from({ length: 40 }, generateCluster);

const jsonData = JSON.stringify(clusters, null, 2);
const outputPath = path.join("data", "clusters.json");

fs.writeFile(outputPath, jsonData, (err) => {
  if (err) {
    console.error("Error writing clusters.json:", err);
  } else {
    console.log("Successfully wrote clusters.json");
  }
});
