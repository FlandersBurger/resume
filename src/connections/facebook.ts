import httpClient from "@root/http-client";

class Facebook {
  private token: string;

  constructor(token: string) {
    this.token = token;
  }

  public queueMessage = async (chat_id: string, message: string) => {
    var request_body = {
      recipient: {
        id: chat_id,
      },
      message: message,
    };
    const { data } = await httpClient().post("https://graph.facebook.com/v2.6/me/messages", request_body, {
      headers: { access_token: this.token },
    });
    console.log(data);
  };
}

const api = new Facebook(process.env.FACEBOOK_TOKEN!);

export default api;
