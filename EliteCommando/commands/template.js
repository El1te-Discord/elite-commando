module.exports = {
  name: "template", //Replace the name, aliases and description with what you like! (name has to be the same as the command name)
  aliases: ["tmp"],
  description: "Just a template",
  execute(message) {
    message.channel.send(`This is a template!`)
  }
};
