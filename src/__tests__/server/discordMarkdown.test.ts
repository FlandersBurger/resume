import { htmlToMarkdown } from "@root/connections/discordMarkdown";

describe("htmlToMarkdown", () => {
  it("turns the chat HTML into Discord markdown", () => {
    expect(htmlToMarkdown('<b>1:</b> <i>Ann</i> <u>u</u> <a href="https://x.io">link</a>')).toBe(
      "**1:** *Ann* __u__ [link](https://x.io)",
    );
  });

  it("shows escaped symbols as the characters they stand for", () => {
    expect(htmlToMarkdown("<b>Tamataki &amp; Chamataki &num;1 &lt;3 &gt; &quot;x&quot; &#39;y&#39;</b>")).toBe(
      "**Tamataki & Chamataki #1 <3 > \"x\" 'y'**",
    );
  });

  it("decodes only once, so an escaped escape stays as written", () => {
    expect(htmlToMarkdown("&amp;lt;")).toBe("&lt;");
  });
});
