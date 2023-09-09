import Box from "@mui/material/Box";

export default function Home() {
  return (
    <Box
      id="home"
      sx={{
        alignItems: "center",
        display: "flex",
        flex: "1 0 auto",
        textAlign: "center"
      }}
    >
      <div className="d-viewport home">
        <h1>
          <span data-shadow-text="Kevin Boucher">Kevin Boucher</span>
        </h1>
        <h2>
          UI/UX Engineer<br />
          JavaScript · HTML · CSS
        </h2>
        <a
          className="icon-link about-site"
          href="https://kboucher.github.io"
          rel="noopener noreferrer"
          target="_blank"
        >
          More about this site
          <i className="material-icons ms-1">open_in_new</i>
        </a>
      </div>
    </Box>
  )
}
