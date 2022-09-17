const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = async (emosi) => {
    const ixx = await promiseTheaterIXX().then((values) => values.filter((value) => value.hasil === emosi));
    const vgc = await promiseTheaterVGC().then((values) => values.filter((value) => value.hasil === emosi));

    return ixx.concat(vgc).length;
};

module.exports = {
    promiseOutput,
};
