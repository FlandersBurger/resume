module.exports = {
  secret: 'global_token_secret',
  masterChat: 'chat_id_of_master_chat',
  groupChat: 'chat_id_of_group_chat',
  adminChat: 'chat_id_of_admin_chat',
  noticeChannel: 'chat_id_of_suggestion_feed',
  admins: [
    //administrator mongo ids (users._id)
  ],
  redis: {
    password: 'redis_password',
    port: 6379
  },
  captcha: {
    publicKey: 'captcha_key',
    secretKey: 'captcha_secret'
  },
  mongoDBs: [{
      name: 'backup',
      url: 'mongo_url'
    },
    {
      name: 'master',
      url: 'mongo_url',
    }
  ],
  gmail: {
    service: 'gmail',
    auth: {
      user: 'gmail_address',
      pass: 'gmail_key'
    }
  },
  tokens: {
    telegram: {
      tenthings: 'telegram_key_for_tenthings'
    },
    facebook: {
      tenthings: 'facebook_key_for_tenthings'
    },
    rapidapi: 'rapidapi_key',
    tmdbapi: 'tmdb_key',
    goodreadsapi: 'goodreads_key',
    youtubeapi: 'youtube_key',
    unsplashapi: {
      key: 'unsplash_key',
      secret: 'unsplash_secret'
    }
  }
};