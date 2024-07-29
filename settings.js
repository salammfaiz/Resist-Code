const prefix = process.env.prefix || '?'
const status = `${prefix}help | FaizenSosuke`;

module.exports = {
  bot: {
    info: {
      prefix: '?',
      token: '',
      invLink: 'https://discord.com/api/oauth2/authorize?client_id=1133009695112708109&permissions=8&scope=bot%20applications.commands',
      privacy: 'https://github.com/AryptonXD/Resist/blob/main/ResistPrivacyPolicy.md',
      terms: 'https://github.com/AryptonXD/Resist/blob/main/ResistTermsAndConditions.md',
    },
    presence: {
      name: status,
      type: 'LISTENING',
      url: 'https://twitch.tv/pewdiepie'
    },
    credits: {
      developerId: '963354050617815060',
      supportServer: 'https://discord.gg/FaizenSosuke'
    },
  }
}
