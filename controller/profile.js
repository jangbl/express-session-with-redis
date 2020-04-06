function profile(req, res) {
    res.json(req.session);
}

module.exports = {profile};