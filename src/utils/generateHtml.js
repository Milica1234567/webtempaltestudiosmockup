export const generateHtml = (elements) => {
  const body = elements
    .map((el) => {
      if (el.type === "navbar") {
        const links = el.items
          .map((item) => `<a href="#">${item}</a>`)
          .join(" ");

        return `<nav class="navbar ${el.variant}">
    ${links}
  </nav>`;
      }

      if (el.type === "text") {
        return `<p>${el.content}</p>`;
      }
      if (el.type === "button") {
        return `<button>${el.content}</button>`;
      }
      return "";
    })
    .join("\n");

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>CodeCanvas Export</title>
</head>
<body>
${body}
</body>
</html>`;
};
