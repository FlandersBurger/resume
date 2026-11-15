/** A chat message written as Telegram HTML, as Discord markdown and plain characters. */
export const htmlToMarkdown = (html: string): string => {
  return (
    html
      .replace(/<pre>([\s\S]*?)<\/pre>/g, "```\n$1\n```")
      .replace(/<b>([\s\S]*?)<\/b>/g, "**$1**")
      .replace(/<i>([\s\S]*?)<\/i>/g, "*$1*")
      .replace(/<u>([\s\S]*?)<\/u>/g, "__$1__")
      .replace(/<a href="[^"]*">&#8204;<\/a>/g, "") // invisible link (used for images in Telegram)
      .replace(/<a href="([^"]*)">([\s\S]*?)<\/a>/g, "[$2]($1)")
      .replace(/<[^>]+>/g, "") // strip remaining tags
      // Discord shows text as is: turn the HTML escapes (parseSymbols) back into characters, & last.
      .replace(/&lt;/g, "<")
      .replace(/&gt;/g, ">")
      .replace(/&quot;/g, '"')
      .replace(/&#39;/g, "'")
      .replace(/&num;/g, "#")
      .replace(/&amp;/g, "&")
  );
};
