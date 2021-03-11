import data from "./data.js";

let standardCss = ``;
let reproSDK = ` <script>
!(function (o, e, n) {
  var r = [];
  if (window.reproio)
    console.info("Repro Web SDK was loaded more than once");
  else {
    window.reproio = function () {
      r.push(arguments);
    };
    var i = o.createElement(e),
      t = o.getElementsByTagName(e)[0];
    (i.src = "https://cdn.reproio.com/web/v2/repro-sdk.min.js"),
      (i.async = !0),
      (i.crossOrigin = ""),
      (i.onload = function () {
        window.reproio("setSnippetVersion", "2.1"),
          r.forEach(function (o) {
            window.reproio.apply(window.reproio, o);
          });
      }),
      t.parentNode.insertBefore(i, t);
  }
})(document, "script");
reproio("setup", "3a35a34b-ea54-43ff-9d52-5a7b6e70982c");
reproio("track", "PageView");
</script>`;

function createSectionFromObject({ name, js, css, html }) {
  let section = document.createElement("section");
  let heading = document.createElement("h2");
  heading.innerText = name;
  let title = `<title>${name}</title>`;
  let frame = document.createElement("iframe");
  frame.loading = "lazy";
  frame.title = name;
  section.appendChild(frame);
  document.body.appendChild(heading);
  document.body.appendChild(section);

  //   beautify step
  js = js_beautify(js);
  css = css_beautify(css);
  html = html_beautify(html);

  let code = document.createElement("section");
  code.classList.add("code");
  document.body.appendChild(code);

  [js, css, html].forEach((t, ix) => {
    let c = document.createElement("code");
    let lang =
      ix == 0
        ? "language-javascript"
        : ix == 1
        ? "language-css"
        : "language-html";
    c.classList.add(lang);
    let pre = document.createElement("pre");
    pre.appendChild(c);
    c.innerText = t;
    code.appendChild(pre);
  });

  let content = title + reproSDK + standardCss;
  frame.contentWindow.document.open();
  frame.contentWindow.document.write(content);
  frame.contentWindow.document.close();
}

data.forEach((n) => createSectionFromObject(n));

hljs.highlightAll();
