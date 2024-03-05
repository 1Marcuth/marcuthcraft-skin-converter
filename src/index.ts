import Jimp from "jimp"

async function convertMinecraftSkinToMarcuthcraft(inputFilePath: string): Promise<Jimp> {
    const inputImg = await Jimp.read(inputFilePath)
    inputImg.rgba(true)

    const outputImgWidth = 12
    const outputImgHeight = 20
    const outputImg = new Jimp(outputImgWidth, outputImgHeight, 0x000000ff)

    const headImg = inputImg.clone().crop(0, 8, 8, 8)
    const torsoImg = inputImg.clone().crop(16, 20, 4, 14)
    const armImg = inputImg.clone().crop(40, 20, 4, 12)
    const legImg = inputImg.clone().crop(0, 20, 4, 12)

    outputImg.composite(headImg, 0, 0)
    outputImg.composite(torsoImg, 0, 8)
    outputImg.composite(armImg, 4, 8)
    outputImg.composite(legImg, 8, 0)

    return outputImg
}

export { convertMinecraftSkinToMarcuthcraft }