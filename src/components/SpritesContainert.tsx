interface Props {
  sprites: {
    'front_default': string;
    'front_female': string;
    'back_default': string;
    'back_female': string;
    'front_shiny': string;
    'front_shiny_female': string;
    'back_shiny': string;
    'back_shiny_female': string;
    other: any;
    versions: any;
  };
}

function SpritesContainer({ sprites }: Props) {
  const copy = { ...sprites };
  delete copy.other;
  delete copy.versions;
  const spriteArray = Object.entries(copy);
  const withouNulls = spriteArray.filter((sprite) => sprite[1] !== null);
  const replaceWithSpace = (string: string) => string.replace(/_/g, ' ');

  return (
    <div
      className="grid grid-cols-1 gap-2 w-full place-items-center"
    >
      <h1 className="text-2xl">Sprites</h1>
      <div
        className="grid grid-cols-2 gap-2"
      >
        { withouNulls.map((sprite, index) => (
          <div key={ index }>
            <p
              className="text-center capitalize"
            >
              { replaceWithSpace(sprite[0]) }
            </p>
            <img
              src={ sprite[1] }
              alt={ sprite[0] }
              className="w-32 h-32"
            />
          </div>
        )) }
      </div>
    </div>
  );
}

export default SpritesContainer;
