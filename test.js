import fs from "fs/promises"

const main = async () => {

    let text = await fs.readFile("myfile.txt", "utf-8");
    console.log(text);

};

main();