import { useState, useEffect } from 'react';

interface AbilitiesContainerProps {
  abilities: {
    ability: {
      'name': string;
      url: string;
    };
    'is_hidden': boolean;
    slot: number;
  }[];
}

function AbilitiesContainer(props: AbilitiesContainerProps) {
  const [hiddenAbilities,
    setHiddenAbilities] = useState([] as AbilitiesContainerProps['abilities']);
  const [nonHiddenAbilities,
    setNonHiddenAbilities] = useState([] as AbilitiesContainerProps['abilities']);
  const { abilities } = props;
  const [collumClassName, setCollumClassName] = useState('' as string);

  const separateAbilities = (abilitiesArray: AbilitiesContainerProps['abilities']) => {
    const hidden: AbilitiesContainerProps['abilities'] = [];
    const nonHidden: AbilitiesContainerProps['abilities'] = [];

    abilitiesArray.forEach((ability) => {
      if (ability.is_hidden) {
        hidden.push(ability);
      } else {
        nonHidden.push(ability);
      }
    });

    setHiddenAbilities(hidden);
    setNonHiddenAbilities(nonHidden);
    setCollumClassName(`grid gap-2 grid-cols-${nonHidden.length} text-center`);
  };

  useEffect(() => {
    separateAbilities(abilities);
  }, [abilities]);

  const replaceWithSpace = (string: string) => string.replace(/-/g, ' ');

  const renderAbility = (abilityName: string, key: number, isHidden: boolean) => (
    <div
      key={ key }
    >
      <p
        className="capitalize"
        key={ key }
      >
        { replaceWithSpace(abilityName) }
      </p>
      { isHidden && <p className="text-sm text-center">Hidden</p> }
    </div>
  );

  return (
    <div
      className="grid grid-cols-1 gap-2 w-full place-items-center"
    >
      <h1 className="text-2xl">Abilities</h1>
      <div
        className={ collumClassName }
      >
        { nonHiddenAbilities
          .map((ability, index) => renderAbility(ability.ability.name, index, false)) }
      </div>
      <div>
        { hiddenAbilities
          .map((ability, index) => renderAbility(ability.ability.name, index, true)) }
      </div>
    </div>
  );
}

export default AbilitiesContainer;
