export default {
  logo: <span>Crudsify Documentation</span>,
  project: {
    link: "https://github.com/prudradeep/crudsify",
  },
  useNextSeoProps() {
    return {
      titleTemplate: "%s – Crudsify",
    };
  },
  sidebar: {
    autoCollapse: true,
    defaultMenuCollapseLevel: 1,
  },
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content="Crudsify" />
      <meta
        property="og:description"
        content="CRUDSIFY - A Simplified RESTful API generator"
      />
    </>
  ),
  editLink: {
    component: null,
  },
  feedback: {
    content: "Question? Give us feedback",
    useLink: () => "https://github.com/prudradeep/crudsify/issues/new",
  },
  footer: {
    text: (
      <span>
        MIT {new Date().getFullYear()} ©{" "}
        <a href="https://crudsify.com" target="_blank">
          Crudsify
        </a>
        .
      </span>
    ),
  },
};
