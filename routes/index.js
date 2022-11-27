const router = require('express').Router();
const apiRoutes = require('./api');

router.use('/api', apiRoutes);

router.use((res, req) => {
    return res.send('Oops! Wrong Route!');
});

module.exports = router;