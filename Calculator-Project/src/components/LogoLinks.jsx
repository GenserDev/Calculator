function LogoLinks({ genserLogo, githublogo, notpush }) {
  return (
    <>
      <a href="https://genserdev.space/">
        <img src={genserLogo} alt="genserdev" />
      </a>
      <a href="https://github.com/GenserDev/Calculator">
        <img src={githublogo} alt="genserdev" />
      </a>
      {/* Este va en la posición específica del grid */}
    </>
  );
}

export default LogoLinks;