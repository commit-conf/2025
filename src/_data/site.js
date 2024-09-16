const communities = require("./communities.js");
const sponsors = require("./sponsors.js");

module.exports = function () {
  return {
    buildTime: new Date(),
    baseUrl: "https://2025.commit-conf.com",
    metaImage: "https://2025.commit-conf.com/img/square-head.jpg",
    name: "Commit Conf",
    email: "info@commit-conf.com",
    twitter: "@commitconf",
    youtubeChannel: "UCd_1KHg4t2VKGsSDF8OD5Cw",
    environment: process.env.ENV || "prod",
    c4pURL: "https://koliseo.com/commit/commit-conf-2025/sessions",
    agendaURL: "https://koliseo.com/commit/commit-conf-2025/agenda",
    ticketsURL: "https://koliseo.com/commit/commit-conf-2025/tickets",
    photosURL:
      "https://www.flickr.com/photos/145448896@N02/albums/72177720316450150",
    videosURL:
      "https://youtube.com/playlist?list=PLu976vDeELBquvUU5GLv0FVPAsrg7AEEv&si=GgaFl5YII4H30Gnh",
    newsletter:
      "https://commit-conf.us8.list-manage.com/subscribe?u=b180f87ed019c243f111b693a&amp;id=6a6bdcb448",
    communities,
    sponsors,
  };
};
