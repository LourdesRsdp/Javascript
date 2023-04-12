const getMovements = (req, res, next) => {
    next();
};
  
module.exports = (req, res, next) => {
    if (req.path === '/movements') {
      getMovements(req, res, next);
    } else if(req.path === "/movements/:id"){

    } else {
      next();
    }
};