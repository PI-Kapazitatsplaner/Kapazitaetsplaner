import express from 'express';

import ejs from 'ejs';

let router = express.Router();

router.get('/', async (req, res) => {
    res.redirect('/team_kalender');
});



export = router;