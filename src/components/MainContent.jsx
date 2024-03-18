import Articles from "./Articles";
const MainContent = () => {
  return (
    <main className="article">
      <Articles
        className="article1"
        Title="Vivre à Montreal combien ça coute ??"
        Subtitle="Le guide pour vitre à Montreal"
        Picture="Australie"
        Description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla interdum, tellus eget cursus maximus, sem enim vestibulum orci, quis dapibus neque sapien vel massa. Fusce iaculis vulputate dui non bibendum. Cras eget accumsan dui, eu vehicula lorem. Praesent sed orci consectetur, venenatis sapien quis, aliquet sem. Praesent sit amet lectus fermentum, iaculis lorem eget, euismod purus. Donec eget mauris vitae libero finibus imperdiet. Duis nulla purus, aliquam et consequat vitae, laoreet in nunc. Curabitur faucibus hendrerit tristique. Sed maximus ultrices diam in semper.
        "
      />
      <Articles
        className="article2"
        Title="Trouvez un logement à Montreal, le guide !"
        Subtitle="Un logement c'est chaud à trouver ?"
        Picture="Australie"
        Description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla interdum, tellus eget cursus maximus, sem enim vestibulum orci, quis dapibus neque sapien vel massa. Fusce iaculis vulputate dui non bibendum. Cras eget accumsan dui, eu vehicula lorem. Praesent sed orci consectetur, venenatis sapien quis, aliquet sem. Praesent sit amet lectus fermentum, iaculis lorem eget, euismod purus. Donec eget mauris vitae libero finibus imperdiet. Duis nulla purus, aliquam et consequat vitae, laoreet in nunc. Curabitur faucibus hendrerit tristique. Sed maximus ultrices diam in semper.
        "
      />
    </main>
  );
};
export default MainContent;
