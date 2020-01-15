var Bump = {
  Bump: require("./Bump"),
};

//dump everything into extras

Object.assign(PIXI, Bump);

module.exports = Bump;
