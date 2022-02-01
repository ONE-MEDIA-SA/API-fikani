const Feature = (database) => {
    const Sequelize = database.Sequelize;
    return database.define('feature', {
        liveLink: {},
        googleLink: {},
        facebookLink: {},
        twitterLink: {},
        instagramLink: {},
        youtubeLink: {},
        

    })
}