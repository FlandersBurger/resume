// Public landing page: explains the game and links to both the Telegram and Discord bots
export const TEN_THINGS_URL = "https://belgocanadian.com/tenthings";

// Server install with the same permissions as the "Add to Discord" link on the lists page
export const discordInviteUrl = () =>
  `https://discord.com/oauth2/authorize?client_id=${process.env.DISCORD_APP_ID}&permissions=274877975552&integration_type=0&scope=bot+applications.commands`;
