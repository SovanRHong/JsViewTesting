import { franc } from "franc";
import langs from "langs";
const input = process.argv[2];

const langCode = franc(input);

console.log(langCode);

const languages = langs.where("3", langCode);

console.log(languages);
